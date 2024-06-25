
const myAppointmentsGrid = document.getElementById('my-appointments-grid');


const myAppointmentsTbody = document.getElementById('my-appointments-tbody');

fetch('/my-appointments')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((appointment) => {
      const gridData = document.createElement('tr');
      gridData.innerHTML = `
        <td>${appointment.appointmentDate}</td>
        <td>${appointment.time}</td>
        <td>${appointment.doctorName}</td>
        <td>${appointment.purposeOfVisit}</td>
        <td>${appointment.status}</td>
        <td>
          <button class="cancel-button">Cancel</button>
          <button class="reschedule-button">Reschedule</button>
        </td>
      `;
      myAppointmentsTbody.appendChild(gridData);
    });
  })
  .catch((error) => {
    console.error(error);
  });

myAppointmentsTbody.addEventListener('click', (event) => {
  if (event.target.classList.contains('cancel-button')) {
  } else if (event.target.classList.contains('reschedule-button')) {
  }
});
