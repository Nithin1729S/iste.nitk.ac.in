from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField
from account.models import SIG

# Create your models here.
class Round(models.Model):
    name = models.CharField(
        default = "",
        max_length = 200
    )
    description = RichTextUploadingField()
    sig = models.OneToOneField(
        SIG,
        on_delete=models.CASCADE,
    )
    date_time = models.DateTimeField(
        auto_now=False
    )
    isDone = models.BooleanField(
        default = False
    )

    def __str__(self):
        return self.name 