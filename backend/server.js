const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const { signin } = require("./Controllers/AuthController");
const { Booking } = require("./models/Booking");
const { Contact } = require("./models/Contact");

const app = express();

/* ================== MIDDLEWARE (ORDER MATTERS) ================== */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);

/* ================== ROUTES ================== */
app.post("/signin", signin);

app.post("/booking", async (req, res) => {
  try {
    const newBooking = new Booking({
      ...req.body,
      servicetype: req.body.serviceType
    });

    await newBooking.save();
    res.status(201).json({ message: "Your booking accepted" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

app.post("/contact", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ message: "Your request processed successfully" });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

/* ================== DB ================== */
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connected successfully");
    app.listen(8080, () => {
      console.log("Server running on 8080");
    });
  })
  .catch(console.error);
