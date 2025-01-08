const mongoose = require("mongoose")
// maka a mongoose model for a car which has the properties model string year num and make string
const carSchema = new mongoose.Schema({
    model :String,
    releaseYear: Number,
    make:String,
});

const Car = mongoose.model("Car",carSchema);

module.exports=Car;