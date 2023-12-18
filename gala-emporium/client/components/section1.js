import service from '../service/service.js'
import homePage from '../pages/home.js'
import tableComponent from './tableComponent.js'
export default async function section1(){
    const data = await service.eventListByClub("club1")
    return `
        <div id="section-1-content">
          <div id="section-1-info">           
            ${data.slice(0,2).map((event)=>{
                return `
                    <div class="column">
          <div class="card" onclick="clickImage(${event.id})">
            <div class="icon-wrapper">
                <img class="image" id="image${event.id}" src ="${event.imgUrl}"  alt="Popup Image">
            </div>
            <h3>${event.name}</h3>
            <p>Date : ${event.date.slice(0,10)}</p>
            <p>Time : ${event.time}</p>
            <p>Seats : ${event.seats}</p>
          </div>
        </div>

        <div class="popup" id="imagePopup${event.id}">
        <div class="popup-content">
          <span class="popup-close" onclick="closePopup(${event.id})"><i class="fa-solid fa-circle-xmark fa-2x"></i></span>
          <img class="popup-image" id="popup-image${event.id}" src ="${event.imgUrl}"  alt="Popup Image">
          <div class="popup-info">
          <h4>Event : ${event.name}</b></h4>
          <p>Club :  ${event.clubName}</p>
          <p>Date : ${event.date.slice(0,10)}</p>
          <p>Time : ${event.time}</p>
          <p>Seats : ${event.seats}</p>

        </div>
        <p>${event.descriptions}</p>
        </div>
      </div>    `
            })}            
            </div>


            <div id = "section-1-table">
            <table id="club-1-eventList">
           ${await tableComponent(data.slice(0,6))}
               </table>            
            </div>          
    `
}



window.clickImage = function (index) {
    let imagePath = $(`.event:nth-child(${index + 1}) img`).attr("src");
    $(`#popup-image${index}`).attr("src", imagePath);
    $(`#imagePopup${index}`).fadeIn();
  };
  
  window.closePopup = function (index) {
    $(`#imagePopup${index}`).fadeOut();
  };
  
  window.goClub1Page = async function(){
    $("main").html(await homePage())
  }