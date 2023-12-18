import service from "../service/service.js";
import tableComponent from "./tableComponent.js";
export default async function section2(){
    const data = await service.eventListByClub("club2");
    return `
    <div id="section-2-content">
    <div id="section-2-table">
        <table id="club-2-eventList">
        ${await tableComponent(data.slice(0,6))}
           </table>
        </div>

        <div id="section-2-info">
        ${data.slice(0,2).map((event) =>{
            return `
                <div class="section-2-event-container" style="background-image:url('${event.imgUrl}');">
                    <div class="section-2-event-summarize">
                    <h4>Event : <b>${event.name}</b></h4>
                    <p>Date :  ${event.date.slice(0,10)}</p>
                    <p>Time :  ${event.time}</p>
                    <p>Seats : ${event.seats} </p>
                    </div>
                    <button onclick="clickImage(${event.id})" class="section-2-carousel-button">Read More </button>
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
        
    </div>

    
    
    `
}