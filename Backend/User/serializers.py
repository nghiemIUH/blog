from rest_framework import serializers
from django.contrib.auth import get_user_model

user = get_user_model()


class SerializeUser(serializers.ModelSerializer):

    class Meta:
        model = user
        fields = '__all__'
