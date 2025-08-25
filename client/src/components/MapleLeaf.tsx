import { useState } from "react";

import mapleLeaf from "../assets/maple.png";
import woodPanel from "../assets/wood-panel.png";
import xButton from "../assets/x-button.png";

export default function MapleLeaf() {

  const[showWoodPanel, setShowWoodPanel] = useState(false);

  const leafClick = () => {setShowWoodPanel(prev => !prev);

  };

  return (
    <>
      <button className="button-wrapper" draggable="false" onClick={leafClick}>
        <img src={mapleLeaf} alt="Maple Leaf" className="leaf" draggable="false" />
      </button>

      {showWoodPanel &&
        <div className="wood-panel-container">
          <img src={woodPanel} alt="Wood Panel" className="wood-panel" draggable="false" />
          <button className="button-wrapper" draggable="false" onClick={leafClick}>
            <img src={xButton} alt="X" className="x-button" draggable="false" />
          </button>

      </div>
      }
    </>
  );
}
  
  