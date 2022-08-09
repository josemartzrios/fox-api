const API = 'https://randomfox.ca/floof/';


// LAZY LOADING
// optimizacion de las imagenes
const isIntersecting = (entry) => {
    return entry.isIntersecting
}

const accion = (entry) => {
    const nodo = entry.target;
    console.log('Holis');

    observer.unobserve(nodo);
}

const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(accion)
});

const registerImage = (imagen) => {
    observer.observe(imagen);
}




async function getNewFox(){
    try{
        const response = await fetch(API);
        const data = await response.json();

        const imgContainer = document.querySelector('#images');
        
        const div = document.createElement('div')
        div.className = 'img-container';

        const img = document.createElement('img');
        img.setAttribute('src', `${data.image}`)


        imgContainer.appendChild(div);
        div.appendChild(img);

        registerImage(img);

    } catch(error){
        console.error(error);
    }
}


const button = document.querySelector('#getFoxButton');
button.addEventListener('click', getNewFox);



