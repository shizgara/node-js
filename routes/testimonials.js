const express = require("express");

const router = express.Router();

router.get("/testimonials", (req, res, next) => {
  console.log("testimonials middleware");
  res.send(
    "<h1>Testimonials page</h1><form method='POST' action='/testimonials' ><input type='text' name='testimonials' /><button type='submit'>Send</button></form>"
  );
});

router.post("/testimonials",(req,res,next)=>{
    console.log("POST testimonials page");
    console.log("Request testimonials =>",req.body.testimonials);
    let testimonials = req.body.testimonials;
    res.send(`<h1> Your testimonials is post </br>${testimonials}</h1>`)
})

module.exports = router;
