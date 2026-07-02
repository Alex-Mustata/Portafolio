let proyecto_seleccionado1='', proyecto_seleccionado2='';
let contenedor_proyecto_seleccionado1 = '';
let btn_seleccionado1 = '';

function desactivarBtn(btn){
    if(btn == 'btn_proyecto1'){
        document.getElementById('btn_proyecto2').disabled = true;
        document.getElementById('btn_proyecto3').disabled = true;
    }else if(btn == 'btn_proyecto2'){
        document.getElementById('btn_proyecto1').disabled = true;
        document.getElementById('btn_proyecto3').disabled = true;
    }else if(btn = 'btn_proyecto3'){
        document.getElementById('btn_proyecto1').disabled = true;
        document.getElementById('btn_proyecto2').disabled = true;
    }

}
function activarBtn(){
        document.getElementById('btn_proyecto1').disabled = false;
        document.getElementById('btn_proyecto2').disabled = false;
        document.getElementById('btn_proyecto3').disabled = false;
}


async function alargarProyecto(id_proyecto, id_contenedor, btn) {

    /*Permitir que solo un proyecto este abierto a la vez*/
    desactivarBtn(btn);

    if(proyecto_seleccionado1 != ''){
        proyecto_seleccionado2 = id_proyecto;
    }
    if(proyecto_seleccionado1 != proyecto_seleccionado2 && proyecto_seleccionado1 != ''){
        volverProyecto(proyecto_seleccionado1, contenedor_proyecto_seleccionado1);
        proyecto_seleccionado1 = '';
        contenedor_proyecto_seleccionado1 = '';
        proyecto_seleccionado2 = '';
    }
    proyecto_seleccionado1 = id_proyecto;
    contenedor_proyecto_seleccionado1 = id_contenedor;

    const proyecto = document.getElementById(id_proyecto);
    const contenedor_proyecto = document.getElementById(id_contenedor);

    contenedor_proyecto.classList.add("aumentar_altura");
    proyecto.classList.add("aumentar");
    proyecto.style.display = 'flex';
    await new Promise(r => setTimeout(r, 3000));
    activarBtn();
    
}

async function volverProyecto(id_proyecto, id_contenedor) {
    const proyecto = document.getElementById(id_proyecto);
    const contenedor_proyecto = document.getElementById(id_contenedor);

    contenedor_proyecto.classList.add("volver_aumentar_altura");
    proyecto.classList.add("volver_aumentar");

    await new Promise(r => setTimeout(r, 3000));
    proyecto.style.display = "none";
    proyecto.classList.remove("aumentar", "volver_aumentar");
    contenedor_proyecto.classList.remove("aumentar_altura", "volver_aumentar_altura");
}