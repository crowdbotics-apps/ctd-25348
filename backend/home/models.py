from django.conf import settings
from django.db import models

# Create your models here.

from django.db import models


class CustomText(models.Model):
    """
    Boilerplate model to populate the index homepage to demonstrate that the app was
    successfuly built. All references to it should be removed in order to remove this
    app from the project.
    """

    title = models.CharField(
        max_length=150,
    )


class HomePage(models.Model):
    """
    Boilerplate model to populate the index homepage to demonstrate that the app was
    successfuly built. All references to it should be removed in order to remove this
    app from the project.
    """

    body = models.TextField()


class Message(models.Model):
    "Generated Model"
    match = models.ForeignKey(
        "dating.Match",
        on_delete=models.CASCADE,
        related_name="message_match",
    )
    slug = models.SlugField(
        max_length=50,
    )
    created = models.DateTimeField(
        auto_now_add=True,
    )
    inbox = models.ForeignKey(
        "dating.Inbox",
        null=True,
        blank=True,
        on_delete=models.CASCADE,
        related_name="message_inbox",
    )
