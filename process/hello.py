import sys
import datetime 

from config import SIM_NUMBERS, SMS_SERVICES_IP, SMS_SERVICES_PORT
from config import USR, PWD

def get_sim_numbers():
	if len(SIM_NUMBERS) >= 8:
		return SIM_NUMBERS.replace(" ","").split(",")
print(get_sim_numbers())
msg = "Hello World M".capitalize()

print(msg)
print(datetime.datetime.now()) 
print("First name: " + sys.argv[1]) 

with open('archivo.txt', 'r') as f:
  # Leemos todo el contenido del archivo y lo guardamos en una variable
  for linea in f:
    print(linea)
  #contenido = f.read()

# Mostramos el contenido del archivo por pantalla
#print(contenido)


