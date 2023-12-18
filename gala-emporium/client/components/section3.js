import service from "../service/service.js";
import tableComponent from "./tableComponent.js";

export default async function section3() {
  const data = await service.eventListByClub("club3");
  return `
    <div id="section-3-content">
     <div id="section-3-info">
        <div id="carousel">
          ${data
            .map((carousel) => {
              return `<div class="carousel-slide" id="slide${carousel.name}">
            <div class="section-3-event" style="background-image:url('${carousel.imgUrl}');">
            <div class="section-3-event-summarize">
            <h4>Event : <b>${carousel.name}</b></h4>
            <p>Date :  ${carousel.date.slice(0,10)}</p>
            <p>Time :  ${carousel.time}</p>
            <p>Seats :  ${carousel.seats} </p>
          </div>
          <div>
          <button onclick="clickImage(${carousel.id})" class="section-3-carousel-button">Read More </button>
        </div>

            </div>
            
            </div>
            
            <div class="popup" id="imagePopup${carousel.id}">
            <div class="popup-content">
              <span class="popup-close" onclick="closePopup(${carousel.id})"><i class="fa-solid fa-circle-xmark fa-2x"></i></span>
              <img class="popup-image" id="popup-image${carousel.id}" src ="${carousel.imgUrl}"  alt="Popup Image">
              <div class="popup-info">
              h4>Event : ${carousel.name}</b></h4>
          <p>Club :  ${carousel.clubName}</p>
          <p>Date : ${carousel.date.slice(0,10)}</p>
          <p>Time : ${carousel.time}</p>
          <p>Seats : ${carousel.seats}</p>
            </div>
            <p>${carousel.descriptions}</p>
            </div>
          </div>    
            
            
            `;
            })
            .join("")}
          <button class="prev" onclick="prevSlide()">❮</button>
          <button class="next" onclick="nextSlide()">❯</button>
        </div>        
      </div>

      <div id="section-3-calender">
       <table id="club-3-eventList">
            ${await tableComponent(data.slice(0,6))}
       </table>
      </div>
    </div>
  `;
}

let currentSlide = 1;

function showSlide(PboxNumber) {
  const slides = document.getElementsByClassName("carousel-slide");
  if (PboxNumber > slides.length) {
    currentSlide = 1;
  } else if (PboxNumber < 1) {
    currentSlide = slides.length;
  } else {
    currentSlide = PboxNumber;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  if (slides.length > 0) {
    slides[currentSlide - 1].style.display = "block";
  }
}

function nextSlide() {
  showSlide(currentSlide + 1);
}
window.nextSlide = nextSlide;
function prevSlide() {
  showSlide(currentSlide - 1);
}
window.prevSlide = prevSlide;

// Otomatik geçiş için zamanlayıcı
setInterval(nextSlide, 3000);

// Sayfa yüklendiğinde ilk slaytı göster
showSlide(currentSlide);

window.clickImage = function (index) {
  let imagePath = $(`.event:nth-child(${index + 1}) img`).attr("src");
  $(`#popup-image${index}`).attr("src", imagePath);
  $(`#imagePopup${index}`).fadeIn();
};

// closePopup fonksiyonu
window.closePopup = function (index) {
  $(`#imagePopup${index}`).fadeOut();
};
