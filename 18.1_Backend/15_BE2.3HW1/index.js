const { initializeDatabase } = require("./db/db.connect");
const Restaurant = require("./models/restaurant.model");
initializeDatabase();

const newRestaurant = {
  name: "Somi",
  cuisine: ["Greek"],
  location: "11 Main Road, Gem",
  rating: 4.3,
  reviews: [],
  website: "https://somi-example.com",
  phoneNumber: "+1234997390",
  openHours: "Tue-Sun: 11:00 AM - 10:00 PM",
  priceRange: "$$ (11-30)",
  reservationsNeeded: false,
  isDeliveryAvailable: true,
  menuUrl: "https://somi-example.com/menu",
  photos: [
    "https://example.com/somi-photo1.jpg",
    "https://example.com/somi-photo2.jpg",
  ],
};

const newRestaurant1 = {
  name: "Yo China",
  cuisine: ["Chinese", "Italian"],
  location: "MG Road, Bangalore",
  rating: 3.9,
  reviews: [],
  website: "https://yo-example.com",
  phoneNumber: "+1288997392",
  openHours: "Tue-Sun: 10:00 AM - 11:00 PM",
  priceRange: "$$$ (31-60)",
  reservationsNeeded: true,
  isDeliveryAvailable: false,
  menuUrl: "https://yo-example.com/menu",
  photos: [
    "https://example.com/yo-photo1.jpg",
    "https://example.com/yo-photo2.jpg",
    "https://example.com/yo-photo3.jpg",
  ],
};


// 678aa283ef193ad1c36052ee
// 1. Create a function that accepts a restaurant ID and an object with updated data, and updates the restaurant with the provided ID. 
// Take the _id of the restaurant which has the name Yo China and update its rating from 3.9 to 4.1.
//  Console the updated restaurant.

async function updateRestaurant(resId,dataToUpdate){
  try {
    const data  = await Restaurant.findByIdAndUpdate(resId,dataToUpdate,{new:true});
    console.log(data);
  }catch(error){
    throw error;
  }
}

// updateRestaurant("678aa283ef193ad1c36052ee",{rating : 4.1});

// 2. Create a function that accepts a restaurant name and an object with updated data, and updates the restaurant.
// Take the restaurant which has the name "Somi" and update its name from "Somi" to "Som Sarovar".
// Console the updated restaurant.

async function updateResName (resName, dataToUpdate){
  try{
    const data = await Restaurant.findOneAndUpdate({name:resName}, dataToUpdate,{new:true});
    console.log(data);
  }catch(error){
    throw error;
  }
}

// updateResName("Somi",{name :"Somi Sarovar"})

// 3. Create a function that accepts a restaurant's phone number and an object with updated data, and updates the restaurant.
//  Take the restaurant which has the phone number "+1288997392" and update isDeliveryAvailable option to true.
//  Console the updated restaurant.

async function updateResNo (resNo, dataToUpdate){
  try{
    const data = await Restaurant.findOneAndUpdate({phoneNumber:resNo}, dataToUpdate,{new:true});
    console.log(data);
  }catch(error){
    throw error;
  }
}
updateResNo("+1288997392",{isDeliveryAvailable:true})