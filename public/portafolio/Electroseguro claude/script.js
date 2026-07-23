/* =========================================================
   ELECTROSEGURO NEZA — script.js
   1. Menú hamburguesa (abrir/cerrar en móvil)
   2. Envío simulado del formulario de contacto
   3. Año dinámico en el footer
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------------------------------------------------------
     1. MENÚ HAMBURGUESA
     --------------------------------------------------------- */
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const mainNav = document.getElementById("main-nav");

  // Abre/cierra el menú al hacer clic en el botón hamburguesa
  function toggleMenu() {
    const isOpen = mainNav.classList.toggle("is-open");
    hamburgerBtn.classList.toggle("is-active", isOpen);
    // Actualiza el atributo de accesibilidad para lectores de pantalla
    hamburgerBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  }

  hamburgerBtn.addEventListener("click", toggleMenu);

  // Cierra el menú automáticamente al elegir una sección (mejora UX en móvil)
  mainNav.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (mainNav.classList.contains("is-open")) {
        toggleMenu();
      }
    });
  });

  // Cierra el menú si el usuario hace clic fuera de él (solo cuando está abierto)
  document.addEventListener("click", (event) => {
    const clickedInsideNav = mainNav.contains(event.target);
    const clickedHamburger = hamburgerBtn.contains(event.target);

    if (mainNav.classList.contains("is-open") && !clickedInsideNav && !clickedHamburger) {
      toggleMenu();
    }
  });

  /* ---------------------------------------------------------
     2. FORMULARIO DE CONTACTO (envío simulado, sin backend)
     --------------------------------------------------------- */
  const contactForm = document.getElementById("contact-form");
  const formFeedback = document.getElementById("form-feedback");

  contactForm.addEventListener("submit", (e) => {
    // Evita que el navegador recargue la página al enviar el formulario
    e.preventDefault();

    // Recupera los valores del formulario (aquí es donde conectarías tu backend/API real)
    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const servicio = document.getElementById("servicio").value;

    // Validación mínima en el cliente
    if (!nombre || !telefono || !servicio) {
      formFeedback.textContent = "Por favor completa todos los campos antes de enviar.";
      formFeedback.classList.remove("is-success");
      return;
    }

    // --- Simulación de envío exitoso ---
    // En un caso real, aquí harías un fetch()/XHR hacia tu servidor o servicio de correo.
    formFeedback.textContent =
      `¡Gracias, ${nombre}! Recibimos tu solicitud de "${servicio}". ` +
      `Te contactaremos al ${telefono} en breve.`;
    formFeedback.classList.add("is-success");

    // Limpia el formulario después de "enviarlo"
    contactForm.reset();
  });

  /* ---------------------------------------------------------
     3. AÑO DINÁMICO EN EL FOOTER
     --------------------------------------------------------- */
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

});
