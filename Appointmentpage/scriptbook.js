// JavaScript (scriptbook.js):
const doctorsData = {
  cardiologist: [
    { name: 'Dr. Mathur', availableSlots: ['10:00 AM - 11:00 AM', '1:00 PM - 2:00 PM'] },
    { name: 'Dr. Goyal', availableSlots: ['9:00 AM - 10:00 AM', '12:00 PM - 1:00 PM'] },
    { name: 'Dr. Thakur', availableSlots: ['11:00 AM - 12:00 PM', '2:00 PM- 3:00 PM'] },
  ],
  dermatologist: [
    { name: 'Dr. Patel', availableSlots: ['11:00 AM - 12:00 PM', '3:00 PM - 4:00 PM'] },
    { name: 'Dr. Gupta', availableSlots: ['8:00 AM - 9:00 AM', '12:00 PM - 1:00 PM'] },
    { name: 'Dr. Mayak', availableSlots: ['10:00 AM - 11.00 AM', '1:00 PM - 2:00 PM'] },
  ],
  neurologist: [
    { name: 'Dr. Sogani', availableSlots: ['9:00 AM - 10:00 AM', '1:00 PM - 2:00 PM'] },
    { name: 'Dr. Mittal', availableSlots: ['10:00 AM - 11:00 AM', '2:00 PM - 3:00 PM'] },
  ],
  pediatrician: [
    { name: 'Dr. Chandak', availableSlots: ['8:00 AM - 9:00 AM', '12:00 PM - 1:00 PM'] },
    { name: 'Dr. Vora', availableSlots: ['9:00 AM - 10:00 AM', '1:00 PM - 2:00 PM'] },
  ],
  psychiatrist: [
    { name: 'Dr. Naik', availableSlots: ['10:00 AM - 11:00 AM', '2:00 PM - 3:00 PM'] },
    { name: 'Dr. Soni', availableSlots: ['11:00 AM - 12:00 PM', '3:00 PM - 4:00 PM'] },
  ],
  orthopedic: [
    { name: 'Dr. Sahu', availableSlots: ['8:00 AM - 9:00 AM', '12:00 PM - 1:00 PM'] },
    { name: 'Dr. Rao', availableSlots: ['9:00 AM - 10:00 AM', '1:00 PM - 2:00 PM'] },
  ],
};

// Function to book an appointment
function bookAppointment() {
  const selectedDate = document.getElementById('appointmentDate').value;
  if (!selectedDate) {
    alert("Please select an appointment date.");
    return;
  }

  const selectedDoctorGrid = document.querySelector('.doctor-grid.selected');
  if (!selectedDoctorGrid) {
    alert("Please select a doctor.");
    return;
  }

  const selectedDoctorName = selectedDoctorGrid.querySelector('h2').textContent;

  const selectedSlotElement = selectedDoctorGrid.querySelector('select');
  if (!selectedSlotElement || !selectedSlotElement.value) {
    alert("Please select an available time slot.");
    return;
  }

  const selectedSlot = selectedSlotElement.value;

  const confirmationMessage = `Appointment booked for ${selectedDate} with ${selectedDoctorName} at ${selectedSlot}.`;
  alert(confirmationMessage);
}

// Function to display the list of doctors based on the specialization
function showDoctors(specialization) {
  const doctorList = document.getElementById('doctor-list');
  doctorList.innerHTML = ''; // Clear previous content

  const doctors = doctorsData[specialization];
  if (!doctors) {
    doctorList.innerHTML = '<p>No doctors available for this specialization.</p>';
    return;
  }

  doctors.forEach(doctor => {
    const doctorGrid = document.createElement('div');
    doctorGrid.classList.add('doctor-grid');
    doctorGrid.innerHTML = `
      <h2>${doctor.name}</h2>
      <p>Available Slots:</p>
      <select>
        ${doctor.availableSlots.map(slot => `<option value="${slot}">${slot}</option>`).join('')}
      </select>
    `;
    // Event listener added to toggle selected class on doctor grid
    doctorGrid.addEventListener('click', function(event) {
      const selected = document.querySelector('.doctor-grid.selected');
      if (selected) selected.classList.remove('selected');
      doctorGrid.classList.add('selected');
      // Stop propagation to prevent the event from reaching the specialization buttons
      event.stopPropagation();
    });
    doctorList.appendChild(doctorGrid);
  });
}
