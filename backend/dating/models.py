from django.conf import settings
from django.db import models


class Match(models.Model):
    "Generated Model"
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        related_name="match_user",
    )
    owner = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        related_name="match_owner",
    )
    created = models.DateTimeField(
        auto_now_add=True,
    )


class Profile(models.Model):
    "Generated Model"
    bio = models.TextField()
    school = models.TextField()
    date_of_birth = models.DateField()
    created = models.DateField(
        auto_now_add=True,
    )
    modified = models.DateField(
        auto_now=True,
    )
    user = models.OneToOneField(
        "users.User",
        null=True,
        blank=True,
        on_delete=models.CASCADE,
        related_name="profile_user",
    )


class UserPhoto(models.Model):
    "Generated Model"
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        related_name="userphoto_user",
    )
    photo = models.URLField()


class Inbox(models.Model):
    "Generated Model"
    slug = models.SlugField(
        max_length=50,
    )
    created = models.DateTimeField(
        auto_now_add=True,
    )


class Like(models.Model):
    "Generated Model"
    owner = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        related_name="like_owner",
    )
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        related_name="like_user",
    )
    super_liked = models.BooleanField()


class Dislike(models.Model):
    "Generated Model"
    owner = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        related_name="dislike_owner",
    )
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        related_name="dislike_user",
    )


class Setting(models.Model):
    "Generated Model"
    maximum_distance = models.IntegerField()
    gender = models.CharField(
        max_length=256,
    )
    age_range = models.IntegerField()
    show_me_on_searches = models.BooleanField()
    new_matches_notification = models.BooleanField()
    message_notification = models.BooleanField()
    message_likes_notification = models.BooleanField()
    super_like_notification = models.BooleanField()
    in_app_vibrations = models.BooleanField()
    user = models.ForeignKey(
        "users.User",
        null=True,
        blank=True,
        on_delete=models.CASCADE,
        related_name="setting_user",
    )


# Create your models here.
