# Tzar: Everything

Un pequeño cuaderno público para guardar inspiración: textos, imágenes, enlaces y archivos. Está hecho para que puedas cambiar el diseño a tu gusto y publicar escribiendo Markdown. No necesita dominio ni servidor de pago.

## Escribir y añadir cosas

1. Copia una entrada de posts/una-pequena-coleccion.md.
2. Ponle un nombre sencillo, por ejemplo posts/cuaderno-de-viaje.md.
3. Cambia el título, la fecha, el idioma, la categoría y el resumen de la cabecera.
4. Escribe debajo en Markdown. Usa **negrita**, [un enlace](https://ejemplo.com) o una lista con guiones.
5. Guarda tus imágenes en assets/images/ y añádelas así:

   ![Descripción de la imagen]({{ '/assets/images/mi-foto.jpg' | url }})

6. Para ofrecer un archivo descargable, guárdalo en files/ y añade en la cabecera de la entrada:

   ~~~yaml
   attachments:
     - title: Descargar el cuaderno
       url: /files/cuaderno.pdf
       note: PDF · 2 MB
   ~~~

7. Guarda los cambios. La página principal muestra las entradas más recientes automáticamente.

### Cabecera de una entrada

~~~yaml
---
title: Un título breve
date: 2026-10-18
language: ES
category: Notas
summary: Una frase para presentar la entrada.
layout: layouts/post.njk
tags:
  - posts
---
~~~

Duplica esta cabecera y cambia la fecha al día en que escribas. language puede ser ES o EN. Puedes usar texto, imágenes, enlaces y listas dentro de la entrada.

## Ver el blog en tu ordenador

Instala Node.js (versión 20 o superior) desde [nodejs.org](https://nodejs.org/). Después, abre una terminal dentro de esta carpeta y ejecuta:

~~~text
npm install
npm start
~~~

Abre la dirección local que indique la terminal, normalmente http://localhost:8080. Para detener la vista previa, vuelve a la terminal y pulsa Ctrl+C.

## Publicarlo gratis en GitHub Pages

El sitio público puede ser consultado por cualquiera que tenga el enlace. En GitHub Free, el repositorio debe ser público para publicar con GitHub Pages. “Poco visible” significa que no compartes el enlace ni lo promocionas; no equivale a privado. No subas datos personales, documentos privados ni materiales que no tengas derecho a publicar.

1. Crea una cuenta gratuita en [GitHub](https://github.com/), si aún no tienes una.
2. Crea un repositorio **público** llamado, por ejemplo, tzar-everything.
3. Sube el contenido de esta carpeta al repositorio, incluida la carpeta oculta .github. Puedes hacerlo desde la web de GitHub con **Add file → Upload files**, o desde GitHub Desktop.
4. En el repositorio, abre **Settings → Pages** y selecciona **GitHub Actions** como fuente de publicación.
5. Abre la pestaña **Actions**. El flujo “Publish Tzar Everything” construirá y publicará el sitio. La dirección aparecerá en **Settings → Pages** y tendrá una forma parecida a https://tu-usuario.github.io/tzar-everything/.
6. Para publicar una entrada nueva, añade un archivo .md en posts/ y confirma los cambios. Para una imagen o descarga, súbela a assets/images/ o files/ y enlázala desde la entrada.

La publicación se ejecuta automáticamente cada vez que guardas cambios en la rama main. Puede tardar un poco en aparecer la primera vez.

## Cambiar el aspecto o el título

- Colores, tipografías y tamaños: assets/css/site.css.
- Título, navegación y pie de página: _includes/layouts/base.njk.
- Texto de la portada: index.njk.
- Presentación personal: about.njk.
- Nombre visible: busca “Tzar: Everything” en los archivos y sustitúyelo.

## Límites prácticos

GitHub Pages sirve archivos estáticos y ofrece una dirección gratuita bajo github.io. No incluye un editor visual de entradas ni un área privada para lectores: se escribe en Markdown y las modificaciones del repositorio público son visibles. Mantén las imágenes optimizadas y evita subir archivos muy pesados.
