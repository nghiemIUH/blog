import json
import requests
from django.views import generic
from django.http import HttpResponse
from rest_framework.permissions import AllowAny
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
# Create your views here.


# Facebook API
PAGE_ACCESS_TOKEN = "EAAK0AI5bxoQBAPA0ZCHr9Q8xXqfNQU7kbKV46iTcyeV8o0OeQVW7XeHYcVQRA6M8YiKg3TaoTqXbByfd9fR07PWmRzvmfyP2D0i9Dbr220aVhKYfrZAnC9RWzG1DZAJSYq30afLfXpGzSgd56vk20BSYgFPhvWKJqvvEL1kpCjC6D5WQzRg"
VERIFY_TOKEN = "rasademo"


def post_facebook_message(fbid, recevied_message, sua_loi=True):

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
    print(response)
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
    print(user_details, status)


class BotView(generic.View):
    permission_classes = [AllowAny]

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
                            message['sender']['id'], ":D :D", sua_loi=False)
                if 'postback' in message:
                    post_facebook_message(
                        message['sender']['id'], message['postback']['payload'])
        return HttpResponse()
