const express = require("express");

const router = express.Router();

router.get("/how_it_works",(req,res,next)=>{
    console.log('How_it_works middleware');
    res.send("<h1> How it works page</h1>");

})

module.exports = router;