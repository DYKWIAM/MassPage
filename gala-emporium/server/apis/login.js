export default async function (server, db) {
  server.get("/api/login", async (req, res) => {
    const users = await db.query(
      `SELECT * FROM user WHERE username = "${req.session.user?.username}" AND password = "${req.session.user?.password}"`);
    if (users[0]) {
      res.json({ loggedIn: true });
    } else {
      res.status(401);
      res.json({ loggedIn: false });
    }
  });

  server.post("/api/login", async (req, res) => {
    console.log(req.body);
    // perform login
    const users = await db.query(
      `SELECT * FROM user WHERE username="${req.body.username}" AND password="${req.body.password}"`
    );
    
    console.log(users);
    if (users[0]) {
      req.session.user = users[0];
      res.json({ loggedIn: true });
    } else {
      res.status(401);
      res.json({ loggedIn: false });
    }
  });

  server.delete("/api/login", (req, res) => {
    // perform logout
    req.session.destroy();
    res.json({ loggedIn: false });
  });
}

