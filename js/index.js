// FUNCIÓN CALLAPI
// la consulta de la promesa, esperando su respuesta asíncrona
function callApi() {
    fetch('https://randomuser.me/api/')
        .then(response => {
            return response.json()
        })
        .then(data => {
            //manipulamos la respuesta
            console.log(data)
            renderizarDatosUsuario(data.results) // Renderiza el usuario cuando se ejecute esta función
        });
}

// CREO LA TARJETA Y SUS COMPONENTES
// Los creo afuera porque siempre tienen que estar listos para ser llenados con el renderizarDatosUsuario()
const tarjeta = document.querySelector(".tarjeta") // Agarro el div con clase tarjeta
let nombre = document.createElement("p") // Creo mi p donde voy a traerme el nombre
let mail = document.createElement("p")
let foto = document.createElement("img")

tarjeta.appendChild(foto) // Todos hijos de tarjeta. Se pone en el orden que quiero que aparezca en el HTML
tarjeta.appendChild(nombre)
tarjeta.appendChild(mail)
callApi() // Ejecuto callApi para que cuando se cargue por primera vez la página, ya aparezca un usuario random cargado. Si no, debería esperar hasta que alguien toque el botón.


// FUNCIÓN RENDERIZAR DATOS
// Llena la imagen, el email y el nombre con los datos que me traigo desde mi Api. Esto lo puedo ver haciendo un console.table de mi api para ver que atributos tiene. Los tengo que traer con el mismo nomnbre que aparecen.
function renderizarDatosUsuario(datos) {
    /* -------------------------------- CONSIGNA 1 -------------------------------- */
    // datos[0] (Es la posición de lo que me devuelve mi Api. Solo un elemento
    foto.setAttribute("src", datos[0].picture.thumbnail) // Lleno el atributo src con la imagen que está en mi api (.picture.thumbnail)
    mail.innerText = datos[0].email // Lleno el mail con innerText
    nombre.innerText = datos[0].name.first + " " + datos[0].name.last // Concateno nombre y apellido. 
}

/* --------------------------- CONSIGNA 2 (extra) --------------------------- */
// Aqui pueden ir por el punto extra de utilizar el boton que se encuentra comentado en el HTML
// Pueden descomentar el código del index.html y usar ese boton para ejecutar un nuevo pedido a la API, sin necesidad de recargar la página.
// Es criterio del equipo QUÉ bloque del código debe contenerse dentro de una función para poder ser ejecutada cada vez que se escuche un click.
const botonApi = document.querySelector("#random").addEventListener("click", function(e) {
    callApi() // Call api trae los datos, renderiza (los llena) y me los publica cuando hacen click en el botón 
})