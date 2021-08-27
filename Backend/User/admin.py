
from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin
from django.utils.translation import gettext_lazy as _
from django.utils.safestring import mark_safe
User = get_user_model()

# Register your models here.


@admin.register(User)
class CustomUserAdmin(UserAdmin):
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        (_('Personal info'), {
         'fields': ('full_name', 'email', 'avatar')}),
        (_('Permissions'), {
            'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions'),
        }),
        (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'password1', 'password2', 'email', 'full_name', 'avatar'),
        }),
    )
    list_display = ('user_name',
                    'fullName', 'is_staff', 'user_photo',)
    list_filter = ()
    search_fields = ('username', 'full_name', 'email')
    ordering = ('username',)
    list_display_links = ('user_name', 'fullName')

    list_per_page = 15

    def user_name(self, obj):
        return mark_safe(f'<span style="color: blue; font-weight: bold; font-size: 1.1rem">{obj.username}</span>')

    def fullName(self, obj):
        return mark_safe(f'<span style="color:red; font-weight:bold; font-size:1rem">{obj.full_name}</span>')

    def user_photo(self, obj):
        if obj.avatar == '':
            src = 'avatars/default.jpg'
        else:
            src = obj.avatar
        return mark_safe('<style>#avatar:hover{width:70px}\
             #avatar{border: 0.5px solid gray;transition: width 0.3s;}</style>' +
                         f'<img src="/media/{src}" width="40" id="avatar"/>')
