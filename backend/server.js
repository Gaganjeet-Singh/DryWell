const express = require('express');
const mongoose = require('mongoose');
const {booking}
require("dotenv").config();
const app = express();

const dburl = process.env.MONGO_URL;

mongoose.connect(dburl)
.then(() => {
    console.log("database connected succesfully");
    app.listen(8080,() => {
        console.log("listening on 8080");
    })
})
.catch(err => console.log(err));

app.post("/booking",(req,res) => {
    try {
        let {name,phone,email,pickupAddress,pickupDate,servicetype} = req.body;
        let newBookking = 
    }

})