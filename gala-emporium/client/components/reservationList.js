import reservationTableContent from "./reservationTableContent.js   "
export default async function(){
    const response = await fetch("http://localhost:3000/api/reservation")
    const data = await response.json()
    return `    
    ${await reservationTableContent(data)}
    `
}
window.deleteReservation = async function (pReservationId){
    const response = await fetch(`http://localhost:3000/api/reservation/${pReservationId}`,{ method: "delete" })
    const result = await response.json()
    console.log("Reservation  deleted - ", result);
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = await reservationTableContent();
}

