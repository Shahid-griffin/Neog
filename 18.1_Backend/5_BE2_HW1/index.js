const { initializeDatabase } = require("./db/db.connect");
const fs = require("fs");
const Profile = require("./models/profile.model");

initializeDatabase();

const jsonData = fs.readFileSync("profile.json", "utf-8");
const profileData = JSON.parse(jsonData);

function seedData() {
  try {
    for (const profile of profileData) {
      const newProfile = new Profile({
        fullName: profile.fullName,
        username: profile.username,
        bio: profile.bio,
        profilePicUrl: profile.profilePicUrl,
        followingCount: profile.followingCount,
        followerCount: profile.followerCount,
        companyName: profile.companyName,
        location: profile.location,
        portfolioUrl: profile.portfolioUrl,
      });
      newProfile.save();
    }
  } catch (error) {
    console.log("Error seeding data ", error);
  }
}

seedData();
