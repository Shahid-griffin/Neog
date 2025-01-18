const {initializeDatabase} = require("./db/db.connect");
const fs = require("fs");
const Cars = require("./models/cars.models")

initializeDatabase();

// 1. Write a function to create a new car data given below.

const carData = {
  brand: "Ford2",
  model: "Mustang",
  year: 2019,
  bodyStyle: "Convertible",
  fuelType: "Gasoline",
  transmission: "Automatic",
  engine: "5.0L V8",
  mileage: 25000,
  color: "Red",
  price: 3500000,
  condition: "Used",
  description: "Exciting Ford Mustang convertible with powerful V8 engine.",
  photos: [
    "https://example.com/mustang-photo1.jpg",
    "https://example.com/mustang-photo2.jpg",
    "https://example.com/mustang-photo3.jpg"
  ]
};

const carData1 = {
    brand: "Honda",
    model: "Civic",
    year: 2018,
    bodyStyle: "Coupe",
    fuelType: "Gasoline",
    transmission: "Manual",
    engine: "1.5L Turbocharged Inline-4",
    mileage: 40000,
    color: "Black",
    price: 1800000,
    condition: "Used",
    description: "Sporty Civic coupe with low mileage and manual transmission.",
    photos: [
      "https://example.com/civic-photo1.jpg",
      "https://example.com/civic-photo2.jpg",
      "https://example.com/civic-photo3.jpg"
    ]
  };

async function addNewCar(carData1){
    try{
        const newCar = new Cars(carData1);
        const saveCar = await newCar.save();
        console.log(saveCar);
    }
    catch(error){
        throw error;
    }
}

// addNewCar(carData1);

// 3. Create a function to read all cars from the database. 
// Console all the cars. Use proper function and variable names.

async function readAllCar (){
    try{
        const car = await Cars.find();
        console.log(car);
    }catch(error){
        throw error;
    }
}

// readAllCar();

// 4. Create a function to read cars by brand ("Ford"). 
// Console the car details. Use proper function and variable names.

async function readByBrand(carname){
   try{
    const car  = await Cars.find({brand : carname})
    console.log(car);
   } catch(error){
    throw error;
   }
}

// readByBrand("Ford2");            

// 5. Create a function to read cars by color ("Black").
//  Console the car details. Use proper function and variable names.

const readByColor = async(carcolor)=>{
try{
    const car  = await Cars.find({color:carcolor});
    console.log(car);
}catch(error){
    throw error
}
}

// readByColor("Black");

// 6. Create a function to update the price of a car with model "Corolla". Update the price to 2300000. 
// Console the car with updated price.

const updateCarPrice = async (model, price) => {
    try {
      const updatedCar = await Cars.findOneAndUpdate(
        { model: model },
        price,
        { new: true }
      );
      console.log("Updated Car:", updatedCar);
    } catch (error) {
      console.log("Error occurred while updating car price", error);
    }
  };

//   updateCarPrice("Corolla",{price:2300001})

// 7. Create a function to update the condition of a car with model "Model S". Update the condition to "Used"
//. Console the car with updated condition.

const updateCarCondition = async (model, updatedValue) => {
    try {
      const updatedCar = await Cars.findOneAndUpdate(
        { model: model },
        updatedValue,
        { new: true }
      );
      console.log("Updated Car:", updatedCar);
    } catch (error) {
      console.log("Error occurred while updating car price", error);
    }
  };

//   updateCarCondition("Model S",{condition: "Used"})

// 8. Create a function to delete a car by ID. Take the id of the car brand Tesla from the database and delete that car record
// . Console the deleted car data.

async function deleteCar(carId){
    try{
        const car  = await Cars.findByIdAndDelete(carId);
        console.log(car);
    }catch(error){
        throw error
    }
}
// deleteCar("678bc7203596b198f21a7799")


// 9. Create a function to delete a car by its body style. Delete the 
//car data with body style "Coupe" from the database console the deleted car data.

async function deleteCarByStyle(carStyle){
    try{
        const car  = await Cars.findOneAndDelete({bodyStyle: carStyle});
        console.log(car);
    }catch(error){
        throw error
    }
}

deleteCarByStyle("Coupe")