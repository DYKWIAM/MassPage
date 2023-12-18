const eventListByClub = async (pClubName) => {
  const response = await fetch("http://localhost:3000/api/event");
  const data = await response.json();
  let result = data.filter((event) => event.clubName == pClubName);
  return result;
};
const getAllEvent = async () => {
  const response = await fetch("http://localhost:3000/api/event");
  const data = await response.json();
  return data
};
const getUser = async() => {
  const response = await fetch("http://localhost:3000/api/login")
  const data = await response.json();
  console.log(data)
  return data
}
export default { eventListByClub, getAllEvent,getUser };
