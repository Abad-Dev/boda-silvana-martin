// Enlaces de los botones de la invitación. Edita aquí sin tocar el diseño.
export const LINKS = {
  // "GUARDAR FECHA" descarga un evento de calendario (public/boda-silvana-martin.ics)
  guardarFecha: '/boda-silvana-martin.ics',
  // "CÓMO LLEGAR" – Ceremonia religiosa
  ceremoniaReligiosa:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('Capilla Asilo de Ancianos, Av. Jorge Chávez 350, Piura, Perú'),
  // "CÓMO LLEGAR" – Ceremonia civil
  ceremoniaCivil:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('Asociación Caballos de Paso, Av. Los Ejidos km 5, La Mariposa, Piura, Perú'),
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
    (import.meta.env.DEV ? 'http://localhost:3000' : 'https://guest.pe'),
};
