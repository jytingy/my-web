import foodMenu from "../assets/foodmenu.png";


interface FoodMenuProps {
  onClick: () => void; 
}

export default function FoodMenu({onClick}: FoodMenuProps) {
  return (
    <button className="button-wrapper" draggable={false} onClick={onClick}>
      <img src={foodMenu} alt="Food Menu" className="food-menu" draggable={false}/>
    </button>
  );
}
