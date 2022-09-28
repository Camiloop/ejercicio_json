// JSON

// JavaScript Object Notation (JSON) es un formato basado en texto estándar para representar datos estructurados en la sintaxis de objetos de JavaScript. Es comúnmente utilizado para transmitir datos en aplicaciones web (por ejemplo: enviar algunos datos desde el servidor al cliente, así estos datos pueden ser mostrados en páginas web, o vice versa).

// Para qué se usa JSON
// JSON es un lenguaje para representar datos, con la sintaxis propia de los literales de objetos Javascript. Sus usos son varios, pero principalmente serían los siguientes:
// - Compartir y transferir información entre distintos sistemas de software -> El hecho de que JSON se representa en archivos de texto plano hace muy fácil su transferencia entre sistemas informáticos, usando protocolos ampliamente extendidos como HTTP.

// Almacenar información en sistemas de persistencia. -> Además de las bases de datos relacionales, que almacenan la información en tablas, existen actualmente otras bases de datos llamadas NoSQL o simplemente no relacionales, que almacenan los datos en formato JSON o alguna variante o extensión de este formato.

// Reglas Básicas de JSON
// - Pares clave / valor.

// Metdos JSON
// - JSON.stringify(obj, props, spaces) -> Este método nos ayuda a convertir un objeto Javascript a JSON también se puede realizar fácilmente haciendo uso del método JSON.stringify().

// - JSON.parse(str) -> Este método es una acción que analiza un string que contiene un JSON válido y devuelve un objeto Javascript con dicha información correctamente estructurada, en pocas palabras nos ayuda a convertir una cadena en formato JSON a objeto Javascript, y a esta acción se le suele denominar parsear.

/* const user = {
  name: "Jhoswe",
  lastname: "Castro",
  edad: null,
  talk() {
    return "hola";
  },
};

console.log(user)

let json = JSON.stringify(user)

console.log(json) */

/* const json = `{
  "name": "Jhoswe",
  "lastname": "Castro",
  "family": [
    { "name": "Juan", "apellido": "Perez" },
    { "name": "Zulma", "apellido": "Perez" },
    { "name": "Julio", "apellido": "Perez" },
    { "name": "Jose", "apellido": "Perez" },
    { "name": "Pablo", "apellido": "Perez" }
  ]
};`

console.log(json);

const user = JSON.parse(json);

console.log(user); */

/* const json = `{
  "name": "Jhoswe",
  "lastname": "Castro",
  "family": [
    { "name": "Juan", "apellido": "Perez" },
    { "name": "Zulma", "apellido": "Perez" },
    { "name": "Julio", "apellido": "Perez" },
    { "name": "Jose", "apellido": "Perez" },
    { "name": "Pablo", "apellido": "Perez" }
  ]
}`;

const user = JSON.parse(json);

c(user);

c(user.family);

let nombres = ""; */

/* user.family.forEach((e) => {
  nombres = nombres + `<li>${e.name} ${e.apellido}</li>`;
}); */

/* for (let i = 0; i < user.family.length; i++) {
  nombres = nombres + `<li>${user.family[i].name} ${user.family[i].apellido}</li>`; 
} */

// for (const miembro of user.family) {
//   nombres += `<li>${miembro.name} ${miembro.apellido}</li>`;
// }

// c(nombres);

// let lista = document.getElementById('lista')
// lista.innerHTML = nombres
// document.getElementById("lista").innerHTML = nombres;


// Ajax
// AJAX significa JavaScript asíncrono y XML (Asynchronous JavaScript and XML). Es un conjunto de técnicas de desarrollo web que permiten que las aplicaciones web funcionen de forma asíncrona, procesando cualquier solicitud al servidor en segundo plano, En palabras, Ajax permite acceder a datos existentes en el servidor sin necesidad de recargar la página completamente, estas consultas contra el servidor se realizan por medio de Javascript y los datos se procesan mediante éste mismo lenguaje, permitiendo actualizar el contenido de la página justamente donde sea preciso.

/* XML -> XML es un lenguaje de marcado similar a HTML. Significa Extensible Markup Language (Lenguaje de Marcado Extensible) y es una especificación de W3C como lenguaje de marcado de propósito general. Esto significa que, a diferencia de otros lenguajes de marcado, XML no está predefinido, por lo que debes definir tus propias etiquetas. El propósito principal del lenguaje es compartir datos a través de diferentes sistemas, como Internet.

<message>
<warning>
Hola, mundo
</warning>
</message> */

/* ¿Cómo funciona AJAX?
Ten en cuenta que AJAX no es una sola tecnología, ni es un lenguaje de programación. Como se dijo antes, AJAX es un conjunto de técnicas de desarrollo web. El sistema generalmente comprende.

- HTML/XHTML para el lenguaje principal y CSS para la presentación.
- El Modelo de objetos del documento (DOM) para datos de visualización dinámicos y su interacción.
- XML para el intercambio de datos y XSLT para su manipulación. Muchos desarrolladores han comenzado a reemplazarlo por JSON porque es más similar a JavaScript en su forma.
- El objeto XMLHttpRequest para la comunicación asíncrona.
- Finalmente, el lenguaje de programación JavaScript para unir todas estas tecnologías. */

/* Http
El https (del inglés HyperText Transfer Protocol o Protocolo de Transferencia de Hiper Textos) es el protocolo de transmisión de información de la World Wide Web, es decir, el código que se establece para que el computador solicitante y el que contiene la información solicitada puedan “hablar” un mismo idioma a la hora de transmitir información por la red. */



/* let c = console.log;


const div = document.getElementById("content"),
loading = document.getElementById("loading");

loading.style.display = "none";

function cargarAjax() {
  const xhr = new XMLHttpRequest();

  // c(xhr)

  xhr.open("GET", "./data.html", true);

  xhr.send();

  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState !== 4) return;
    console.log(xhr);
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log("se ejecuto correctamente");
      xhr.addEventListener("load", (e) => {
        setTimeout(() => {
          div.innerHTML = e.target.responseText;
          loading.style.display = "none";
        }, 5000);
      });
    } else {
      console.log("Hubo un error");
    }
  });


}

document.getElementById("btn2").addEventListener("click", () => {
  loading.style.display = "block";
  cargarAjax();
});

// Proceso de Ejecuacion

1. Para realizar una petición HTTP usando JavaScript, es necesario crear una instancia de una clase que provea esta funcionalidad, en este caso el llamado XMLHttpRequest.

// Creamos la instancia del objeto XHR

const xhr = new XMLHttpRequest()

2. El segundo paso es asignar el o los eventos que vayamos a estar manipulando de la petición, en donde la lógica de la programación ira dentro de la callback:

client = document.addEventListener('readystatechange', (e) => {}

** Mediante la instancia que acabamos de crear, podremos definir el tipo de petición utilizando el método open(method, url), indicando el método HTTP y la URL a la que queremos hacer la petición.

3. El tercer paso es el envio, donde abriremos la petición, estableciendo con que método de petición http, seguido por la URL del servidor(endpoint)


xhr.open('GET','https://jsonplaceholder.typicode.com/users')

y por último, el cuatro paso es el envío de la petición:


xhr.send() */

