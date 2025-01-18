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

async function addNewRes(newRestaurant) {
  try {
    const newData = new Restaurant(newRestaurant);
    const saveData = await newData.save();
    console.log(newData);
  } catch (error) {
    throw error;
  }
}

// addNewRes(newRestaurant)
// addNewRes(newRestaurant1);

//function to print al the resaiten

async function printAllRestaurant() {
  try{
  const  allRes  = await Restaurant.find()
  console.log(allRes);
}
  catch(error){
    throw error;
  }
}


//find by the name 

async function findByName(resName){
  try{
    const res = await Restaurant.findOne({name:resName});
    console.log(res);
  }
  catch(error){
    throw error;
  }
}

// findByName("Yo China");

//5. Create a function to read all restaurants which offers reservations. Console the restaurant details.

const resWithReservation=async()=>{
  try{
    const res = await Restaurant.find({reservationsNeeded:true});
    console.log(res)
  }catch(error){
    throw error
  }
}

// resWithReservation()

// 6. Create a function to read all restaurants which offers delivery. Console the restaurant details.

const resWithOfferDelivery=async()=>{
  try{
    const res = await Restaurant.find({isDeliveryAvailable:true});
    console.log(res)
  }catch(error){
    throw error
  }
}

// resWithOfferDelivery()

// . Create a function to read a restaurant by phone number (+1288997392). Console the restaurant details.

const readResByNumber = async(number)=>{
  try{
    const res = await Restaurant.findOne({phoneNumber:number})
    console.log(res);
  }catch(error){
    throw error;
  }
}

// readResByNumber("+1288997392");

// Create a function to read all restaurants by cuisine ("Italian"). Console all the restaurants with Italian cuisine.

const readRestByItalian = async ()=>{
  try{
    const Data = await Restaurant.find({cuisine:"Italian"})
    console.log(Data)
  }
  catch(error){
    throw error;
  }
}
readRestByItalian();