import { useState, useEffect } from "react";
import popupMenu from "../assets/popup.png";

interface Restaurant {
  _id: string;
  name: string;
  price: string;
  rating: number;
  review: string;
}

export default function RestaurantMenu() {

  const [newRestaurant, setNewRestaurant] = useState({
    name:"",
    price:"",
    image:"",
  })

  

  return (
    <>
    </>
    );
}
