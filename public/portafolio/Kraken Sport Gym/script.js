document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-darker', 'shadow-lg', 'border-gray-900');
            navbar.classList.remove('bg-transparent', 'border-transparent', 'py-4');
            navbar.classList.add('py-2');
        } else {
            navbar.classList.remove('bg-darker', 'shadow-lg', 'border-gray-900', 'py-2');
            navbar.classList.add('bg-transparent', 'border-transparent', 'py-4');
        }
    });

    // 2. Scroll Reveal Animation using Intersection Observer
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Unobserve after revealing to animate only once
                observer.unobserve(entry.target); 
            }
        });
    };

    const revealOptions = {
        threshold: 0.15, // Trigger when 15% of element is visible
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 3. Form Submission Handle
    const citaForm = document.getElementById('citaForm');
    if(citaForm) {
        citaForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simulate form submission
            const btn = citaForm.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            btn.innerHTML = 'Enviando... <i class="fa-solid fa-spinner fa-spin ml-2"></i>';
            btn.disabled = true;

            setTimeout(() => {
                alert('¡Solicitud enviada con éxito! Nuestro equipo se pondrá en contacto contigo pronto.');
                citaForm.reset();
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 1500);
        });
    }
});
