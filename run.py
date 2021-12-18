from threading import Thread
import os
from time import sleep


def runBack_end():
    os.chdir('/home/ubuntu/blog/backend/')
    os.system('fuser -k 5000/tcp')
    os.system('npm start')


def runRasa():
    os.chdir('/home/ubuntu/blog/rasa/')
    os.system('fuser -k 5005/tcp')
    os.system(
        'rasa run --endpoints endpoints.yml --credentials credentials.yml & rasa run actions')


def runServer():
    os.chdir('/home/ubuntu/server/')
    os.system('bin/gunicorn_start')


t1 = Thread(target=runBack_end)
t2 = Thread(target=runRasa)
t3 = Thread(target=runServer)

t1.start()
sleep(10)
t2.start()
sleep(60)
t3.start()
