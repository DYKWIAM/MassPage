import reservation from "../components/reservation.js"
export default async function club2(){
  return `

  
  <div class="club-info">
    <h2>Your Artistic Haven: Welcome to Art Club</h2>
  </div>

    <style>
    body {
      background-image: url('images/Club2background.webp');
      background-size: cover;
    }
    </style>
    
    
  <div class="video-container">
  <iframe class="video" width="700" height="300" src="https://www.youtube.com/embed/BTQlleLNrVA?si=u_VkwyZMWMoqydyM" title="YouTube Artgallery" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <div class="video-text">
      <p>- Hello and welcome to our Art Club! Discover various art forms and join our creative community! Explore the world of art through our diverse range of activities. Join our club for exclusive access to art events, networking opportunities, and a supportive creative environment. Don't miss our upcoming events! Check out our schedule for exciting exhibitions, workshops, and live demonstrations.</p>
    </div>
        
  </div>
 
  
  <div class="container">
    <div class="event1">
      <h5>Event: Abstract Art</h5>
      <p class="event1-p">Experience the world of abstract art with our exclusive showcase.</p>
      <div class="event-details">
        <img class="abstract" src="images/abstractart.jpg" alt="Image">
        <p>Location: Art Gallery</p>
        <p>Friday 15th December</p>
        <div class="reservation-button" onclick="openFormPopup()">
        Reservation
      </div>
      </div>
    </div>

    <div class="event2">
      <h5>Event: Live Art Demonstrations</h5>
      <p class="event2-p" >Witness the magic of art come to life! Join us for live art demonstrations where talented artists will showcase their skills, techniques, and creative process.</p>
      <div class="event-details">
        <img class="demonstrations" src="images/liveart.jpg" alt="Image">
        <p>Location: Main Hall</p>
        <p>Saturday 16th December</p>
        <div class="reservation-button" onclick="openFormPopup()">
        Reservation
      </div>      
    </div>
  </div>
 
  
    <div class="event3">
    <h5>Event: Photography</h5>
    <p class="event3-p">Explore the captivating world of photography. Our exhibition features stunning visual stories captured by talented photographers.</p>
    <div class="event-details">
        <img class="photography" src="images/photography.jpg" alt="Image">
        <p>Location: Photography Studio</p>
        <p>Monday 18th December</p>
        <div class="reservation-button" onclick="openFormPopup()">
        Reservation
      </div>      
    </div>
    </div>
</div>

${await reservation('club2')}

  `
}
