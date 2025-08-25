import foodMenu from "../assets/foodmenu.png";

interface FoodMenuProps {}

export default function FoodMenu({}: FoodMenuProps) {
  return (
    <button className="button-wrapper" draggable={false}>
      <img src={foodMenu} alt="Food Menu" className="food-menu" draggable={false}/>
    </button>
  );
}
