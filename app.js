/*Ініціалізації фреймворка express i плагіна body-parser(розпарсує дані з метода .post())  */
const express = require("express");
const bodyParser = require("body-parser");
/*Ініціалізація порта і обєкта(сервера00) */
const PORT = 8000;
const app = express();
/*Ініціалізація маршрутів(routes) */
const homeRoute = require("./routes/home");
const contactRoute = require("./routes/contact");
const howItworks = require("./routes/how_It_works");
const testimonials = require("./routes/testimonials");


// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(homeRoute);
app.use(contactRoute);
app.use(howItworks);
app.use(testimonials);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));