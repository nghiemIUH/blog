# This files contains your custom actions which can be used to run
# custom Python code.
#
# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/core/actions/#custom-actions/


# This is a simple example for a custom action which utters "Hello World!"
from typing import Any, Text, Dict, List, Union
from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
from rasa_sdk.forms import FormAction
from rasa_sdk.events import UserUtteranceReverted
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.sequence import pad_sequences
import pickle
import numpy as np

model = load_model('actions/model.h5')
with open('actions/labels.pkl', 'rb') as f:
    labels = pickle.load(f)

with open('actions/token.pkl', 'rb') as f:
    tokenizer = pickle.load(f)

pred_monhoc = 'khmt'


def predict_monhoc(text):
    text = text.lower()
    ids = [tokenizer.vocab_size] + \
        tokenizer.encode(text) + [tokenizer.vocab_size + 1]
    ids = pad_sequences([ids], maxlen=92, padding='post')
    predict = model.predict(ids)[0]
    label = labels.classes_[np.argmax(predict)]
    return label[-4:]


class action_luong(Action):
    def name(self):
        return 'action_luong'

    def run(self, dispatcher, tracker, domain):
        mon_hoc = predict_monhoc(tracker.latest_message['text'])
        global pred_monhoc
        if mon_hoc == 'khac':
            mon_hoc = pred_monhoc
        else:
            pred_monhoc = mon_hoc
        print(pred_monhoc, mon_hoc)
        dispatcher.utter_message(template='utter_' + mon_hoc + '_luong')
        return []


def createButton():
    temp_button_lst = []

    temp_button_lst.append({
        "type": "postback",
        "title": "Khoa học máy tính",
        "payload": "tư vấn ngành khoa học máy tính"
    })

    temp_button_lst.append({
        "type": "postback",
        "title": "Kĩ thuật phần mềm",
        "payload": "tư vấn ngành kỹ thuật phần mềm"
    })

    temp_button_lst.append({
        "type": "postback",
        "title": "Công nghệ thông tin",
        "payload": "tư vấn ngành công nghệ thông tin"
    })

    temp_button_lst.append({
        "type": "postback",
        "title": "Hệ thống thông tin",
        "payload": "tư vấn ngành hệ thống thông tin"
    })

    temp_button_lst.append({
        "type": "postback",
        "title": "Khoa học dữ liệu",
        "payload": "tư vấn ngành khoa học dữ liệu"
    })

    return temp_button_lst


class action_but(Action):
    def name(self):
        return 'action_but'

    def run(self, dispatcher, tracker, domain):
        but = createButton()
        dispatcher.utter_message(text="Bạn cần tư vấn gì", buttons=but)
        return []


class action_unknown(Action):
    def name(self):
        return "action_unknown"

    def run(self, dispatcher, tracker, domain):
        print('unknown running....................')
        dispatcher.utter_message(text='Xin lỗi mình chưa hiểu ý bạn')
        but = createButton()
        dispatcher.utter_message(
            text="Bạn có thể chọn các chuyên ngành sau", buttons=but)

        return []


class action_tuvan(Action):
    def name(self):
        return "action_tuvan"

    def run(self, dispatcher, tracker, domain):
        mon_hoc = predict_monhoc(tracker.latest_message['text'])
        global pred_monhoc
        if mon_hoc == 'khac':
            mon_hoc = pred_monhoc
        else:
            pred_monhoc = mon_hoc
        dispatcher.utter_message(template='utter_tuvan_' + mon_hoc)
        return []


class action_vieclam(Action):
    def name(self):
        return "action_vieclam"

    def run(self, dispatcher, tracker, domain):
        global pred_monhoc
        mon_hoc = predict_monhoc(tracker.latest_message['text'])
        if mon_hoc == 'khac':
            mon_hoc = pred_monhoc
        else:
            pred_monhoc = mon_hoc
        dispatcher.utter_message(template='utter_' + mon_hoc + '_vieclam')
        return []


class action_canhtranh(Action):
    def name(self):
        return "action_canhtranh"

    def run(self, dispatcher, tracker, domain):
        global pred_monhoc
        mon_hoc = predict_monhoc(tracker.latest_message['text'])
        if mon_hoc == 'khac':
            mon_hoc = pred_monhoc
        else:
            pred_monhoc = mon_hoc
        dispatcher.utter_message(template='utter_' + mon_hoc + '_canhtranh')
        return []


class action_tailieu(Action):
    def name(self):
        return "action_tailieu"

    def run(self, dispatcher, tracker, domain):
        global pred_monhoc
        mon_hoc = predict_monhoc(tracker.latest_message['text'])
        if mon_hoc == 'khac':
            mon_hoc = pred_monhoc
        else:
            pred_monhoc = mon_hoc
        dispatcher.utter_message(template='utter_' + mon_hoc + '_tailieu')
        return []


class action_dinhhuongsai(Action):
    def name(self):
        return "action_dinhhuongsai"

    def run(self, dispatcher, tracker, domain):
        global pred_monhoc
        mon_hoc = predict_monhoc(tracker.latest_message['text'])
        if mon_hoc == 'khac':
            mon_hoc = pred_monhoc
        else:
            pred_monhoc = mon_hoc
        dispatcher.utter_message(template='utter_' + mon_hoc + '_dinhhuongsai')
        return []


class action_ungdung(Action):
    def name(self):
        return "action_ungdung"

    def run(self, dispatcher, tracker, domain):
        global pred_monhoc
        mon_hoc = predict_monhoc(tracker.latest_message['text'])
        if mon_hoc == 'khac':
            mon_hoc = pred_monhoc
        else:
            pred_monhoc = mon_hoc
        dispatcher.utter_message(template='utter_' + mon_hoc + '_ungdung')
        return []


class action_linhvuc(Action):
    def name(self):
        return "action_linhvuc"

    def run(self, dispatcher, tracker, domain):
        global pred_monhoc
        mon_hoc = predict_monhoc(tracker.latest_message['text'])
        if mon_hoc == 'khac':
            mon_hoc = pred_monhoc
        else:
            pred_monhoc = mon_hoc
        dispatcher.utter_message(template='utter_' + mon_hoc + '_linhvuc')
        return []


class action_monhoc(Action):
    def name(self):
        return "action_monhoc"

    def run(self, dispatcher, tracker, domain):
        global pred_monhoc
        mon_hoc = predict_monhoc(tracker.latest_message['text'])
        if mon_hoc == 'khac':
            mon_hoc = pred_monhoc
        else:
            pred_monhoc = mon_hoc
        dispatcher.utter_message(template='utter_' + mon_hoc + '_monhoc')
        return []


class action_giangvien(Action):
    def name(self):
        return "action_giangvien"

    def run(self, dispatcher, tracker, domain):
        global pred_monhoc
        mon_hoc = predict_monhoc(tracker.latest_message['text'])
        if mon_hoc == 'khac':
            mon_hoc = pred_monhoc
        else:
            pred_monhoc = mon_hoc
        dispatcher.utter_message(template='utter_' + mon_hoc + '_giangvien')
        return []


class action_ngonngu(Action):
    def name(self):
        return "action_ngonngu"

    def run(self, dispatcher, tracker, domain):
        global pred_monhoc
        mon_hoc = predict_monhoc(tracker.latest_message['text'])
        if mon_hoc == 'khac':
            mon_hoc = pred_monhoc
        else:
            pred_monhoc = mon_hoc
        dispatcher.utter_message(template='utter_' + mon_hoc + '_ngonngu')
        return []


class action_chatluonggiaovien(Action):
    def name(self):
        return "action_chatluonggiaovien"

    def run(self, dispatcher, tracker, domain):
        global pred_monhoc
        mon_hoc = predict_monhoc(tracker.latest_message['text'])
        if mon_hoc == 'khac':
            mon_hoc = pred_monhoc
        else:
            pred_monhoc = mon_hoc
        dispatcher.utter_message(
            template='utter_' + mon_hoc + '_chatluonggiaovien')
        return []


class action_tinhcach(Action):
    def name(self):
        return "action_tinhcach"

    def run(self, dispatcher, tracker, domain):
        global pred_monhoc
        mon_hoc = predict_monhoc(tracker.latest_message['text'])
        if mon_hoc == 'khac':
            mon_hoc = pred_monhoc
        else:
            pred_monhoc = mon_hoc
        dispatcher.utter_message(template='utter_' + mon_hoc + '_tinhcach')
        return []


class action_thuctap(Action):
    def name(self):
        return "action_thuctap"

    def run(self, dispatcher, tracker, domain):
        global pred_monhoc
        mon_hoc = predict_monhoc(tracker.latest_message['text'])
        if mon_hoc == 'khac':
            mon_hoc = pred_monhoc
        else:
            pred_monhoc = mon_hoc
        dispatcher.utter_message(template='utter_' + mon_hoc + '_thuctap')
        return []


class action_xuhuong(Action):
    def name(self):
        return "action_xuhuong"

    def run(self, dispatcher, tracker, domain):
        global pred_monhoc
        mon_hoc = predict_monhoc(tracker.latest_message['text'])
        if mon_hoc == 'khac':
            mon_hoc = pred_monhoc
        else:
            pred_monhoc = mon_hoc
        dispatcher.utter_message(template='utter_' + mon_hoc + '_xuhuong')
        return []


class action_daotao(Action):
    def name(self):
        return "action_daotao"

    def run(self, dispatcher, tracker, domain):
        global pred_monhoc
        mon_hoc = predict_monhoc(tracker.latest_message['text'])
        if mon_hoc == 'khac':
            mon_hoc = pred_monhoc
        else:
            pred_monhoc = mon_hoc
        dispatcher.utter_message(template='utter_' + mon_hoc + '_daotao')
        return []


class action_lamgikhiratruong(Action):
    def name(self):
        return "action_lamgikhiratruong"

    def run(self, dispatcher, tracker, domain):
        global pred_monhoc
        mon_hoc = predict_monhoc(tracker.latest_message['text'])
        if mon_hoc == 'khac':
            mon_hoc = pred_monhoc
        else:
            pred_monhoc = mon_hoc
        dispatcher.utter_message(
            template='utter_' + mon_hoc + '_lamgikhiratruong')
        return []


class action_khokhan(Action):
    def name(self):
        return "action_khokhan"

    def run(self, dispatcher, tracker, domain):
        global pred_monhoc
        mon_hoc = predict_monhoc(tracker.latest_message['text'])
        if mon_hoc == 'khac':
            mon_hoc = pred_monhoc
        else:
            pred_monhoc = mon_hoc
        dispatcher.utter_message(template='utter_' + mon_hoc + '_khokhan')
        return []
