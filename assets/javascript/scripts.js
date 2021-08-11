const mensajitos = document.querySelector('#mensajito'),
    tocar = document.querySelector('.tocar'),
    imagencita = document.querySelector('#imagencita'),
    pikachu1 = document.querySelector('.pikachu1'),
    pikachu2 = document.querySelector('.pikachu2'),
    pikachu3 = document.querySelector('.pikachu3'),
    pikachu4 = document.querySelector('.pikachu4');

let mensaje = 1;

const texto1={
    escrito: 'Feliz feliz re contra hiper feliz cumpleaños amorcito de mi corazon c:'
};

const texto2={
    escrito: 'Espero que te guste este regalito, <br/> no es mucho wow fua! pero es la combinacion de las dos cosas que me gustan, amarte y hacer cosas con la compu'
};

const texto3={
    escrito: 'Aunque no te guste y te pongas mal para tu cumple porque no te gusta crecer....'
};

const texto4={
    escrito: 'Ojala la pases muy hermoso, crezcamos juntos, festejemos que cumplis 20 y que das una vueltita para convertirte en chica grande. Te ama: Lucas c:'
};

function printTexto(texto){
    mensajitos.innerHTML = texto.escrito;
};

if(mensaje===1){
    printTexto(texto1);
    pikachu1.style.display = "bloc"
    pikachu2.style.display = "none"
    pikachu3.style.display = "none"
    pikachu4.style.display = "none"
};

tocar.addEventListener('click', () => {
    mensaje++;
    if(mensaje ===2){
        printTexto(texto2);
        pikachu1.style.display = "none"
        pikachu2.style.display = "block"
        pikachu3.style.display = "none"
        pikachu4.style.display = "none"
    }else if(mensaje ===3){
        printTexto(texto3);
        pikachu1.style.display = "none"
        pikachu2.style.display = "none"
        pikachu3.style.display = "block"
        pikachu4.style.display = "none"
    }else{
        printTexto(texto4);
        pikachu1.style.display = "none"
        pikachu2.style.display = "none"
        pikachu3.style.display = "none"
        pikachu4.style.display = "block"
    }
    
});