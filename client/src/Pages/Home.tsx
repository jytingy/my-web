import { useState } from "react";
import CatVolumeButton from "../components/CatVolumeButton";
import PopupMenu from "../components/PopupMenu";
import CoffeeBook from "../components/CoffeeBook";
import FoodMenu from "../components/FoodMenu";
import Pancake from "../components/Pancake";
import PixelChar from "../components/PixelChar";
import RestaurantMenu from "../components/RestaurantMenu";

import table from "../assets/table.png";
import titleFrame from "../assets/title-box.png";

import "../App.css";

export default function Home() {
  const [showPopupMenu, setShowPopupMenu] = useState(false);
  const [showRestaurantMenu, setShowRestaurantMenu] = useState(false);


  // Pixel character button toggle
  const handleCharClick = () => setShowPopupMenu(prev => !prev);
  const handleFoodClick = () => setShowRestaurantMenu(prev => !prev);

  return (
    <div className="autumn-gif">

      {/* Background table */}
      <img src={table} alt="Wooden Table" className="table" draggable={false} />

      {/* Title */}
      <div className="title">
        <img src={titleFrame} height={200} draggable={false} />
        <span className="title-text-overlay">JESSICA'S HUB</span>
      </div>

      {/* Cat button */}
      <CatVolumeButton />

      {/* Pixel character button */}
      <PixelChar onClick={handleCharClick} />

      {/* Pixel char popup menu */}
      {showPopupMenu && <PopupMenu/>}

      {/* Cafe + restaurants buttons */}
      <FoodMenu onClick={handleFoodClick}/>
      {showRestaurantMenu && <RestaurantMenu/>}


      {/* Books + shows buttons */}
      <CoffeeBook />
 
      {/* Socials buttons */}
      <Pancake />
      
    </div>
  );
}

