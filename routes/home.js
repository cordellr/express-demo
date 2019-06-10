const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // uses pug to render html
  res.render("index", { title: "My Express App", message: "Hello" });
});

module.exports = router;
