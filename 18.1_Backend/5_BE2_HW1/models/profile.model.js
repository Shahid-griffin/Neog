const mongoose  = require("mongoose")

const profileSchema = new mongoose.Schema({
    fullName : String,
    username : String,
    bio: String,
    profilePicUrl: String,
    followingCount: Number,
    followerCount : Number ,
    companyName: String,
    location: String,
    portfolioUrl : String,
})

const Profile = mongoose.model("Profile",profileSchema);

module.exports = Profile;