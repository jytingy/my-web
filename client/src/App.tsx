import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home.tsx";
import RestaurantMenu from "./Pages/Home.tsx";

function App() {

  return (
  
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/restaurants" element={<RestaurantMenu/>}/>
    </Routes>



  );
}

export default App;
