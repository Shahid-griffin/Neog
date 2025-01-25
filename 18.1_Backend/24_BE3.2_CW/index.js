const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());

const cars = [{ id: 1, make: "Toyota", model: "Camry", year: 2022 }];

app.get("/", (req, res) => {
  res.send("This is home");
});
app.post("/cars", (req, res) => {
  const newCar = req.body;
  if (!newCar.make || !newCar.model || !newCar.year) {
    res.status(400).json({ error: "Make,model and year is required " });
  } else {
    cars.push(newCar);
    res.status(201).json({ message: "Car added Successfully", car: newCar });
  }
});

app.get("/cars", (req, res) => {
  res.send(cars);
});
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
