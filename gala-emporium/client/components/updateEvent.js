import eventList  from './eventList.js'
export default async function updateEventForm(pEvent) {
    console.log(pEvent)
    return `
        <h3>Update Event Form</h3>
        <span>Event  #${pEvent[0].id} is being updated</span>        
        <div id = "updateEventFormDiv">
        <form id="updateEventForm" onsubmit ="updateEventFunction(${pEvent[0].id}); return false">
            <h4>Add Event Form 
                <span>Please fill all the texts in the fields.</span>
            </h4>
            <div class="formFields">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
           </div>
           <div class="formFields">
                <label for="date">Date:</label>
                <input type="date" id="date" name="date" required>
            </div>
            <div class="formFields">
                <label for="time">Time:</label>
                <input type="time" id="time" name="time" required>
            </div>
            <div class="formFields">
                <label for="seats">Seats:</label>
                <input type="seats" id="seats" name="seats" required>
            </div>    
            <div class="formFields">    
                <label for="imgUrl">Image Url:</label>
                <input type="text" id="imgUrl" name="imgUrl" required>
             </div>
             <div class="formFields">   
                <label for="descriptions">Description:</label>
                <textarea id="descriptions" name="descriptions" required></textarea>
            </div>
                <button value="update event" id="updateEventButton" type="submit">Update Event</Button>
        </form>
    </div>`;
}

window.updateEventFunction = async function (pEventId){
    const response = await fetch(`http://localhost:3000/api/event/${pEventId}`);
    const result = await response.json();
    console.log(result)
    const updatedEvent = {
        name: $("#name").val(),
        date: $("#date").val(),
        time: $("#time").val(),
        seats: $("#seats").val(),
        imgUrl: $("#imgUrl").val(),
        descriptions: $("#descriptions").val(),
    };
    if (updatedEvent.name.trim().length > 0) {
      const response = await fetch(`http://localhost:3000/api/event/${pEventId}`,     {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: updatedEvent.name,
              date: updatedEvent.date,
              time: updatedEvent.time,
              seats: updatedEvent.seats,
              imgUrl: updatedEvent.imgUrl,
              descriptions: updatedEvent.descriptions,
            }),
        });
        if (response.ok) {
            alert("Update success!");           
            $('#tableContainer').html(await eventList());
        } else {
            alert("Update failed!");
        }
    } else {
        alert("Please fill in all required fields!");
    }
  } 