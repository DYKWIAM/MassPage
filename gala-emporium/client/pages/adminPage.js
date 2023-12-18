import addEvent from "../components/addEvent.js";
import eventList from "../components/eventList.js";
import reservationList from "../components/reservationList.js";

export default async function adminPage() {
  return `
      <div id="adminPageConntent">
        <div id="formAndEvenListAdminPage">          
          <div>
            <label for="tableSelector">Select a Table:</label>
            <select id="tableSelector" onchange="loadTable()">
            <option value="addEvent" selected>Add Event </option>
              <option value="eventList" selected>Events </option>
              <option value="reservationList">Reservation</option>
            </select>
          </div>
        </div>
        <div id="tableContainer">
        </div>        
      </div>      
    `;
}

window.loadTable = async function () {
  const tableSelector = document.getElementById('tableSelector');
  const selectedTable = tableSelector.value;
  const tableContainer = document.getElementById('tableContainer');

  switch (selectedTable) {
    case 'addEvent':
      $("#tableContainer").html(await addEvent());
      break;
    case 'eventList':
      $("#tableContainer").html(await eventList());
      break;
    case 'reservationList':
      $('#tableContainer').html(await reservationList());
      break;
    default:
      tableContainer.innerHTML = 'No table selected.';
  }}

