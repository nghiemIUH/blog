import json
import requests
from django.views import generic
from django.http import HttpResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from . import sualoi
import pickle
import tensorflow as tf
# Create your views here.
with open('chat/models/token1.pkl', 'rb') as f:
    tokenizer_ipt, tokenizer_opt = pickle.load(f)

num_layers = 4
d_model = 256
dff = 512
num_heads = 8
ipt_vocab_size = tokenizer_ipt.vocab_size + 2
opt_vocab_size = tokenizer_opt.vocab_size + 2
dropout_rate = 0.2

transformer = sualoi.Transformer(num_layers=num_layers, d_model=d_model, num_heads=num_heads, dff=dff,
                                 input_vocab_size=ipt_vocab_size, target_vocab_size=opt_vocab_size,
                                 pe_input=ipt_vocab_size,
                                 pe_target=opt_vocab_size,
                                 rate=dropout_rate)
checkpoint_path = "chat/models"

ckpt = tf.train.Checkpoint(transformer=transformer,)

ckpt_manager = tf.train.CheckpointManager(ckpt, checkpoint_path, max_to_keep=5)
if ckpt_manager.latest_checkpoint:
    ckpt.restore(ckpt_manager.latest_checkpoint)

# Facebook API
PAGE_ACCESS_TOKEN = ""
VERIFY_TOKEN = "rasademo"


def post_facebook_message(fbid, recevied_message):
    recevied_message = sualoi.predict(recevied_message, tokenizer_ipt,
                                      tokenizer_opt, transformer, maxlen=150)
    print(recevied_message)
    data = json.dumps({"message": "%s" % recevied_message, "sender": "Me"})
    p = requests.post('http://localhost:5005/webhooks/rest/webhook',
                      headers={"Content-Type": "application/json"}, data=data).json()
    if len(p) == 0:
        response = 'Mình vẫn chưa hiểu ý bạn. Bạn hãy nói rõ hơn được không :)'
    else:
        response = p[0]['text']
    json_file = {
        "recipient": {
            "id": fbid
        },
        "message": {
            "text": response
        }
    }
    send(fbid, json_file)


# facebook

def send(fbid, json_file):
    user_details_url = "https://graph.facebook.com/v12.0/%s" % fbid
    user_details_params = {
        'fields': 'first_name,last_name,profile_pic', 'access_token': PAGE_ACCESS_TOKEN}

    user_details = requests.get(user_details_url, user_details_params).json()

    post_message_url = 'https://graph.facebook.com/v12.0/me/messages?access_token=%s' % PAGE_ACCESS_TOKEN

    response_msg = json.dumps(json_file)
    status = requests.post(post_message_url, headers={
                           "Content-Type": "application/json"}, data=response_msg)


class BotView(generic.View):
    def get(self, request, *args, **kwargs):
        if self.request.GET['hub.verify_token'] == VERIFY_TOKEN:
            return HttpResponse(self.request.GET['hub.challenge'])
        else:
            return HttpResponse('Error, invalid token')

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return generic.View.dispatch(self, request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        incoming_message = json.loads(self.request.body.decode('utf-8'))
        for entry in incoming_message['entry']:
            for message in entry['messaging']:
                if 'message' in message:
                    try:
                        post_facebook_message(
                            message['sender']['id'], message['message']['text'])
                    except:
                        post_facebook_message(
                            message['sender']['id'], ":D :D")
                if 'postback' in message:
                    post_facebook_message(
                        message['sender']['id'], message['postback']['payload'])
        return HttpResponse()
