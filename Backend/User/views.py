from rest_framework import status
from rest_framework.response import Response
from .serializers import SerializeUser
from django.contrib.auth import get_user_model, authenticate
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAdminUser
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


User = get_user_model()


@api_view(['POST'])
@permission_classes([AllowAny, ])
def sign_up(request):
    data = request.data
    user = User.objects.create(
        username=data['username'],
        password=data['password'],
        full_name=data['full_name'],
        email=data['email'],
        avatar=data['avatar']
    )

    serial = SerializeUser(user)
    return Response(data=serial.data, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([AllowAny, ])
def sign_in(request):
    user = request.data
    auth = authenticate(
        username=user['username'], password=user['password'])

    if auth is None:
        return Response(status=status.HTTP_400_BAD_REQUEST)

    serial = SerializeUser(auth)
    token = TokenObtainPairSerializer().get_token(user=auth)
    data = {
        'refresh_token': str(token),
        'access_token': str(token.access_token),
        'user': serial.data
    }
    return Response(data=data, status=status.HTTP_200_OK)
