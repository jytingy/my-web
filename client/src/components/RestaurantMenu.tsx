import { useState } from 'react';
import popupMenu from "../assets/popup.png";

export default function RestaurantMenu({}) {
    const [newRestaurant, setNewRestaurant] = useState({
        name: "",
        price: "",
        rating: "",
        review: ""
    });

    return( 
        <div className='popup-menu'>
            <img src={popupMenu} alt="Popup Menu" className="popup-menu" draggable={false}/>
        </div>

    );
};



