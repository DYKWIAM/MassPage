import reservation from './reservation.js'
export default async function tableComponent(pData){
    return `
    <thead>
    <tr>
        <th>Event</th>
        <th>Date</th>
        <th>Time</th>
        <th>Seats</th>
    </tr>
</thead>
<tbody>
   ${pData
     .map((event) => {
       return `
    <tr>
        <td>${event.name}</td>
        <td>${event.date.slice(0,10)}</td>
        <td>${event.time}</td>
        <td>${event.seats}</td>
    </tr> `;
     })
     .join("")}
   </tbody>
   ${await reservation('club1')}
    `
}