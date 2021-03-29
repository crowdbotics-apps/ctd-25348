from rest_framework import authentication
from dating.models import Setting, Profile, Inbox, Dislike, Match, UserPhoto, Like
from .serializers import (
    SettingSerializer,
    ProfileSerializer,
    InboxSerializer,
    DislikeSerializer,
    MatchSerializer,
    UserPhotoSerializer,
    LikeSerializer,
)
from rest_framework import viewsets


class MatchViewSet(viewsets.ModelViewSet):
    serializer_class = MatchSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Match.objects.all()


class ProfileViewSet(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Profile.objects.all()


class UserPhotoViewSet(viewsets.ModelViewSet):
    serializer_class = UserPhotoSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = UserPhoto.objects.all()


class InboxViewSet(viewsets.ModelViewSet):
    serializer_class = InboxSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Inbox.objects.all()


class LikeViewSet(viewsets.ModelViewSet):
    serializer_class = LikeSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Like.objects.all()


class DislikeViewSet(viewsets.ModelViewSet):
    serializer_class = DislikeSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Dislike.objects.all()


class SettingViewSet(viewsets.ModelViewSet):
    serializer_class = SettingSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Setting.objects.all()
