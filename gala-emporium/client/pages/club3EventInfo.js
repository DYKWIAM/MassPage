export const EventInfoFromDB = async function (eventID) {
  try {
    const response = await fetch(`http://localhost:3000/api/event`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const eventData = await response.json();
    const matchingEvent = eventData.find(event => event.id === eventID);

    if (matchingEvent) {
      const eventInfo = {
        name: matchingEvent.name,
        date: matchingEvent.date,
        time: matchingEvent.time
      };

      return eventInfo;
    } else {
      return { error: "Event not found" };
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return { error: "Error fetching data" };
  }
};

/* Usage
const eventInfo = await EventInfoFromDB(9);

if (eventInfo.error) {
  console.log(eventInfo.error);
} else {
  console.log(eventInfo.name);
  console.log(eventInfo.date);
  console.log(eventInfo.time);
}
*/
