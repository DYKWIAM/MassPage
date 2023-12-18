import reservationList from "./reservationList.js";
export default async function updateReservationForm(pReservation) {
    console.log(pReservation)
    return `
        <h3>Update Form</h3>
        <span>Reservation #${pReservation.id} is being updated</span>
        <div>
            <form id="reservationUpdateForm" onsubmit="updateReservation(event)">       
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
window.updateReservation = async function (event){
    event.preventDefault();
    const updatedReservation = {
        firstname: $("#firstname").val(),
        lastname: $("#lastname").val(),
        email: $("#email").val(),
        phone: $("#phone").val(),
        event: pReservation.event  
    };

    if (updatedReservation.firstname.trim().length > 0) {
        const response = await fetch(`http://localhost:3000/api/reservation/${pReservation.id}`, {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedReservation),
        });

        if (response.ok) {
            alert("Update success!");
            $('#tableContainer').html(await reservationList(reservationList()));
        } else {
            alert("Update failed!");
        }
    } else {
        alert("Please fill in all required fields!");
    }

}
