from django.forms import ModelForm
from .models import Project

class ProjectForm(ModelForm):
    class Meta:
        model = Project
        fields = '__all__'
        labels = {
            'editable_by': 'Members'
        }
    def __init__(self, *args, **kwargs):
        super(AddProjectForm, self).__init__(*args, **kwargs)
        self.fields['editable_by'].widget.attrs['searchable'] = 'Search for user'
        