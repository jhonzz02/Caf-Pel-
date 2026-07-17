// 1. Evita que o navegador lembre da posição do scroll ao atualizar a página
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

document.addEventListener('DOMContentLoaded', () => {
    // 2. Força a página a ir para o topo absoluto assim que carrega
    window.scrollTo(0, 0);

    const splashScreen = document.getElementById('splash-screen');
    const splashLeft = document.getElementById('splash-left');
    const splashRight = document.getElementById('splash-right');
    const splashContent = document.getElementById('splash-content');
    const homeContent = document.getElementById('home-content');
    const animateItems = document.querySelectorAll('.animate-item');

    splashScreen.addEventListener('click', () => {
        // 1. Primeiro, fazemos o texto principal e o "clique" desaparecerem
        splashContent.style.opacity = '0';

        // 2. Esperamos um tempinho rápido e abrimos o fundo verde ao meio
        setTimeout(() => {
            splashLeft.classList.add('split-left');
            splashRight.classList.add('split-right');
            
            // Liberamos o scroll da página que estava travado
            document.body.classList.remove('overflow-hidden');
            // Garante que o scroll horizontal continue bloqueado após liberar a rolagem
            document.body.classList.add('overflow-x-hidden');
        }, 400);

        // 3. Revelamos a Home Page e começamos as animações dos textos e do banner lateral
        setTimeout(() => {
            splashScreen.style.pointerEvents = 'none'; 
            homeContent.classList.remove('opacity-0');
            
            // Revela os itens centrais (Igreja, Título, etc)
            animateItems.forEach(item => {
                item.classList.add('show');
            });

            // Revela o banner lateral da esquerda
            const sideBanner = document.querySelector('.animate-slide-right');
            if (sideBanner) {
                sideBanner.classList.add('show');
            }
            
            setTimeout(() => splashScreen.remove(), 1000); 

        }, 800); // Começa um pouco antes das portas terminarem de abrir
    });

    // ==========================================
    // CONFIGURAÇÃO DO SCROLL ANIMATION
    // ==========================================
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                entry.target.classList.remove('is-visible');
            }
        });
    }, {
        threshold: 0.15, // Dispara quando 15% do elemento estiver visível
        rootMargin: "0px 0px -50px 0px" 
    });

    const scrollElements = document.querySelectorAll('.scroll-anim');
    scrollElements.forEach(el => scrollObserver.observe(el));
});