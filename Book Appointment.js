const bookAppointmentPopup = document.getElementById('book-appointment-popup');

const closeButton = document.getElementById('close-button');

closeButton.addEventListener('click', () => {
  bookAppointmentPopup.classList.remove('show');
});

document.getElementById('book-appointment-button').addEventListener('click', (event) => {
  event.preventDefault();

  const formData = new FormData(document.getElementById('book-appointment-form'));

  fetch('/book-appointment', {
    method: 'POST',
    body: formData,
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

  })
  .catch((error) => {
    console.error(error);
  });
});

document.getElementById('book-appointment-menu-item').addEventListener('click', () => {
  bookAppointmentPopup.classList.add('show');
});
