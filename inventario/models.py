from django.db import models
from django.utils.timezone import now


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


class Venta(models.Model):
  fecha = models.DateField(default=now)
  producto_1 = models.CharField(max_length=255,default="0") 
  cantidad_1 = models.CharField(max_length=255,default="0")
  producto_2  = models.CharField(max_length=255,default="0")  
  cantidad_2  = models.CharField(max_length=255,default="0")
  producto_3  = models.CharField(max_length=255,default="0")  
  cantidad_3  = models.CharField(max_length=255,default="0")
  producto_4  = models.CharField(max_length=255,default="0")  
  cantidad_4  = models.CharField(max_length=255,default="0")
  producto_5  = models.CharField(max_length=255,default="0")  
  cantidad_5  = models.CharField(max_length=255,default="0")
  precio = models.DecimalField(max_digits=15, decimal_places=2,default="0") # type: ignore
#   id_usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)

  def __str__(self):
    return f"{self.fecha}"

