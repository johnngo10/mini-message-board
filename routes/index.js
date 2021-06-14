const express = require("express");
const router = express.Router();

const today = new Date();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: today.toDateString(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: today.toDateString(),
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
    added: today.toDateString(),
  };
  messages.push(messageObject);
  res.redirect("/");
});

module.exports = router;
