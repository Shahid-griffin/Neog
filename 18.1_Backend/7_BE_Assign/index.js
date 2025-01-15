const {initializeDatabase} = require("./db/db.connect");
const fs = require("fs");
const Cars = require("./models/cars.models")

initializeDatabase();

const jsonData = fs.readFileSync("cars.json","utf-8");
const carsData = JSON.parse(jsonData);

function seedData(){

    try{
        for(const car of carsData){
            const newCar  = new Cars({
                brand:car.brand,
                model:car.model,
                year:car.year,
                bodyStyle:car.bodyStyle,
                fuelType:car.fuelType,
                transmission:car.transmission,
                engine:car.engine,
                mileage:car.mileage,
                color:car.color,
                price:car.price,
                condition:car.condition,
                description:car.description,
                photos:car.photos,
                inMarket:car.inMarket,
            })
            newCar.save();
        }
    }
    catch (error) {
        console.log("Error seeding the data", error);

    }
}

seedData();