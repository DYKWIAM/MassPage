export default async function event(pClubName) {
  const response = await fetch("http://localhost:3000/api/event")
  const data = await response.json()
  const eventList = data.filter((events) =>events.clubName == pClubName) 
  let html = "";
  for (let index = 0; index < eventList.length; index++) {
    let cards = `
      <div class="event">
        <img src="https://cdn.pixabay.com/photo/2020/02/28/10/56/abstract-4887145_1280.jpg" alt="Avatar" style="width:100%">
        <div class="container">
          <div>
            <h4>Event : <b>${eventList[index].name}</b></h4>
            <p>Club :  ${eventList[index].clubName}</p>
            <p>Date :  ${eventList[index].date}</p>
          </div>
          <div>
            <button onclick="clickImage(${index})" class="card_button">Read More </button>
          </div>
        </div>
      </div>


      <div class="popup" id="imagePopup${index}">
        <div class="popup-content">
          <span class="popup-close" onclick="closePopup(${index})"><i class="fa-solid fa-circle-xmark fa-2x"></i></span>
          <img class="popup-image" id="popup-image${index}" src ="https://cdn.pixabay.com/photo/2020/02/28/10/56/abstract-4887145_1280.jpg"  alt="Popup Image">
          <div class="popup-info">
          <h4>Event : ${eventList[index].name}</b></h4>
          <p>Club :  ${eventList[index].clubName}</p>
          <p>Date : ${eventList[index].date}</p>
        </div>
        <p>${eventList[index].descriptions}</p>
        <button class="popup-button"> Rezervation </button>
        </div>
      </div>
    `;
    html += cards;
  }
  return html;
}

window.clickImage = function (index) {
  let imagePath = $(`.event:nth-child(${index + 1}) img`).attr("src");
  $(`#popup-image${index}`).attr("src", imagePath);
  $(`#imagePopup${index}`).fadeIn();
};

window.closePopup = function (index) {
  $(`#imagePopup${index}`).fadeOut();
};

