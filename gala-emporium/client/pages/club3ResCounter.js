export const countReservationsByEventID = async function (eventID) {
  const response = await fetch("http://localhost:3000/api/reservation");
  const reservationData = await response.json();
  const matchingReservations = reservationData.filter(reservation => reservation.event === eventID);
  return matchingReservations.length;
};

(async () => {
  await countReservationsByEventID();
})();
