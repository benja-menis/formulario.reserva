// Referencias a los inputs (CORRECCIÓN CLAVE)
const nameInput = document.getElementById('name');
const contactInput = document.getElementById('contact');
const serviceInput = document.getElementById('service');
const dateInput = document.getElementById('date');
const messageInput = document.getElementById('message');

// Explicaciones
const fields = [
  { input: nameInput, exp: 'exp-name' },
  { input: contactInput, exp: 'exp-contact' },
  { input: serviceInput, exp: 'exp-service' },
  { input: dateInput, exp: 'exp-date' },
  { input: messageInput, exp: 'exp-message' }
];

fields.forEach(f => {
  const explanation = document.getElementById(f.exp);
  f.input.addEventListener('input', () => {
    if (f.input.value.trim()) {
      explanation.style.display = 'block';
    }
  });
});

// Modal
const modal = document.getElementById('modal');
const summary = document.getElementById('summary');
const form = document.getElementById('bookingForm');
const closeModalBtn = document.getElementById('closeModal');

form.addEventListener('submit', e => {
  e.preventDefault();

  summary.innerHTML = `
    <strong>Nombre:</strong> ${nameInput.value}<br>
    <strong>Contacto:</strong> ${contactInput.value}<br>
    <strong>Servicio:</strong> ${serviceInput.value}<br>
    <strong>Fecha:</strong> ${dateInput.value}<br>
    <strong>Comentario:</strong> ${messageInput.value || '—'}
  `;

  modal.style.display = 'flex';
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  form.reset();
  document.querySelectorAll('.explanation').forEach(e => e.style.display = 'none');
});
