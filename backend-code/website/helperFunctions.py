# DEFAULTS


def default_user_avatar_path():
    return 'profile_pictures/generic.png'


def default_project_image_path():
    return 'project_posters/generic.png'


def default_event_poster_path():
    return 'event_pictures/generic.png'


def default_sig_poster_path():
    return 'logo_2.png'


def default_carousel_image_path():
    return 'carousel_home/None_ISTE_Banner.jpg'


def default_gallery_image_path():
    return 'logo_2.png'

# UPLOAD PATHS


def sig_avatar_upload_path(instance, filename):
    return 'sig_pictures/{}_{}'.format(instance.id, filename)


def user_avatar_upload_path(instance, filename):
    return 'profile_pictures/{}_{}'.format(instance.id, filename)


def event_poster_upload_path(instance, filename):
    return 'event_pictures/{}_{}'.format(instance.id, filename)


def carousel_upload_path(instance, filename):
    return 'carousel_home/{}_{}'.format(instance.id, filename)


def project_poster_upload_path(instance, filename):
    return 'project_posters/{}_{}'.format(instance.id, filename)


def gallery_image_upload_path(instance, filename):
    return 'gallery_images/{}_{}'.format(instance.id, filename)
