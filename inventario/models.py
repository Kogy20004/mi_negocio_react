from django.db import models


# Create your models here.
class Producto(models.Model):
    nombre = models.CharField(max_length=50)
    costo_compra = models.FloatField()
    precio_venta = models.FloatField()
    barra = models.FloatField(null=True, blank=True)
    cantidad_inicial = models.FloatField(null=True, blank=True)
    cantidad_min = models.FloatField(null=True, blank=True)
    descripcion = models.TextField(null=True, blank=True)
    caducidad = models.DateField(null=True, blank=True)

    def __str__(self):
        return f'{self.nombre}'
