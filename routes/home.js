/*Ініціалізація express */
const express = require("express");

/*Створення роутера */
const router = express.Router();

/*Логіка,яка виконується на даній сторінці при запиті методом get */
router.get("/", (req, res, next) => {
  console.log("home middleware");
  res.send("<h1>Home page</h1>");
});

/*Підключення роутера до app.js */
module.exports = router;