document.addEventListener('DOMContentLoaded', () => {
    // Menu Mobile Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const navLinks = document.querySelectorAll('.nav-link');

    // Só inicializa menu se os elementos existem
    if (menuToggle && navMenu && menuOverlay) {
        function toggleMenu() {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            menuOverlay.classList.toggle('active');

            // Previne scroll quando menu está aberto
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }

        function closeMenu() {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }

        menuToggle.addEventListener('click', toggleMenu);

        // Fecha o menu ao clicar em um link
        navLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Fecha o menu ao clicar no overlay
        menuOverlay.addEventListener('click', closeMenu);
    }

    // Carrossel de Destaques do Menu
    const carousel = document.getElementById('menuCarousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('carouselDots');

    // Só continua com carrossel se os elementos existem
    if (carousel && prevBtn && nextBtn && dotsContainer) {
        const cards = carousel.querySelectorAll('.card_highlights');

        let currentIndex = 0;
        let cardsPerView = getCardsPerView();
        const totalCards = cards.length;
        let maxIndex = Math.max(0, totalCards - cardsPerView);

        // Calcula quantos cards mostrar por vez baseado no tamanho da tela
        function getCardsPerView() {
            if (window.innerWidth <= 480) return 1;
            if (window.innerWidth <= 768) return 2;
            if (window.innerWidth <= 992) return 3;
            return 4;
        }

        // Cria os dots de navegação
        function createDots() {
            dotsContainer.innerHTML = '';
            const numDots = maxIndex + 1;
            for (let i = 0; i < numDots; i++) {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                if (i === 0) dot.classList.add('active');
                dot.addEventListener('click', () => goToSlide(i));
                dotsContainer.appendChild(dot);
            }
        }

        // Atualiza posição do carrossel
        function updateCarousel() {
            const cardWidth = cards[0].offsetWidth;
            const gap = 24; // 1.5rem em pixels
            const offset = currentIndex * (cardWidth + gap);
            carousel.style.transform = `translateX(-${offset}px)`;

            // Atualiza dots
            const dots = dotsContainer.querySelectorAll('.dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });

            // Atualiza estado dos botões
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex >= maxIndex;
        }

        function goToSlide(index) {
            currentIndex = Math.max(0, Math.min(index, maxIndex));
            updateCarousel();
        }

        function nextSlide() {
            if (currentIndex < maxIndex) {
                currentIndex++;
                updateCarousel();
            }
        }

        function prevSlide() {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        }

        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);

        // Suporte para touch/swipe em mobile
        let touchStartX = 0;
        let touchEndX = 0;

        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        carousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });

        function handleSwipe() {
            if (touchEndX < touchStartX - 50) nextSlide();
            if (touchEndX > touchStartX + 50) prevSlide();
        }

        // Recalcula ao redimensionar a janela
        window.addEventListener('resize', () => {
            const newCardsPerView = getCardsPerView();
            if (newCardsPerView !== cardsPerView) {
                cardsPerView = newCardsPerView;
                maxIndex = Math.max(0, totalCards - cardsPerView);
                currentIndex = 0;
                createDots();
                updateCarousel();
            }
        });

        // Inicializa o carrossel
        createDots();
        updateCarousel();
    } // Fecha o if do carrossel

    // Configuração do Intersection Observer
    const observerOptions = {
        root: null, // usa o viewport como referência
        rootMargin: '0px',
        threshold: 0.15 // o elemento deve estar 15% visível para disparar
    };

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe active quando o elemento entra no viewport
                entry.target.classList.add('active');

                // Opcional: para de observar após a primeira animação
                // observer.unobserve(entry.target);
            } else {
                // Opcional: remove a classe active ao sair do viewport para repetir a animação
                entry.target.classList.remove('active');
            }
        });
    };

    const observer = new IntersectionObserver(revealCallback, observerOptions);

    // Seleciona todos os elementos que devem ser revelados
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => {
        observer.observe(el);
        // Força a revelação de elementos já visíveis no carregamento
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('active');
        }
    });
});

// MENU HAMBURGUER

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
});

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
    });
});

const carousel = document.querySelector('.cards_highlights');
const cards = document.querySelectorAll('.card_highlights');

let currentIndex = 0;

function updateCarousel() {
    const offset = currentIndex * -100;
    carousel.style.transform = `translateX(${offset}%)`;
}

/* Swipe touch (mobile) */
let startX = 0;

carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (diff > 50 && currentIndex < cards.length - 1) {
        currentIndex++;
    } else if (diff < -50 && currentIndex > 0) {
        currentIndex--;
    }

    updateCarousel();
});

// Cria bolinhas
const dotsContainer = document.querySelector('.carousel-dots');

// criar bolinhas
cards.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dotsContainer.appendChild(dot);
});

// selecionar todas as bolinhas
const dots = document.querySelectorAll('.dot');

function updateCarousel() {
  const offset = currentIndex * -100;
  document.querySelector('.cards_highlights').style.transform = `translateX(${offset}%)`;

  // atualizar bolinhas
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

// swipe touch

carousel.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  const diff = startX - endX;

  if (diff > 50 && currentIndex < cards.length - 1) {
    currentIndex++;
  } else if (diff < -50 && currentIndex > 0) {
    currentIndex--;
  }

  updateCarousel();
});