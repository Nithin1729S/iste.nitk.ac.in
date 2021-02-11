
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

def upload_to_cloudinary(file):
    cloudinary.config(api_key="264523198191786",
                    api_secret="xfxjJDVmW-W0qHseO-0GqHV5yvE",
                    cloud_name="smarkt")
    r = up.upload(file)
    return r['url'].replace('http:','https:')