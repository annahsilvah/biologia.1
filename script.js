let prevScrollPos = window.pageYOffset;
const navbar = document.querySelector('.navbar');
const isScrollingDown = () => window.pageYOffset > prevScrollPos;


window.addEventListener('scroll', function() {
  if (isScrollingDown()) {
    // Rolando para baixo
    navbar.style.opacity = 0; // Torna a navbar invisível com opacidade 0
  } else {
    // Rolando para cima
    navbar.style.opacity = 1; // Torna a navbar visível com opacidade 1
  }
  prevScrollPos = window.pageYOffset;
});

let slideIndex = 0;
const slides = document.querySelectorAll(".carousel-slide");

function showSlide(index) {
  const container = document.querySelector(".carousel-container");
  const slideWidth = slides[0].clientWidth;
  container.style.transform = `translateX(-${slideWidth * index}px)`;
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide(slideIndex);
}

showSlide(slideIndex);

// Adiciona a função para trocar automaticamente as imagens a cada 7 segundos
setInterval(function() {
  nextSlide();
}, 7000); // 7000 milissegundos = 7 segundos

// Adiciona o evento de clique nos botões de navegação
const buttons = document.querySelectorAll(".indicator-button");

// Gerencia os botões de navegação, adicionando e removendo a classe ativa
function updateIndicatorButtons() {
  buttons.forEach((button, index) => {
    button.classList.remove("active");
    if (index === slideIndex) {
      button.classList.add("active");
    }
  });
}

function goToSlide(index) {
  slideIndex = index;
  showSlide(slideIndex);
}

// Adiciona um ouvinte de eventos para atualizar os botões quando o carrossel muda de slide
const carouselContainer = document.querySelector(".carousel-container");
carouselContainer.addEventListener("transitionend", updateIndicatorButtons);

// Adiciona um ouvinte de eventos para os botões do indicador
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    goToSlide(index);
  });
});

// Chama a função para atualizar os botões quando a página é carregada
updateIndicatorButtons();