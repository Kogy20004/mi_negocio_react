from rest_framework import viewsets
from .serializaer import ProductoSerializer
from .models import Producto

# Create your views here.
class ProductoView(viewsets.ModelViewSet):
    serializer_class = ProductoSerializer
    queryset = Producto.objects.all()
