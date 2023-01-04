const btnfinalizar = document.querySelector('#btn-finalizar');
const btnsiguiente = document.querySelector('#btn-siguiente');
const btnanterior = document.querySelector('#btn-anterior');
const imagenes = document.querySelectorAll('#Galeria img');
const lightbox = document.querySelector('#Cont-principal')
const Imagenactiva = document.querySelector('#Img-activa');
let indiceImagen=0;



const abreLightbox =(event)=>{
    Imagenactiva.src = event.target.src;
    lightbox.style.display ='flex';
    indiceImagen=Array.from(imagenes).indexOf(event.target)
};

imagenes.forEach((Imagen)=>{
    Imagen.addEventListener('click',abreLightbox)
});


btnfinalizar.addEventListener('click',()=>{
    lightbox.style.display ='none';
});


const siguienteImagen = () =>{
    if(indiceImagen=== imagenes.length -1){
        indiceImagen = -1;
    }
    Imagenactiva.src = imagenes[indiceImagen + 1].src;
    indiceImagen++;
};

btnsiguiente.addEventListener('click', siguienteImagen);



const Imagenanterior =()=>{
    if(indiceImagen ===0){
        indiceImagen = imagenes.length;
    }
    Imagenactiva.src = imagenes[indiceImagen -1].src;
    indiceImagen--;
};

btnanterior.addEventListener('click', Imagenanterior);