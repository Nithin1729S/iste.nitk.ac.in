from django.forms import ModelForm
from django.contrib.auth.forms import AuthenticationForm as LoginForm
from django.contrib.auth.forms import PasswordChangeForm
from .models import User

class EditProfileForm(ModelForm):
    class Meta:
        model = User
        fields = '__all__'
    def __init__(self, *args, **kwargs): 
        super(EditProfileForm, self).__init__(*args, **kwargs)                       
        self.fields['gender'].disabled = True
        # self.fields['sigs'].disabled = True
        self.fields['batch_of'].disabled = True