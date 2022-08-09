const API = 'https://randomfox.ca/floof/';

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

    } catch(error){
        console.error(error);
    }
}


const button = document.querySelector('#getFoxButton');
button.addEventListener('click', getNewFox);