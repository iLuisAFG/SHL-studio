/* =========================================================
   TALLER MARKETING NEZA 2026 — script.js
   1. Contador regresivo en tiempo real
   2. Desplazamiento suave hacia las secciones
   3. Validación y envío simulado del formulario de registro
   4. Año dinámico en el footer
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------------------------------------------------------
     1. CONTADOR REGRESIVO
     --------------------------------------------------------- */

  // --- CONFIGURA AQUÍ LA FECHA REAL DE TU EVENTO ---
  // Formato: "AAAA-MM-DDTHH:mm:ss". Debe coincidir con la fecha del Hero.
  const FECHA_EVENTO = new Date("2026-08-15T09:00:00");

  // Alternativa sugerida por el brief: si prefieres una cuenta regresiva
  // relativa (siempre "30 días a partir de hoy" cada vez que alguien entra),
  // descomenta las siguientes 2 líneas y comenta la constante de arriba:
  // const FECHA_EVENTO = new Date();
  // FECHA_EVENTO.setDate(FECHA_EVENTO.getDate() + 30);

  const elDays = document.getElementById("cd-days");
  const elHours = document.getElementById("cd-hours");
  const elMinutes = document.getElementById("cd-minutes");
  const elSeconds = document.getElementById("cd-seconds");

  // Agrega un cero a la izquierda para números menores a 10 (ej. "05")
  function conCeroIzquierda(numero) {
    return String(numero).padStart(2, "0");
  }

  function actualizarContador() {
    const ahora = new Date().getTime();
    const diferencia = FECHA_EVENTO.getTime() - ahora;

    // Si la fecha ya pasó, el contador se detiene en ceros
    if (diferencia <= 0) {
      elDays.textContent = "00";
      elHours.textContent = "00";
      elMinutes.textContent = "00";
      elSeconds.textContent = "00";
      clearInterval(intervaloContador);
      return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    elDays.textContent = conCeroIzquierda(dias);
    elHours.textContent = conCeroIzquierda(horas);
    elMinutes.textContent = conCeroIzquierda(minutos);
    elSeconds.textContent = conCeroIzquierda(segundos);
  }

  actualizarContador(); // pinta el valor inicial sin esperar 1 segundo
  const intervaloContador = setInterval(actualizarContador, 1000);

  /* ---------------------------------------------------------
     2. DESPLAZAMIENTO SUAVE (smooth scroll)
     --------------------------------------------------------- */

  // Selecciona todos los enlaces internos que apuntan a un "#id"
  // (menú del header y botón CTA del hero)
  const enlacesInternos = document.querySelectorAll('a[href^="#"]');

  enlacesInternos.forEach((enlace) => {
    enlace.addEventListener("click", (e) => {
      const destinoId = enlace.getAttribute("href");
      const destino = document.querySelector(destinoId);

      if (destino) {
        e.preventDefault();
        destino.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  /* ---------------------------------------------------------
     3. FORMULARIO DE REGISTRO
     --------------------------------------------------------- */
  const form = document.getElementById("registration-form");
  const feedback = document.getElementById("form-feedback");

  const campos = {
    nombre: document.getElementById("nombre"),
    apellido: document.getElementById("apellido"),
    email: document.getElementById("email"),
    negocio: document.getElementById("negocio"),
  };

  form.addEventListener("submit", (e) => {
    // Evita que el navegador recargue la página al enviar
    e.preventDefault();

    let formularioValido = true;

    // Valida que ningún campo esté vacío y marca visualmente los que fallan
    Object.values(campos).forEach((campo) => {
      const vacio = campo.value.trim() === "";
      campo.classList.toggle("is-invalid", vacio);
      if (vacio) formularioValido = false;
    });

    // Validación extra de formato de email
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campos.email.value.trim());
    if (!emailValido) {
      campos.email.classList.add("is-invalid");
      formularioValido = false;
    }

    if (!formularioValido) {
      feedback.textContent = "Revisa los campos marcados: faltan datos o el correo no es válido.";
      feedback.classList.remove("is-success");
      feedback.classList.add("is-error");
      return;
    }

    // --- Simulación de registro exitoso ---
    // En un caso real, aquí harías un fetch() hacia tu backend, Google Sheets o CRM.
    const nombreCompleto = `${campos.nombre.value.trim()} ${campos.apellido.value.trim()}`;
    feedback.textContent = `¡Gracias por registrarte, ${nombreCompleto}! Nos vemos en el evento. Revisa tu correo para la confirmación.`;
    feedback.classList.remove("is-error");
    feedback.classList.add("is-success");

    form.reset();
  });

  // Quita la marca de error en cuanto la persona empieza a corregir un campo
  Object.values(campos).forEach((campo) => {
    campo.addEventListener("input", () => campo.classList.remove("is-invalid"));
  });

  /* ---------------------------------------------------------
     4. AÑO DINÁMICO EN EL FOOTER
     --------------------------------------------------------- */
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

});
