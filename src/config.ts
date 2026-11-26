// Enlaces de los botones de la invitación. Edita aquí sin tocar el diseño.
export const LINKS = {
  // "GUARDAR FECHA" abre Google Calendar con el evento listo para guardar
  // (hora de Lima: 24/04/2027 15:30 – 25/04/2027 04:00)
  guardarFecha:
    'https://calendar.google.com/calendar/render?' +
    new URLSearchParams({
      action: 'TEMPLATE',
      text: 'Boda de Silvana y Martín',
      dates: '20270424T153000/20270425T040000',
      ctz: 'America/Lima',
      location: 'Capilla Asilo de Ancianos, Av. Jorge Chávez 350, Piura, Perú',
      details:
        'Ceremonia religiosa 3:30 p. m. — Capilla Asilo de Ancianos, Av. Jorge Chávez 350, Piura.\n' +
        'Ceremonia civil 6:30 p. m. — Asociación Caballos de Paso, Av. Los Ejidos km 5, La Mariposa, Piura.',
    }).toString(),
  // "CÓMO LLEGAR" – Ceremonia religiosa
  ceremoniaReligiosa:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('Capilla Asilo de Ancianos, Av. Jorge Chávez 350, Piura, Perú'),
  // "CÓMO LLEGAR" – Ceremonia civil
  ceremoniaCivil: 'https://maps.app.goo.gl/r6nmsWrZy9XWZfWW8',
  // "CONFIRMAR ASISTENCIA" abre el modal de confirmación (RsvpModal)
  confirmarAsistencia: '#confirmar',
};

// Confirmaciones (RSVP) en GUEST. La llave es pública: vive en el JS de la página
// y GUEST solo acepta envíos desde los dominios registrados para esta boda.
export const GUEST_RSVP = {
  apiKey: 'gk_ac08a80c7777c9e4bed41bb078c68526330589afaa00f295',
  // En desarrollo apunta al GUEST local; se puede forzar con PUBLIC_GUEST_API_URL.
  baseUrl:
    import.meta.env.PUBLIC_GUEST_API_URL ??
    (import.meta.env.DEV ? 'http://localhost:3000' : 'https://guest-peru-demo.netlify.app'),
};
