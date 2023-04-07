

/*efeito escrevendo*/

var typed = new Typed (".digitando", {
    strings:[",", "Web Designer...", "web Developer...", "Mobile Developer"],
    typeSpeed:75,
    BackSpeed:60,
    loop:true
})


const ativaMenu = document.querySelector('.fa-bars');
const navMenus = document.querySelector('header .navegacao-primaria');

ativaMenu.addEventListener('click', () => {
    ativaMenu.classList.toggle('fa-x')
    navMenus.classList.toggle('ativado')
})