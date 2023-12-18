import section3 from "../components/section3.js";
import section2 from "../components/section2.js";
import section1 from "../components/section1.js";
import section4 from "../components/section4.js";
import service from "../service/service.js";
import tableComponent from "../components/tableComponent.js";

export default async function home() {
  const data = await service.getAllEvent()

  return `
    <section id="homePageContent">
      <div id="homePageBanner">
      <h3>THE BEST CLUB</h3>
      <h1>GALA EMPORIUM</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>      
      </div>
    </section>
    <section id="eventList">

    <h3 class="eventTitle">Dance Clubs Events</h3>
      <div class="eventBox">      
      ${await section1()}
      </div>
      
    <h3 class="eventTitle">Art Clubs Events</h3>
      <div class="eventBox">      
      ${await section2()}
      </div>
      
      <h3 class="eventTitle">Classical Theatre Events </h3>
      <div class="eventBox">      
      ${await section3()}
      </div>

      <h3 class="eventTitle">Violin Clubs Events</h3>
      <div class="eventBox">      
      ${await section4()}
      </div>

      <h3 class="eventTitle">All Events<h/3>
      <div id="allEventsTable">      
      <table id="eventTableHomePage"> 
      ${await tableComponent(data)}
      </table>
      </div>
    </section>     
    
    `;
}
