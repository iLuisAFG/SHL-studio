/* =========================================================
   BRISA MARINA BOUTIQUE — script.js
   1. Menú hamburguesa (abrir/cerrar en móvil)
   2. Botón "Ver detalles" -> alerta + resalte de tarjeta
   3. Formulario de newsletter (envío simulado)
   4. Año dinámico en el footer
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------------------------------------------------------
     1. MENÚ HAMBURGUESA
     --------------------------------------------------------- */
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const mainNav = document.getElementById("main-nav");
  const navOverlay = document.getElementById("nav-overlay");

  function openMenu() {
    mainNav.classList.add("is-open");
    hamburgerBtn.classList.add("is-active");
    navOverlay.classList.add("is-visible");
    hamburgerBtn.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    mainNav.classList.remove("is-open");
    hamburgerBtn.classList.remove("is-active");
    navOverlay.classList.remove("is-visible");
    hamburgerBtn.setAttribute("aria-expanded", "false");
  }

  function toggleMenu() {
    const isOpen = mainNav.classList.contains("is-open");
    isOpen ? closeMenu() : openMenu();
  }

  hamburgerBtn.addEventListener("click", toggleMenu);

  // Cierra el menú al elegir una sección o al hacer clic en el fondo oscuro
  mainNav.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
  navOverlay.addEventListener("click", closeMenu);

  // Si la ventana crece hasta el punto donde el nav se vuelve horizontal,
  // nos aseguramos de que no quede "abierto" a medias
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 860) {
      closeMenu();
    }
  });

  /* ---------------------------------------------------------
     2. INTERACCIÓN "VER DETALLES" DE PRODUCTO
     --------------------------------------------------------- */
  const detailButtons = document.querySelectorAll(".btn-details");
  const bagCount = document.getElementById("bag-count");
  let itemsEnBolsa = 0;

  detailButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productName = button.dataset.productName;
      const card = button.closest(".product-card");

      // Simula ver detalles del producto (en un sitio real, abriría una página/modal)
      alert(`Estás viendo: "${productName}"\n\nAquí se mostraría la ficha completa del producto (tallas, materiales y más fotos).`);

      // Resalta brevemente la tarjeta seleccionada
      document.querySelectorAll(".product-card.is-selected").forEach((el) => {
        el.classList.remove("is-selected");
      });
      card.classList.add("is-selected");
      setTimeout(() => card.classList.remove("is-selected"), 1500);

      // Pequeño extra: simula agregar el producto a la bolsa y actualiza el contador
      itemsEnBolsa += 1;
      bagCount.textContent = itemsEnBolsa;
    });
  });

  /* ---------------------------------------------------------
     3. FORMULARIO DE NEWSLETTER (envío simulado)
     --------------------------------------------------------- */
  const newsletterForm = document.getElementById("newsletter-form");
  const newsletterFeedback = document.getElementById("newsletter-feedback");
  const emailInput = document.getElementById("newsletter-email");

  newsletterForm.addEventListener("submit", (e) => {
    // Evita que el navegador recargue la página al enviar el formulario
    e.preventDefault();

    const email = emailInput.value.trim();

    // Validación mínima con expresión regular sencilla
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!emailValido) {
      newsletterFeedback.textContent = "Ingresa un correo electrónico válido.";
      newsletterFeedback.classList.remove("is-success");
      newsletterFeedback.classList.add("is-error");
      return;
    }

    // --- Simulación de suscripción exitosa ---
    // En un caso real, aquí harías un fetch() hacia tu proveedor de email marketing.
    newsletterFeedback.textContent = `¡Gracias! Te suscribiste con ${email}. Revisa tu correo pronto.`;
    newsletterFeedback.classList.remove("is-error");
    newsletterFeedback.classList.add("is-success");

    newsletterForm.reset();
  });

  /* ---------------------------------------------------------
     4. AÑO DINÁMICO EN EL FOOTER
     --------------------------------------------------------- */
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

});
