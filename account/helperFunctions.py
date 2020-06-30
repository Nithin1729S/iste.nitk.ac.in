from django.conf import settings

def default_user_avatar_path():
    return '{}profile_pictures/generic.png'.format(settings.MEDIA_URL)

def sig_avatar_upload_path(instance, filename):
    return 'sig_pictures/{}_{}'.format(instance.id, filename)

def user_avatar_upload_path(instance, filename):
    return 'profile_pictures/{}_{}'.format(instance.id, filename)
