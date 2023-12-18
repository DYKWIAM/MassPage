export default async function reservation(pClubName) {
  const response = await fetch("http://localhost:3000/api/event");
  const data = await response.json();
  const eventList = data.filter((events) => events.clubName == pClubName);

  return ` <div class="popup" id="formPopup">
    <div class="popup-content">
    <h3>Reservation</h3>
        <span class="close" onclick="closeFormPopup(); ">&times;</span>
        <form id="reservationForm" onsubmit="saveReservation(event)">
            <label for="eventList">Event List:</label>
            <select id="eventList" name="eventList">
                ${eventList.map((event) => {
                  return `
                    <option value="${event.id}">${event.name} - ${event.date.slice(0,10)} - ${event.time}</option>
                    `;
                })}
            </select>
            <br>
            <label for="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" required>
            <br>
            <label for="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" required>
            <br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <br>
            <label for="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required>
            <br>
            <button type="submit">Save</button>
        </form>
    </div>
</div>

<div class="popup" id="successPopup">
    <div class="popup-content">
        <span class="close" onclick="closeSuccessPopup()">&times;</span>
        <p>Information saved successfully!</p>
       
    </div>
</div>
    `;
}

window.openFormPopup = function () {
  document.getElementById("formPopup").style.display = "block";
};

window.closeFormPopup = function () {
  document.getElementById("formPopup").style.display = "none";
};

window.openSuccessPopup = function () {
  document.getElementById("successPopup").style.display = "block";
};

window.closeSuccessPopup = function () {
  document.getElementById("successPopup").style.display = "none";
};

window.saveReservation = function (event) {
  event.preventDefault();
  const newReservation = {
    firstName: $("[name=firstName]").val(),
    lastName: $("[name=lastName]").val(),
    email: $("[name=email]").val(),
    phone: $("[name=phone]").val(),
    event: $("[name=eventList]").val(),
  };
  if (newReservation.firstName.trim().length > 0) {
    const response = fetch("http://localhost:3000/api/reservation", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: newReservation.firstName,
        lastname: newReservation.lastName,
        phone: newReservation.phone,
        email: newReservation.email,
        event: newReservation.event,
      }),
    });
    downloadPDF(newReservation);
    closeFormPopup();
    openSuccessPopup();
  } else {
    alert("Error!");
  }
};

window.downloadPDF = function (pReservation) {
  const doc = new jsPDF();
  let htmlContent = `Reservation Details
    First Name: ${pReservation.firstName}
    Last Name ${pReservation.lastName}
    Phone: ${pReservation.phone}
    Email: ${pReservation.email}
    Event id: ${pReservation.event}
    Rezervation Date : ${new Date()}`;
  doc.text(htmlContent, 10, 10);
  doc.save("reservation.pdf");
  console.log("PDF generated successfully");
  return `
        
    `;
};
