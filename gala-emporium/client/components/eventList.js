import eventListContent from "./eventListContent.js"
import service from "../service/service.js"

export default async function (){
    const response = await fetch("http://localhost:3000/api/event")
    const data = await response.json()
    const user = await service.getUser();
    return `
    ${await eventListContent(data)}
    `  
}

window.deleteEvent = async function (pEventId){
    const response = await fetch(`http://localhost:3000/api/event/${pEventId}`,{ method: "delete" })
    const result = await response.json()
    console.log("Event  deleted - ", result);
    const tableContainer = document.getElementById('tableContainer');
    const response2 = await fetch("http://localhost:3000/api/event")
    const data = await response2.json()
    tableContainer.innerHTML = await eventListContent(data);
}


