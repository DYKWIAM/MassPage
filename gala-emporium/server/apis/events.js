export default async function (server, db) {
  server.get('/api/event', async (req, res) => {
     const products = await db.query("SELECT * FROM events")
     res.json(products)
   })
  
   server.get("/api/event/:id", async (req, res) => {
    const event = await db.query(`SELECT * FROM events WHERE id = ${req.params.id}`);
    res.json(event);
  });


 server.post("/api/event", async (req, res) => {
   console.log(req.body);
   let club_id = 0;
   if (req.body.clubName == "club1") {
     club_id = 1;
   } else if (req.body.clubName == "club2") {
     club_id = 2;
   } else if (req.body.clubName == "club3") {
     club_id = 3;
   } else if (req.body.clubName == "club4") {
     club_id = 4;
   }
   if (req.body.name.trim().length > 0) {
     const result =
       await db.query(`INSERT INTO events (name,date,time,seats,imgUrl,descriptions,clubName,club_id) VALUES  
       ('${req.body.name}','${req.body.date}','${req.body.time}','${req.body.seats}','${req.body.imgUrl}','${req.body.descriptions}','${req.body.clubName}',${club_id})`);

     result.eventAdded = true;
     res.json(result);
     console.log("Result - ", result);
   } else {
     res.status(401);
     res.json({ eventAdded: false });
   }
 });


 server.delete("/api/event/:id", async (req, res) => {
  console.log(req.body)
  const result = await db.query(
    `Delete from events where id=${req.params.id}`
  );
  if (result.affectedRows > 0) {
    res.json({ message: "Event deleted successfully" });
  } else {
    res.json({ message: "No event was deleted" });
  }
});

server.put("/api/event/:id", async (req, res) => {
  console.log(req.body)
  if (req.body.name.trim().length > 0) {
    const result = await db.query(
      `Update events set name ='${req.body.name}',date = '${req.body.date}',
           time = '${req.body.time}',seats='${req.body.seats}', 
           imgUrl =' ${req.body.imgUrl}',descriptions = '${req.body.descriptions}' 
      where id='${req.params.id}'`);
    result.reservationUpdated = true;
    res.json(result);
    console.log("Result - ", result);
  } else {
    res.status(401);
    res.json({ reservationUpdated: false });
  }
});
}