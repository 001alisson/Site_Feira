var video = document.getElementById('videoaula');
var material = document.getElementById('material');

function Pausar(){
    video.pause();
}

function Aula1Olimp1(){
    video.src = "VID-20230504-WA0033.mp4";
    document.getElementById('titleAula').innerHTML = "Aula 1 - Conteúdo tal 1";
    document.getElementById('descript').innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore iste accusantium, maiores vero aliquam veniam hic, iure illo suscipit eveniet inventore fugit porro doloribus fugiat ex rerum molestias voluptatibus necessitatibus.";
    document.getElementById('autoria').innerHTML = "Professor fulano - Intituição Tal1";
    material.href = "https://site-feira-taupe.vercel.app/MODELOS DCUMENTOS OMIF 2024.pdf";
    material.download = "MODELOS DCUMENTOS OMIF 2024.pdf";
    
}
function Aula2Olimp1(){
    video.src = "20240407_073514.mp4";
    document.getElementById('titleAula').innerHTML = "Aula 2 - Conteúdo tal 2";
    document.getElementById('descript').innerHTML = "lorem ipsum dolor, lorem, lorem, lorem... Sit amet consectetur, labore iste, maiores vero aliquam veniam hic.";
    document.getElementById('autoria').innerHTML = "Professor Beltrano - Intituição Tal2";
    material.href = "https://site-feira-taupe.vercel.app/Fungos - ap.pdf";
    material.download = "Fungos - ap.pdf";
}

var Telas = document.querySelectorAll(".Tela");
var Botoes = document.querySelectorAll(".menu button");

function IntoHome(){
    Pausar();
    Telas.forEach((item) => {
        item.classList.add("sumir");
    });
    Botoes.forEach((element) => {
        element.classList.remove("btclick");
    });
    

    Telas[0].classList.remove("sumir");
    Botoes[0].classList.add("btclick");
}

function IntoOlimpiadas(){
    Pausar();
    Telas.forEach((item) => {
        item.classList.add("sumir");
    });
    Botoes.forEach((element) => {
        element.classList.remove("btclick");
    });

    Telas[1].classList.remove("sumir");
    Botoes[1].classList.add("btclick");
    
}

function IntoQuizzes(){
    Pausar();
    Telas.forEach((item) => {
        item.classList.add("sumir");
    });
    
    Botoes.forEach((element) => {
        element.classList.remove("btclick");
    });
    
    Telas[2].classList.remove("sumir");
    Botoes[2].classList.add("btclick");
}

function IntoChat(){
    Pausar();
    Telas.forEach((item) => {
        item.classList.add("sumir");
    });
    Botoes.forEach((element) => {
        element.classList.remove("btclick");
    });
    
    Telas[3].classList.remove("sumir");
    Botoes[3].classList.add("btclick");
     
}

function IntoExposicao(){
    Pausar();
    Telas.forEach((item) => {
        item.classList.add("sumir");
    });
    Botoes.forEach((element) => {
        element.classList.remove("btclick");
    });

    Telas[4].classList.remove("sumir");
    Botoes[4].classList.add("btclick");
}

function IntoOlimp1(){
    Pausar();
    Telas.forEach((item) => {
        item.classList.add("sumir");
    });
    
    Telas[5].classList.remove("sumir");
}

IntoHome();

