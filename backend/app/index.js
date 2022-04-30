const express = require("express");
const cors = require("cors");
const db = require("./db");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/signup", async (req, res) => {
  let user = req.body;
  try {
    console.log(user);
    const result = await db.pool.query(
      "insert into users (user, mail, password) values (?, ?, ?)",
      [user.user, user.mail, user.password]
    );
    res.send({ result: "ok" });
  } catch (err) {
    res.send({ result: "error" });
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
