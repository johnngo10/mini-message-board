const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/", function (req, res) {
  res.render("index", { messages: messages });
});

router.get("/new", function (req, res) {
  res.render("form");
});

router.post("/new", function (req, res) {
  const { author, message } = req.body;
  const messageObject = {
    text: message,
    user: author,
    added: new Date(),
  };
  messages.push(messageObject);
  res.redirect("/");
});

module.exports = router;
