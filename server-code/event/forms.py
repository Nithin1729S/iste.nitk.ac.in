from django.forms import ModelForm
from .models import Event

class EventForm(ModelForm):
    class Meta:
        model = Event
        fields = '__all__'
    def __init__(self, *args, **kwargs):
        super(EventForm, self).__init__(*args, **kwargs)
        self.fields['sigs'].widget.attrs['searchable'] = 'Search for user'
        self.fields['editable_by'].widget.attrs['searchable'] = 'Search for user'
        