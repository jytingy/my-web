import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CatVolumeButton from "./components/CatVolumeButton";
import PopupMenu from "./components/PopupMenu";
import CoffeeBook from "./components/CoffeeBook";
import FoodMenu from "./components/FoodMenu";
import Pancake from "./components/Pancake";
import PixelChar from "./components/PixelChar";
import MapleLeaf from "./components/MapleLeaf";

import table from "./assets/table.png";
import titleFrame from "./assets/title-box.png";

import "./App.css";
import Home from "../Pages/Home.tsx";

function App() {
  const [showPopupMenu, setShowPopupMenu] = useState(false);

  // Pixel character button toggle
  const handleCharClick = () => setShowPopupMenu(prev => !prev);

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
      <FoodMenu />

      {/* Books + shows buttons */}
      <CoffeeBook />
 
      {/* Socials buttons */}
      <Pancake />
      
      <MapleLeaf/>

      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>



    </div>
  );
}

export default App;
