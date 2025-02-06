require("./db/db.connect")
const User = require("./models/user.model");
const Post = require("./models/post.model")

const user = {
  name: "John",
  email: "john@gamil.com",
};

async function addData(user) {
  try { 
    const userData = new User(user);
    const saveData = await userData.save();
    console.log("save movie is", saveData);
  } catch (error) {
    throw error;
  }
}

// addData(user);

// creae a post data

const postData = {
  title:"Greeting", 
  content:"Have a good day",
  author:"67a3a1d31397f1b6999977c5"}

const addPost = async()=>{
  try{
    const newPost  =  new Post (postData);
    await newPost.save();
    console.log("Post added succeffully")
  }catch(error){
    console.log("Error ",error);
  }
}
//here insteadod added post all detial i  just gave the id of thatdata
// addPost();

//how to get all the dta to gee the post 

const getAllPost = async () => {
  try{
    const allPost  = await Post.find().populate("author");
    console.log("All POst ",allPost)
  }catch(error){
    console.log("error",error);
  }
}

getAllPost();

//.populate("author");
 // to get the data from the referance