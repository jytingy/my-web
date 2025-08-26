import { useState } from "react";
import popupMenu from "../assets/popup.png";
import { useRestaurantList } from "../lists/restaurants";

interface Restaurant {
  name: string;
  price: string;
  rating: string;
  review: string;
}

export default function RestaurantMenu() {
  const [newRestaurant, setNewRestaurant] = useState<Restaurant>({
    name: "",
    price: "0",
    rating: "",
    review: "",
  });

  const { createRestaurant } = useRestaurantList();

  const handleAddRestaurant = async () => {
    const { success, message } = await createRestaurant(newRestaurant);
    console.log("Success:", success);
    console.log("Message:", message);
  };

  return(
    <button className="button-wrapper" onClick={handleAddRestaurant}/>
  );
}