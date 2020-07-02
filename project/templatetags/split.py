from django import template

register = template.Library()

@register.filter(name = 'split')
def has_group(value, key):
    return value.split(key)