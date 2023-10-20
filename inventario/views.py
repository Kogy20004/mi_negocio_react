from rest_framework import viewsets
from .serializaer import ProductoSerializer , VentaSerializer
from .models import Producto, Venta

# Create your views here.
class ProductoView(viewsets.ModelViewSet):
    serializer_class = ProductoSerializer
    queryset = Producto.objects.all()

class VentaView(viewsets.ModelViewSet):
    serializer_class = VentaSerializer
    queryset = Venta.objects.all()
