/* =========================================================
   BARBERÍA URBANA NEZA — script.js
   1. Lógica de selección (servicio / barbero / hora)
   2. Actualización dinámica del panel de resumen
   3. Validación y confirmación de la reserva
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------------------------------------------------------
     ESTADO DE LA RESERVA
     Guarda en un solo objeto todo lo que el usuario ha elegido,
     así el resumen siempre se pinta a partir de esta única fuente.
     --------------------------------------------------------- */
  const reserva = {
    servicio: null,   // { nombre, precio, duracion }
    barbero: null,    // nombre
    fecha: null,       // valor del input date
    hora: null,        // texto del horario elegido
  };

  /* ---------------------------------------------------------
     1. LÓGICA DE SELECCIÓN (servicio, barbero, hora)
     --------------------------------------------------------- */

  // Todas las tarjetas seleccionables comparten la clase .option-card
  // y se agrupan por data-group ("servicio", "barbero", "hora")
  const opciones = document.querySelectorAll(".option-card[data-group]");

  opciones.forEach((opcion) => {
    opcion.addEventListener("click", () => {
      // Los horarios agotados no deben poder seleccionarse
      if (opcion.disabled) return;

      const grupo = opcion.dataset.group;

      // Quita la clase .selected a las demás tarjetas del MISMO grupo
      document
        .querySelectorAll(`.option-card[data-group="${grupo}"]`)
        .forEach((el) => el.classList.remove("selected"));

      // Marca la tarjeta elegida
      opcion.classList.add("selected");

      // Guarda la elección en el objeto de estado según el grupo
      if (grupo === "servicio") {
        reserva.servicio = {
          nombre: opcion.dataset.name,
          precio: Number(opcion.dataset.price),
          duracion: opcion.dataset.duration,
        };
      } else if (grupo === "barbero") {
        reserva.barbero = opcion.dataset.name;
      } else if (grupo === "hora") {
        reserva.hora = opcion.dataset.name;
      }

      actualizarResumen();
    });
  });

  // El selector de fecha no es una .option-card, se maneja aparte
  const fechaInput = document.getElementById("fecha-cita");
  fechaInput.addEventListener("change", () => {
    reserva.fecha = fechaInput.value;
    actualizarResumen();
  });

  /* ---------------------------------------------------------
     2. ACTUALIZACIÓN DINÁMICA DEL RESUMEN
     --------------------------------------------------------- */
  const summaryService = document.getElementById("summary-service");
  const summaryBarber = document.getElementById("summary-barber");
  const summaryDate = document.getElementById("summary-date");
  const summaryTime = document.getElementById("summary-time");
  const summaryTotal = document.getElementById("summary-total");

  // Formatea "2026-08-15" a "sáb, 15 ago 2026" para que se lea mejor
  function formatearFecha(valorInput) {
    if (!valorInput) return "No seleccionada";
    const fecha = new Date(`${valorInput}T00:00:00`);
    return fecha.toLocaleDateString("es-MX", {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

  function actualizarResumen() {
    summaryService.textContent = reserva.servicio
      ? `${reserva.servicio.nombre} · ${reserva.servicio.duracion}`
      : "No seleccionado";

    summaryBarber.textContent = reserva.barbero || "No seleccionado";
    summaryDate.textContent = formatearFecha(reserva.fecha);
    summaryTime.textContent = reserva.hora || "No seleccionada";

    const total = reserva.servicio ? reserva.servicio.precio : 0;
    summaryTotal.textContent = `$${total}`;
  }

  /* ---------------------------------------------------------
     3. CONFIRMAR RESERVA
     --------------------------------------------------------- */
  const confirmBtn = document.getElementById("confirm-btn");
  const feedback = document.getElementById("summary-feedback");

  confirmBtn.addEventListener("click", () => {
    // Verifica que servicio, barbero y hora estén seleccionados.
    // (La fecha queda como opcional/recomendada; puedes hacerla obligatoria
    // agregando "!reserva.fecha" a la condición si tu negocio lo requiere)
    const faltantes = [];
    if (!reserva.servicio) faltantes.push("un servicio");
    if (!reserva.barbero) faltantes.push("un barbero");
    if (!reserva.hora) faltantes.push("un horario");

    if (faltantes.length > 0) {
      const mensaje = `Te falta elegir: ${faltantes.join(", ")}.`;
      alert(mensaje);
      feedback.textContent = mensaje;
      feedback.classList.remove("is-success");
      feedback.classList.add("is-error");
      return;
    }

    // --- Simulación de reserva confirmada ---
    // En un caso real, aquí harías un fetch() hacia tu backend/calendario.
    feedback.textContent =
      `¡Listo! Tu cita para "${reserva.servicio.nombre}" con ${reserva.barbero} ` +
      `quedó agendada. Te esperamos.`;
    feedback.classList.remove("is-error");
    feedback.classList.add("is-success");

    confirmBtn.textContent = "Reserva confirmada ✓";
    confirmBtn.disabled = true;
  });

  // Pinta el resumen inicial ("No seleccionado" en todo) al cargar la página
  actualizarResumen();

});
