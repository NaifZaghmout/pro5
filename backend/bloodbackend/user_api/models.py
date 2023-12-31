"""
Database models
"""
from django.db import models
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin


class AppUserManager(BaseUserManager):
    """
    User management
    """

    def create_user(self, email, password=None):
        """
        Create the user
        """
        if not email:
            raise ValueError("An email is required.")
        if not password:
            raise ValueError("A password is required.")
        email = self.normalize_email(email)
        user = self.model(email=email)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password=None):
        """
        Create the super user
        """
        if not email:
            raise ValueError("An email is required.")
        if not password:
            raise ValueError("A password is required.")
        user = self.create_user(email, password)
        user.is_superuser = True
        user.save()
        return user


class AppUser(AbstractBaseUser, PermissionsMixin):
    """
    App User
    """

    user_id = models.AutoField(primary_key=True)
    email = models.EmailField(max_length=50, unique=True)
    username = models.CharField(max_length=50)
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]
    objects = AppUserManager()

    def __str__(self):
        """
        username
        """
        return self.username


class PatientBlood(models.Model):
    """
    Patient blood Model
    """

    patient_name = models.CharField(max_length=1000)
    patient_email = models.CharField(max_length=1000)
    patient_phone_number = models.CharField(max_length=1000)
    patient_blood_type = models.CharField(max_length=1000)
    patient_health_information = models.CharField(max_length=2000)
    resolved = models.BooleanField(
        default=False
    )  # New field to track resolution status

    def mark_as_resolved(self):
        """
        Mark the case as resolved
        """
        self.resolved = True
        self.save()
