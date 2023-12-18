import updatedEvent from './updateEvent.js'
export default async function eventListContent(pData){
    return `
    <table id="eventListTable">
    <thead>
        <tr>
            <th>Event ID</th>
            <th>Club Name</th>
            <th>Event Name 3</th>
            <th>Event Date</th>
            <th>Event Time</th>
            <th>Event Descriptions</th>
            <th>Delete Event</th>
            <th>Update Event</th>
        </tr>
    </thead>
    <tbody>
    ${pData.map(event => {
        return `
        <tr>
            <td>${event.id}</td>
            <td>${event.clubName}</td>
            <td>${event.name}</td>
            <td>${event.date.slice(0,10)}</td>
            <td>${event.time}</td>
            <td>${event.descriptions}</td>
            <td><a class="deleteEvent" onclick="deleteEvent(${event.id})" >Delete </a></td>
            <td><a class="updateEvent" onclick="updateEvent(${event.id})" >Update </a></td>
        </tr> `        
    }).join('')}     
    </tbody>
    </table>
    `
}

window.updateEvent = async function (pEventId){
    const tableContainer = document.getElementById('tableContainer');
    const response2 = await fetch(`http://localhost:3000/api/event/${pEventId}`)
    const data = await response2.json()
    tableContainer.innerHTML = await updatedEvent(data);
}
