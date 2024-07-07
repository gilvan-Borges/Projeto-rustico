
var btnMenu = document.querySelector('.btn-menu');// criei uma variavel para receber a classe do menu hamburger .
var menu = document.querySelector('.menu');// criei essa variavel para receber a clase do menu que irá ser manipulada.

function controlMenu(){
    menu.classList.toggle('menu-open');// o js vai criar uma classe no html, para manipular o menu.(abrir ele)
    btnMenu.classList.toggle('x');// o js vai criar uma classe no html, para manipular o menu.(fechar ele)
}

btnMenu.addEventListener('click',controlMenu)
menu.addEventListener('click',controlMenu)