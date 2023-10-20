from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from inventario import views

router = routers.DefaultRouter()
router.register(r'productos', views.ProductoView, 'productos')
router.register(r'ventas', views.VentaView, 'ventas')

urlpatterns=[
    path('api/v1/', include(router.urls)),
    path('docs/', include_docs_urls(title='Inventario Api'))
    
]