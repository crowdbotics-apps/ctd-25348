from rest_framework import serializers
from dating.models import Setting, Profile, Inbox, Dislike, Match, UserPhoto, Like


class MatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Match
        fields = "__all__"


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = "__all__"


class UserPhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserPhoto
        fields = "__all__"


class InboxSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inbox
        fields = "__all__"


class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = "__all__"


class DislikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dislike
        fields = "__all__"


class SettingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Setting
        fields = "__all__"
