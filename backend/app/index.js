const express = require("express");
const cors = require("cors");
const got = require("got");
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
    await db.pool.query(
      "insert into users (user, mail, password) values (?, ?, ?)",
      [user.user, user.mail, user.password]
    );
    res.send({ result: "ok" });
  } catch (err) {
    res.send({ result: "error" });
  }
});

app.post("/feed", async (req, res) => {
  let feed = req.body;

  const API_KEY = "6b8ef191c38a4ae3b1573d19a4cfc12e";
  const API = `https://newsapi.org/v2/everything?apiKey=${API_KEY}`;

  let request =
    `${API}` +
    (feed.query ? `&q=${feed.query}` : "") +
    (feed.language ? `&language=${feed.language}` : "") +
    (feed.from ? `&from=${feed.from}` : "") +
    `&pageSize=${feed.pageSize}`;

  (async () => {
    try {
      const response = await got(request);
      res.send(response.body);
    } catch (error) {
      console.log(error.response.body);
    }
  })();
});

app.listen(port, () => console.log(`Listening on port ${port}`));
