const express = require('express');
const mongoose = require('mongoose');
const {Booking} = require('./models/Booking');
const{Contact} = require('./models/Contact');
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const dburl = process.env.MONGO_URL;

mongoose.connect(dburl)
.then(() => {
    console.log("database connected succesfully");
    app.listen(8080,() => {
        console.log("listening on 8080");
    })
})
.catch(err => console.log(err));

app.post("/booking", async (req, res) => {
  try {
    const { name, phone, email, pickupAddress, pickupDate, servicetype } = req.body;

    const newBooking = new Booking({
      name,
      phone,
      email,
      pickupAddress,
      pickupDate,
      servicetype
    });

    await newBooking.save();
    res.status(201).json({ message: "Your booking accepted" });

  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.post("/contact",async(req,res) => {
    try {
        const {name,email,phone,subject,message} = req.body;
        const newContact = new Contact({
            name,
            email,
            phone,
            subject,
            message
        })
        await newContact.save();
        res.status(201).json({message:"Your requested procceed succesfully"});
    }catch(e) {
        console.error(e);
        res.status(500).json({error:"Something went wrong"});
    }
})