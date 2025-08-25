import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js"; 
import Restaurant from "./models/restaurants.js";

dotenv.config();

const app = express();

// middleware - function that runs before sending response back to client
app.use(express.json()); // allows us to accept JSON data in req.body

app.get("/api/restaurants", async (req, res) => {
  try {
    const restaurants = await Restaurant.find({});
    res.status(200).json({success:true, data: restaurants});
  } catch(error){
    console.log("Error in fetching restaurants:", error.message);
    res.status(500).json({success: false, message: "Server Error"});
  }
});


// our post function
app.post("/api/restaurants", async (req, res) => {
  const restaurant = req.body; // user will send this data
  if(!restaurant.name || !restaurant.price || !restaurant.rating || !restaurant.review){
    return res.status(400).json({success:false, message: "Please provide all fields"})
  }

  const newRestaurant = new Restaurant(restaurant)

  try {
    await newRestaurant.save();
    res.status(201).json({success:true, data: newRestaurant});
  } catch(error){
    console.error("Error in creating restaurant:", error.message);
    res.status(500).json({success:false, message: "Server Error"});
  }
});

// delete function
app.delete("/api/restaurants/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Restaurant.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: "Restaurant not found" });
    }
    res.status(200).json({ success: true, message: "Restaurant Deleted" });
  } catch (error) {
    console.log("error in deleting product:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.listen(5000, () => {
  connectDB();
  console.log('Server started at port 5000.')
})

