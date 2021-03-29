from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    SettingViewSet,
    ProfileViewSet,
    InboxViewSet,
    DislikeViewSet,
    MatchViewSet,
    UserPhotoViewSet,
    LikeViewSet,
)

router = DefaultRouter()
router.register("match", MatchViewSet)
router.register("profile", ProfileViewSet)
router.register("userphoto", UserPhotoViewSet)
router.register("inbox", InboxViewSet)
router.register("like", LikeViewSet)
router.register("dislike", DislikeViewSet)
router.register("setting", SettingViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
