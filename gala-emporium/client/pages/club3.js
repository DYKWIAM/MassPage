import reservation from "../components/reservation.js";
import { EventInfoFromDB as addInfo } from "../pages/club3EventInfo.js";
import { countReservationsByEventID as countID } from "../pages/club3ResCounter.js";


const updateReservationInfo = async (eventID, className) => {
  const count = await countID(eventID);
  const elements = document.getElementsByClassName(className);
  console.log(`Number of elements for ${className}: ${elements.length}`);
  for (const element of elements) {
    console.log(`${className}: ${count} / 30`);
    element.textContent = `${count} spots booked`;
  }
};

const updateEventName = async (eventID, className) => {
  const eventInfo = await addInfo(eventID)
  console.log(eventInfo.name);
  const elements = document.getElementsByClassName(className);
  for (const element of elements) {
    element.textContent = `${eventInfo.name}`;
  }
}
const updateEventDate = async (eventID, className) => {
  const eventInfo = await addInfo(eventID);
  const elements = document.getElementsByClassName(className);

  for (const element of elements) {
    const dateObject = new Date(eventInfo.date);
    const formattedDate = dateObject.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    element.textContent = formattedDate;
  }
};
const updateEventTime = async (eventID, className) => {
  const eventInfo = await addInfo(eventID)
  const elements = document.getElementsByClassName(className);
  for (const element of elements) {
    element.textContent = `${eventInfo.time}`;
  }
}




document.addEventListener("DOMContentLoaded", async () => {
  const resEvents = [
    { eventID: 8, className: "reservationCount8" },
    { eventID: 9, className: "reservationCount9" },
    { eventID: 10, className: "reservationCount10" },
  ];
  const infoEvents = [
    { eventID: 8, className: "eventName8" },
    { eventID: 9, className: "eventName9" },
    { eventID: 10, className: "eventName10" },
  ];
  const dateEvents = [
    { eventID: 8, className: "eventDate8" },
    { eventID: 9, className: "eventDate9" },
    { eventID: 10, className: "eventDate10" },
  ];
  const timeEvents = [
    { eventID: 8, className: "eventTime8" },
    { eventID: 9, className: "eventTime9" },
    { eventID: 10, className: "eventTime10" },
  ];

  for (const { eventID, className } of resEvents) {
    await updateReservationInfo(eventID, className);
  }
  for (const { eventID, className } of infoEvents) {
    await updateEventName(eventID, className);
  }
  for (const { eventID, className } of dateEvents) {
    await updateEventDate(eventID, className);
  }
  for (const { eventID, className } of timeEvents) {
    await updateEventTime(eventID, className);
  }

});



export default async function club3() {
  return `
  
    <section id="club3-page" class="flex-container">
    

      <div class="flex-item">
        <h2>The Classical Theatre Club</h2> 
        <p>
          The Classic Theatre Club allows you to relive classic scenes of
          Shakespeare, Greek tragedies of antiquity and other historical masterpieces!
        </p>
      </div>
      
     
      <div class="flex-item">
        <h2>Ongoing Events</h2>
        <div class="image-box">
        <img src="images/andreh_bild1.jpg" >
      </div>

        
        <h3>Socrates on trial</h3>
      <p>
        In this dramatic scene, taken from the Socratic dialogues written by Plato, Socrates is put on trial in Athens
        after being accused of rejecting the gods and corrupting the youth.
        In his defense, Socrates explores in depth the role of philosophy in society, emphasizing the importance of self-reflection,
        questioning and the search for truth. His reasoning challenges the legal system and norms of ancient Athens,
        and gives rise to a timeless discussion about the individual's right to question and think freely.
      </p>

        <div class="image-box">
          <img src="images/andreh_bild2.jpg" >
        </div>
          <h3>Julius Caesar</h3>  <p>In this masterpiece by William Shakespeare, Julius Caesar is portrayed as the central figure in a political drama set in ancient Rome.
          In the grand world of "Julius Caesar," Rome is plunged into a tumultuous battle for power and influence where intrigue and political maneuvers weave together and challenge the boundaries of loyalty and friendship.
          Through intricate monologues and dramatic events, "Julius Caesar" explores themes such as lust for power, moral dilemmas, and the price of political leadership.
        </p>

        <div class="image-box">
          <img src="images/andreh_bild3.jpg" >
        </div>

        <h3>Gustav III</h3><p>
        In the renowned play "Gustav III" by August Strindberg from 1902, the king of Sweden takes the center stage as power struggles and intrigues unfold during the pivotal events leading up to the swedish parliaments assembly of 1789.
        The plot begins in a bookstore where the tension between the king and the nobility starts to escalate.
        Conspiracies are hatched, and the noblemen conspire in secret meetings, in which the king himself eventually makes an unexpected entrance.
        The tension reaches its climax when the king invites both friends and enemies to a feast at Kina Castle, Drottningholm.
        A plan for a coup is in the works, but as so often happens, not everything goes according to plan.
        </p>

      </div>

      <div class="flex-item">
        <h2>Watch Our Performances</h2>
        <div class="video-box">

    <iframe width="560" height="315" src="https://www.youtube.com/embed/tsPPI_7x1dk" frameborder="0" allowfullscreen></iframe>
        </div>
        </div>
        <div class="flex-item">
  <h2>Buy tickets</h2>
  <ul class="club3Calendarium">
      <li>
    <strong class="eventTime8"></strong>
    <strong class="eventDate8"></strong>
    <strong class="eventName8"></strong>
    <div class="reservationDiv">
    <button class="reservationButton" onclick ="openFormPopup()" >Reserve seats</button>
    <p class="reservationCount8"></p>
      </li>
      <li>
    <strong class="eventTime9"></strong>
    <strong class="eventDate9"></strong>
    <strong class="eventName9"></strong>
    <div class="reservationDiv">
    <button class="reservationButton" onclick ="openFormPopup()" >Reserve seats</button>
    <p class="reservationCount9"></p>
      </li>
      <li>
    <strong class="eventTime10"></strong>
    <strong class="eventDate10"></strong>
    <strong class="eventName10"></strong>
    <div class="reservationDiv">
    <button class="reservationButton" onclick ="openFormPopup()" >Reserve seats</button>
    <p class="reservationCount10"></p>
      </li>
  </ul>
 </div>
 <section id="club3-page" class="footer">
    <div class="textlinks">
  <div>
    <h4>Contact:</h4>
    <p>Email: info@classicaltheatreclub.com</p>
    <p>Phone: (123) 456-7890</p>
    <p>Address: 123 Main Street, Cityville, State, ZIP</p>
  </div>
  <div>
    <a href="#about"style="color: white;">About Us</a>
  </div>
  <div>
    <a href="#coming-events"style="color: white;">Coming Events</a>
  </div>
  <div>
    <a href="#gallery"style="color: white;">View Gallery</a>
  </div>
</div>

       <ul>
  <li><a href="https://www.facebook.com/"><i class="fab fa-facebook" aria-hidden="true"></i></a>
  <a href="https://twitter.com/"><i class="fab fa-twitter" aria-hidden="true"></i></a>
  <a href="https://linkedin.com/"><i class="fab fa-linkedin" aria-hidden="true"></i></a>
  <a href="https://instagram.com/"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
</ul>

      </section>


 
  </section>
  ${await reservation('club3')}
  `;
}



