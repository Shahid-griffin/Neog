const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());

const cars = [
  { id: 1, make: "Toyota", model: "Camry", year: 2022 },
  { id: 2, make: "Honda", model: "Civic", year: 2021 },
  { id: 3, make: "Ford", model: "Mustang", year: 2020 },
  { id: 4, make: "Chevrolet", model: "Malibu", year: 2019 },
  { id: 5, make: "BMW", model: "3 Series", year: 2022 },
  { id: 6, make: "Mercedes-Benz", model: "C-Class", year: 2021 },
  { id: 7, make: "Audi", model: "A4", year: 2020 },
  { id: 8, make: "Tesla", model: "Model S", year: 2023 },
  { id: 9, make: "Hyundai", model: "Elantra", year: 2021 },
  { id: 10, make: "Kia", model: "Optima", year: 2020 },
  { id: 11, make: "Nissan", model: "Altima", year: 2022 },
  { id: 12, make: "Volkswagen", model: "Passat", year: 2021 },
  { id: 13, make: "Subaru", model: "Impreza", year: 2019 },
  { id: 14, make: "Mazda", model: "Mazda3", year: 2022 },
  { id: 15, make: "Jeep", model: "Wrangler", year: 2023 },
];

app.get("/", (req, res) => {
  res.send("This is home");
});

app.get("/cars", (req, res) => {
  res.send(cars);
});

app.delete("/cars/:id", (req, res) => {
  const carId = req.params.id;
  const index = cars.findIndex((car) => car.id == carId);

  if (index === -1) {
    res.status(404).json({ error: "Car Not Found" });
  } else {
    cars.splice(index, 1);
    res.status(200).json({ message: "car deleted seuccesfully" });
  }
});

const PORT = process.env.PORT;

// app.listen(PORT, () => {
//   console.log(`server running on port ${PORT}`);
// });
