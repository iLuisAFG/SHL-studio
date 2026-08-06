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

    // 3. Form Submission Handle (WhatsApp Redirect)
    const citaForm = document.getElementById('citaForm');
    if(citaForm) {
        citaForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Gather form data
            const nombre = document.getElementById('nombre').value;
            const edad = document.getElementById('edad').value;
            const genero = document.getElementById('genero').value;
            const interes = document.getElementById('interes').value;
            
            // Construct WhatsApp message
            const mensaje = `¡Hola, Kraken Sport Gym! Me gustaría pedir informes o agendar una cita.\n\nMis datos son:\n- Nombre: ${nombre}\n- Edad: ${edad} años\n- Género: ${genero}\n\nMe interesa: ${interes}`;
            
            // Redirect to WhatsApp
            const whatsappNumber = '5215582095618';
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensaje)}`;
            
            window.open(whatsappUrl, '_blank');
            citaForm.reset();
        });
    }

    // 4. Image Lightbox for Services
    const serviceImages = document.querySelectorAll('#servicios img');
    const lightboxModal = document.getElementById('imageLightbox');
    const lightboxImg = document.getElementById('lightboxImage');
    const closeLightbox = document.getElementById('closeLightbox');

    if (serviceImages.length > 0 && lightboxModal && lightboxImg) {
        serviceImages.forEach(img => {
            img.closest('.group').addEventListener('click', () => {
                lightboxImg.src = img.src;
                lightboxModal.classList.remove('hidden');
                lightboxModal.classList.add('flex');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            });
        });

        const closeModal = () => {
            lightboxModal.classList.add('hidden');
            lightboxModal.classList.remove('flex');
            lightboxImg.src = '';
            document.body.style.overflow = ''; // Restore scrolling
        };

        closeLightbox.addEventListener('click', closeModal);
        lightboxModal.addEventListener('click', (e) => {
            // Close if clicked outside the image
            if (e.target === lightboxModal) {
                closeModal();
            }
        });
        
        // Add Esc key listener to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !lightboxModal.classList.contains('hidden')) {
                closeModal();
            }
        });
    }
});
