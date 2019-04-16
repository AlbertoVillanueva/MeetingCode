# ProyectoDSI

COMANDOS PARA LA INSTALACIÓN DE PAQUETES

En algunos casos, la ejecución del prototipo puede dar error por necesidad de instalación de algún paquete. Por ello, recomendamos realizar la instalación en los siguientes pasos:

1. Git clone del repositorio (sin node_modules) y cd MeetingCode para acceder a la carpeta del código.

2. Instalación de una version compatible de rxjs:

sudo npm install rxjs@6.0.0 -save
sudo npm install -s rxjs-compat

3. Instalación del paquete de errores de formularios:

sudo npm i @ultimate/ngxerrors

4. Instalación de la cámara:

sudo npm install @ionic-native/camera@4

5. Instalación del reto de paquetes:

sudo npm install


-------------------------------------OPCIONAL---------------------------

En algunos casos, puede ser necesaria la ejecucion de los siguientes comandos para eliminar archivos anteriores e instalar una versión compatible de sass.

sudo rm -rf package-lock.json node_modules
sudo npm cache clean -force
sudo npm i --unsafe-perm node-sass


Después de ejecutar estos pasos, seria necesario volver al paso 2.
