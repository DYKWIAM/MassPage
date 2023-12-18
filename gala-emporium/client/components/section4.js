import service from "../service/service.js";
import tableComponent from "./tableComponent.js";
export default async function section4(){
    const data = await service.eventListByClub("club4");
    return `

        <div id="section-4-content">
        <div id="section-4-calender">
        <table id="club-4-eventList">
        ${await tableComponent(data.slice(0,6))}
        </table>
       </div>


        <div id="section-4-event">
            ${data.slice(0,2).map(event=>{
                return `
                <div class="event-4-container" onclick="clickImage(${event.id})">
                <div class="section-4-img-container">
                    <img class="section-4-image" src ="${event.imgUrl}"  alt="Popup Image">
                </div>
                <div class="section-4-event-summarize">
                    <h4>Event : <b>${event.name}</b></h4>
                    <p>Date :  ${event.date.slice(0,10)}</p>
                    <p>Time : ${event.time}</p>
                    <p>Seats :  ${event.seats} </p>
              </div> 
        </div>   
        
        <div class="popup" id="imagePopup${event.id}">
        <div class="popup-content">
          <span class="popup-close" onclick="closePopup(${event.id})"><i class="fa-solid fa-circle-xmark fa-2x"></i></span>
          <img class="popup-image" id="popup-image${event.id}" src ="${event.imgUrl}"  alt="Popup Image">
          <div class="popup-info">
          h4>Event : ${event.name}</b></h4>
          <p>Club :  ${event.clubName}</p>
          <p>Date : ${event.date.slice(0,10)}</p>
          <p>Time : ${event.time}</p>
          <p>Seats : ${event.seats}</p>
        </div>
        <p>${event.descriptions}</p>
        </div>
      </div>  
        
        `
    }).join("")}
      </div>

      
    
    `
}

window.clickImage = function (index) {
  let imagePath = $(`.event:nth-child(${index + 1}) img`).attr("src");
  $(`#popup-image${index}`).attr("src", imagePath);
  $(`#imagePopup${index}`).fadeIn();
};

// closePopup fonksiyonu
window.closePopup = function (index) {
  $(`#imagePopup${index}`).fadeOut();
};
