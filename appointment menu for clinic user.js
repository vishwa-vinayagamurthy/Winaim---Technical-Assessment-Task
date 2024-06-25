const appointmentMenu = document.getElementById('appointment-menu');

const filterForm = document.getElementById('filter-form');

filterForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const dateFilter = document.getElementById('date-filter').value;
  const doctorFilter = document.getElementById('doctor-filter').value;

  fetch('/appointments', {
    method: 'GET',
    params: {
      date: dateFilter,
      doctor: doctorFilter,
    },
  })
 .then((response) => response.json())
 .then((data) => {
    const appointmentTbody = document.getElementById('appointment-tbody');
    appointmentTbody.innerHTML = '';
    data.appointments.forEach((appointment) => {
      const appointmentRow = document.createElement('tr');
      appointmentRow.innerHTML = `
        <td>${appointment.appointmentDate}</td>
        <td>${appointment.appointmentTime}</td>
        <td>${appointment.patientName}</td>
        <td>${appointment.age}</td>
        <td>${appointment.purposeOfVisit}</td>
        <td>${appointment.doctorName}</td>
      `;
      appointmentTbody.appendChild(appointmentRow);
    });
  })
 .catch((error) => {
    console.error('Error fetching appointments:', error);
  });
});
