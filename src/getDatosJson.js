// Obtenemos todos los elementos con clase "contenedor"
const contenedores = document.querySelectorAll('.contenedor');

// Creamos un array vacío para almacenar los objetos del JSON
const objetosJSON = [];

// Inicializamos el índice en cero
let indice = 0;


// Iteramos sobre cada elemento "contenedor"
contenedores.forEach((contenedor) => {
    // Obtenemos los elementos que necesitamos dentro de este "contenedor"
    const imagen = contenedor.querySelector('img').getAttribute('src');
    const nombre = contenedor.querySelector('.info p:first-child').textContent;
    const autor = contenedor.querySelector('.info strong').textContent;
    const enlace = contenedor.querySelector('a').getAttribute('href');

    // Creamos el objeto JSON para este elemento "contenedor"
    const objetoJSON = {
        index: indice,
        src: imagen,
        nombre: nombre,
        autor: autor,
        href: enlace
    };

    // Añadimos el objeto JSON al array de objetosJSON
    objetosJSON.push(objetoJSON);

    // Incrementamos el índice
    indice++;
});

// Convertimos el array de objetos JSON a una cadena JSON
const json = JSON.stringify(objetosJSON);
console.log(json);