let boton_seleccionado1 = '', boton_seleccionado2 = '';
let nombre, texto;

async function ConseguirDatos(id_grupo, id){

    if(id_grupo == 1){
        nombre = document.getElementById("nombre");
        texto = document.getElementById("texto");
    }
    else if(id_grupo == 2){
        nombre = document.getElementById("nombre2");
        texto = document.getElementById("texto2");
    }
    
    const leer_datos = await fetch('./javascript_json/informacion.json');
    const json_datos = await leer_datos.json();

    nombre.innerHTML = json_datos[id]['nombre'];
    texto.innerHTML = json_datos[id]['texto'];
}

function abrirPergamino(id_pergamino){
    let pergamino = document.getElementById(id_pergamino);
    pergamino.classList.add("abrir_pergamino");
}
function cerrarPergamino(id_pergamino){
    let pergamino = document.getElementById(id_pergamino);
    pergamino.classList.add("cerrar_pergamino");
}

async function mover_izquierda(id_grupo, id_izquierda, id_centro, id_derecha, id_pergamino, nombre_tecnologia) {

    let izquierda = document.getElementById(id_izquierda);
    let centro = document.getElementById(id_centro);
    let derecha = document.getElementById(id_derecha);

    centro.disabled = true;
    derecha.disabled = true;

    centro.classList.add("desaparecer");
    await new Promise(r => setTimeout(r, 100));
    derecha.classList.add("desaparecer");

    ConseguirDatos(id_grupo, nombre_tecnologia);
    izquierda.classList.add("mover_izquierda");
    abrirPergamino(id_pergamino);

    if(id_grupo == 1){
        boton_seleccionado1 = id_izquierda;
    }
    else if(id_grupo == 2){
        boton_seleccionado2 = id_izquierda;
    }
}

async function mover_centro(id_grupo, id_izquierda, id_centro, id_derecha, id_pergamino, nombre_tecnologia) {
    
    let izquierda = document.getElementById(id_izquierda);
    let derecha = document.getElementById(id_derecha);

    izquierda.disabled = true;
    derecha.disabled = true;

    izquierda.classList.add("desaparecer");
    derecha.classList.add("desaparecer");

    ConseguirDatos(id_grupo, nombre_tecnologia);
    abrirPergamino(id_pergamino);

    if(id_grupo == 1){
        boton_seleccionado1 = id_centro;
    }
    else if(id_grupo == 2){
        boton_seleccionado2 = id_centro;
    }

}

async function mover_derecha(id_grupo, id_izquierda, id_centro, id_derecha, id_pergamino, nombre_tecnologia) {

    let izquierda = document.getElementById(id_izquierda);
    let centro = document.getElementById(id_centro);
    let derecha = document.getElementById(id_derecha);

    centro.disabled = true;
    izquierda.disabled = true;

    centro.classList.add("desaparecer");
    await new Promise(r => setTimeout(r, 100));
    izquierda.classList.add("desaparecer");

    ConseguirDatos(id_grupo, nombre_tecnologia);
    derecha.classList.add("mover_derecha");
    abrirPergamino(id_pergamino);

    if(id_grupo == 1){
        boton_seleccionado1 = id_derecha;
    }
    else if(id_grupo == 2){
        boton_seleccionado2 = id_derecha;
    }

}

async function volver(id_izquierda, id_centro, id_derecha, id_pergamino){

    let izquierda = document.getElementById(id_izquierda);
    let centro = document.getElementById(id_centro);
    let derecha = document.getElementById(id_derecha);
    let pergamino = document.getElementById(id_pergamino);

    if(boton_seleccionado1 == id_izquierda || boton_seleccionado2 == id_izquierda){

        izquierda.disabled = true;

        izquierda.classList.add("volver_izquierda");
        centro.classList.add("reaparecer");
        derecha.classList.add("reaparecer");
        cerrarPergamino(id_pergamino);

        await new Promise(r => setTimeout(r, 2000));

        izquierda.classList.remove("mover_izquierda", "volver_izquierda", "desaparecer");
        centro.classList.remove("desaparecer", "reaparecer");
        derecha.classList.remove("desaparecer", "reaparecer");
        pergamino.classList.remove("abrir_pergamino", "cerrar_pergamino");

        izquierda.disabled = false;
        centro.disabled = false;
        derecha.disabled = false;

        boton_seleccionado = '';

    } else if (boton_seleccionado1 == id_centro || boton_seleccionado2 == id_centro){

        centro.disabled = true;

        izquierda.classList.add("reaparecer");
        derecha.classList.add("reaparecer");
        cerrarPergamino(id_pergamino);

        await new Promise(r => setTimeout(r, 2000));

        izquierda.classList.remove("desaparecer", "reaparecer");
        derecha.classList.remove("desaparecer", "reaparecer");
        pergamino.classList.remove("abrir_pergamino", "cerrar_pergamino");

        izquierda.disabled = false;
        centro.disabled = false;
        derecha.disabled = false;

        boton_seleccionado = '';

    } else if (boton_seleccionado1 == id_derecha || boton_seleccionado2 == id_derecha){

        derecha.disabled = true;

        derecha.classList.add("volver_derecha");
        centro.classList.add("reaparecer");
        izquierda.classList.add("reaparecer");
        cerrarPergamino(id_pergamino);

        await new Promise(r => setTimeout(r, 2000));

        derecha.classList.remove("mover_derecha", "volver_derecha", "desaparecer");
        centro.classList.remove("desaparecer", "reaparecer");
        izquierda.classList.remove("desaparecer", "reaparecer");
        pergamino.classList.remove("abrir_pergamino", "cerrar_pergamino");

        izquierda.disabled = false;
        centro.disabled = false;
        derecha.disabled = false;

        boton_seleccionado = '';

    }
}