/*efeito escrevendo*/

function escrevendoLetra(){
  function ativaLetra(elemento){
      const arrTexto = elemento.innerHTML.split('');
      elemento.innerHTML  = '';
      arrTexto.forEach((letra, i)=>{
          setTimeout(()=>{
              elemento.innerHTML += letra; 
          }, 75 * i);
      });
  }

  const titulo = document.querySelector('.digitando');
  ativaLetra(titulo);
} 
escrevendoLetra();

function menuMobol() {
  const ativaMenu = document.querySelector(".fa-bars");
  const navMenus = document.querySelector("header .navegacao-primaria");

  ativaMenu.addEventListener("click", () => {
    ativaMenu.classList.toggle("fa-x");
    navMenus.classList.toggle("ativado");
  });
}

function sobreMim() {
  const divExperiencia = document.querySelectorAll(".experience_content div");
  const liExperiencia = document.querySelectorAll(".experience_content ul li");
  const divEducation = document.querySelectorAll(".education_content div");
  const liEducation = document.querySelectorAll(".education_content ul li");

  divExperiencia[0].classList.add('ativo');
  divEducation[0].classList.add('ativo');
  liExperiencia[0].classList.add('ativo');
  liEducation[0].classList.add('ativo');

  function slideShow(index) {
    divExperiencia.forEach((div) => {
      div.classList.remove('ativo');
    });
    liExperiencia.forEach((botao) => {
      botao.classList.remove('ativo');
    });
    divExperiencia[index].classList.add('ativo');
    liExperiencia[index].classList.add('ativo');
  }

  function slideShow2(index) {
    divEducation.forEach((div) => {
      div.classList.remove('ativo');
    });
    liEducation.forEach((botao) => {
      botao.classList.remove('ativo');
    });
    divEducation[index].classList.add('ativo');
    liEducation[index].classList.add('ativo');
  }

  liExperiencia.forEach((event, index)=>{
    event.addEventListener('click', ()=>{
      slideShow(index);
    });
  });

  liEducation.forEach((event, index)=>{
    event.addEventListener('click', ()=>{
      slideShow2(index);
    });
  });
}

sobreMim();


const listaALL = document.querySelectorAll('.projetos_armazenados ul li');
const buttonGeral = document.querySelectorAll('.project_models ul li');
const buttonAll = document.querySelector('.project_models .all');

listaALL.forEach((item)=>{
  item.classList.add('ativo');
})

function removeClick(index){
  buttonGeral.forEach((item)=>{
    item.classList.remove('ativo');
  })
  buttonGeral[index].classList.add('ativo');
}

buttonGeral.forEach((event,index)=>{
  event.addEventListener('click', ()=>{
    removeClick(index)
  })
})


function showLista(lista, buttom = "all") {
  lista.forEach((item)=>{
    item.classList.remove('ativo');
  })

  if(buttom == 'design') {
    lista[0].classList.add('ativo');
    lista[1].classList.add('ativo');
    lista[2].classList.add('ativo');
  }

  if(buttom == 'graphic') {
    
    lista[3].classList.add('ativo');
    lista[4].classList.add('ativo');
    
  }

  if(buttom == 'websites') {
    lista[5].classList.add('ativo');
    lista[6].classList.add('ativo');
    lista[7].classList.add('ativo');
  }

  if(buttom == 'all') {
    lista[0].classList.add('ativo');
    lista[1].classList.add('ativo');
    lista[2].classList.add('ativo');
    lista[3].classList.add('ativo');
    lista[4].classList.add('ativo');
    lista[5].classList.add('ativo');
    lista[6].classList.add('ativo');
    lista[7].classList.add('ativo');
  }

}


buttonGeral.forEach((item)=>{
  item.addEventListener('click', (e)=>{
    let currentButton = e.target;
    if(currentButton.classList.contains('all')){
      showLista(listaALL);
    }
    if(currentButton.classList.contains('design')){
      showLista(listaALL, "design");
    }
    if(currentButton.classList.contains('graphic')){
      showLista(listaALL,"graphic");
    }
    if(currentButton.classList.contains('websites')){
      showLista(listaALL, "websites");
    }
    if(currentButton.classList.contains('all')){
      showLista(listaALL,"all");
    }
  })
})



/*efeito aparecer */
document.addEventListener('DOMContentLoaded', function () {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2 
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aparecer');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const targets = document.querySelectorAll('.sobre img, .sobre_conteudo');
  targets.forEach (target => {
    observer.observe(target);
  });
});
