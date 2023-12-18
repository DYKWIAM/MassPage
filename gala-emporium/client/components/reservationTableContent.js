import reservationList from "./reservationList.js";
export default async function reservationTableContent() {    
  const response = await fetch("http://localhost:3000/api/reservation")
  const data = await response.json()
    return `
      <div>
        <table id="reservationList">
          <thead>
            <tr>
              <th>Reservation ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Event id</th>
              <th>Delete Reservation</th>
              <th>Update Reservation</th>
            </tr>
          </thead>
          <tbody>
            ${data.map((data) => {
              return `
                <tr>
                  <td>${data.id}</td>
                  <td>${data.firstname}</td>
                  <td>${data.lastname}</td>
                  <td>${data.phone}</td>
                  <td>${data.email}</td>
                  <td>${data.event}</td>
                  <td><a class="deleteReservation" onclick="deleteReservation(${data.id})">Delete</a></td>
                  <td><a class="updateReservation" onclick="openUpdatePage(${data.id})">Update</a></td>
                </tr>`;
            }).join("")}     
          </tbody>
        </table>
         
    `;
  }  

  window.deleteReservation = async function (pReservationId) {
    const response = await fetch(`http://localhost:3000/api/reservation/${pReservationId}`, { method: "delete" });
    const result = await response.json();
    console.log("Reservation deleted - ", result);
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = await reservationTableContent();
  };

  window.openUpdatePage = async function (pReservationId){
    console.log(pReservationId)
    const response =  await fetch(`http://localhost:3000/api/reservation/${pReservationId}`);
    const result = await response.json();
    console.log(result)
    $('#tableContainer').html(await updateReservationForm(result[0])); 
}
async function updateReservationForm(pReservation) {
  return `
      <h3>Update Form</h3>
      <span>Reservation #${pReservation.id} is being updated</span>
      <div>
          <form id="reservationUpdateForm" onsubmit="updateReservationFunction(${pReservation.id}); return false;">       
              <br>
              <label for="firstname">First Name:</label>
              <input type="text" id="firstname" name="firstname" required>
              <br>
              <label for="lastname">Last Name:</label>
              <input type="text" id="lastname" name="lastname" required>
              <br>
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required>
              <br>
              <label for="phone">Phone:</label>
              <input type="tel" id="phone" name="phone" required>
              <br>
              <button type="submit">Save</button>
          </form>
      </div>`;
}

window.updateReservationFunction = async function (pReservationId){
  const response = await fetch(`http://localhost:3000/api/reservation/${pReservationId}`);
  const result = await response.json();
  console.log(result)
  const updatedReservation = {
      firstname: $("#firstname").val(),
      lastname: $("#lastname").val(),
      email: $("#email").val(),
      phone: $("#phone").val(),
  };
  if (updatedReservation.firstname.trim().length > 0) {
    const response = await fetch(`http://localhost:3000/api/reservation/${pReservationId}`,     {
          method: "put",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstname: updatedReservation.firstname,
            lastname: updatedReservation.lastname,
            email: updatedReservation.email,
            phone: updatedReservation.phone,
          }),
      });
      console.log('ok2')
      if (response.ok) {
          alert("Update success!");
          $('#tableContainer').html(await reservationList());
      } else {
          alert("Update failed!");
      }
  } else {
      alert("Please fill in all required fields!");
  }
}