
def default_user_avatar_path():
    return 'profile_pictures/generic.png'

def sig_avatar_upload_path(instance, filename):
    return 'sig_pictures/{}_{}'.format(instance.id, filename)

def user_avatar_upload_path(instance, filename):
    return 'profile_pictures/{}_{}'.format(instance.id, filename)

def event_poster_upload_path(instance, filename):
    return 'event_pictures/{}_{}'.format(instance.id, filename)

def default_event_poster_path():
    return 'event_pictures/generic.png'
