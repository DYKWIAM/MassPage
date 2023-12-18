export default async function addEventHtml() {
  return ` <div id = "eventForm">
        <form id="addEventForm" onsubmit = "addEvent(); return false">
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
            <div class="formFields">
                <label for="club">Club:</label>
                    <select id="club" name="clubName" required>
                        <option value="club1">Club 1</option>
                        <option value="club2">Club 2</option>
                        <option value="club3">Club 3</option>
                        <option value="club4">Club 4</option>
                    </select>
            </div>
                    <button value="add event" id="addEventButton" type="submit">Add Event</Button>
        </form>
</div>    `;
}

async function addEvent ()  {  
  console.log("add event");
  const newEvent = {
    name: $("[name=name]").val(),
    date: $("[name=date]").val(),
    time: $("[name=time]").val(),
    seats: $("[name=seats]").val(),
    imgUrl: $("[name=imgUrl]").val(),
    descriptions: $("[name=descriptions]").val(),
    clubName: $("[name=clubName]").val(),
  };
  console.log(newEvent);

  if (newEvent.name.trim().length > 0) {
    const response = fetch("http://localhost:3000/api/event", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: newEvent.name,
        date: newEvent.date,
        time: newEvent.time,
        seats: newEvent.seats,
        imgUrl: newEvent.imgUrl,
        descriptions: newEvent.descriptions,
        clubName: newEvent.clubName,
      }),
    });
  } else {
    alert("Error!");
  }
};
window.addEvent = addEvent