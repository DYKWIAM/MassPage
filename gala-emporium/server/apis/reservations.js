export default async function (server, db) {
  server.get("/api/reservation", async (req, res) => {
    const reservations = await db.query("SELECT * FROM reservations");
    res.json(reservations);
  });
  server.get("/api/reservation/:id", async (req, res) => {
    console.log(req.body)
    const reservation = await db.query(`SELECT * FROM reservations WHERE id = ${req.params.id}`);
    res.json(reservation);
    console.log(res)
    console.log(req.body)
  });


  server.post("/api/reservation", async (req, res) => {
    if (req.body.firstname.trim().length > 0) {
      const result =
        await db.query(`INSERT INTO reservations (firstname,lastname,phone,email,event) VALUES  
         ('${req.body.firstname}','${req.body.lastname}','${req.body.phone}','${req.body.email}',${req.body.event})`);

      result.reservationAdded = true;
      res.json(result);
      console.log("Result - ", result);
    } else {
      res.status(401);
      res.json({ eventAdded: false });
    }
  });

  server.put("/api/reservation/:id", async (req, res) => {
    console.log(req.body)
    if (req.body.firstname.trim().length > 0) {
      const result = await db.query(
        `Update reservations set firstname ='${req.body.firstname}',lastname = '${req.body.lastname}',
             phone = '${req.body.phone}',email='${req.body.email}' where id='${req.params.id}'`);
      result.reservationUpdated = true;
      res.json(result);
      console.log("Result - ", result);
    } else {
      res.status(401);
      res.json({ reservationUpdated: false });
    }
  });

  server.delete("/api/reservation/:id", async (req, res) => {
    const result = await db.query(
      `Delete from reservations where id=${req.params.id}`
    );
    if (result.affectedRows > 0) {
      res.json({ message: "Reservation deleted successfully" });
    } else {
      res.json({ message: "No reservation was deleted" });
    }
  });
}
