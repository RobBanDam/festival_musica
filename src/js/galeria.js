document.addEventListener('DOMContentLoaded', function(){
    inciarApp();
})

function inciarApp(){
    crearGaleria();
}

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i=1; i<=12; i++ ){
        const imagen = document.createElement('picture');
        imagen.innerHTML=`
            <source srcset="build/img/thumb/${i}.avif" type="image/avif">
            <source srcset="build/img/thumb/${i}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" alt="imagen galeria">
        `;

        imagen.onclick = function(){
            mostrarImagen(i);
        }

        galeria.appendChild(imagen);
    }
}

function mostrarImagen(id){
    const imagen = document.createElement('picture');
        imagen.innerHTML=`
            <source srcset="build/img/grande/${id}.avif" type="image/avif">
            <source srcset="build/img/grande/${id}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="build/img/grande/${id}.jpg" alt="imagen galeria">
        `;

    //crea el overlay con la imagen
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    overlay.onclick = function(){
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
        overlay.remove();
    }

    //añade overlay al HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');

    //btn para cerrar modal
    const cerrarFoto = document.createElement('P');
    cerrarFoto.textContent = 'X';
    cerrarFoto.classList.add('btncerrar');
    cerrarFoto.onclick = function(){
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
        overlay.remove();
    }

    overlay.appendChild(cerrarFoto);
}