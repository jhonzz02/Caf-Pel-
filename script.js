document.addEventListener('DOMContentLoaded', () => {
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

        }, 800);// Começa um pouco antes das portas terminarem de abrir
    });
});