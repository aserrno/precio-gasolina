<h1 id="title" align="center">Precio gasolina</h1>

<p align="center"><img src="https://socialify.git.ci/soker90/precio-gasolina/image?description=1&amp;descriptionEditable=Notifica%20cambios%20de%20precios%20de%20una%20gasolinera&amp;font=KoHo&amp;language=1&amp;owner=1&amp;pattern=Brick%20Wall&amp;theme=Light" alt="project-image"></p>

<p id="description">Este bot notifica a través de telegram cuando varía el precio de la gasolina 95 y del gasóleo A de una gasolinera en concreto.</p>

<p align="center"><img src="https://img.shields.io/github/license/soker90/precio-gasolina" alt="shields"><img src="https://img.shields.io/github/last-commit/soker90/precio-gasolina?label=%C3%9Altima%20actualizaci%C3%B3n" alt="shields"></p>

<h2>Project Screenshots:</h2>

<img src="https://raw.githubusercontent.com/soker90/precio-gasolina/master/screenshot.png" alt="project-screenshot" width="400" height="400/">

<h2>🛠️ Installation Steps:</h2>

<p>1. Crea un fork de este repositorio.</p>

<p>2. Ve a https://geoportalgasolineras.es y localiza tu gasolinera.</p>

<p>3. Inspecciona la web y busca en las peticiones una con el formato:</p>

```
https://geoportalgasolineras.es/rest/FUEL_STATION_ID/busquedaEstacionPrecio
```

<p>4. Sustituye la variable FUEL_STATION_ID en .github/workflows/download-today.yml por el que aparece en la petición del paso anterior.</p>

<p>5. Crea un bot de telegram hablando con @BotFather y guarda el token que te da.</p>

<p>6. Crear un secret de github llamado TOKEN_TELEGRAM y guarda ahí el token</p>

<p>7. Haz uno o dos canales de telegram (gasolina y gasoil) y consigue sus CHAT ID</p>

```
Puedes conseguirlo reenviando un mensaje escrito en ese canal al bot @getidsbot. También puedes abrir un chat con el bot creado en pasos anteriores si no quieres crear un canal.
```

<p>8. Crea los secrets GASOLINA_CHAT_ID y DIESEL_CHAT_ID con los CHATS IDs del paso anterior</p>

  
  
<h2>💻 Built with</h2>

Technologies used in the project:

*   node >= 16
*   github-actions

<h2>🛡️ License:</h2>

This project is licensed under the GPLv3 or later




----------------------------------------------------------------
Nueva Fuente: https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/help
