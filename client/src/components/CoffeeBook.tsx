import cafeBook from "../assets/cafebook.gif";

interface CoffeeBookProps {} 

export default function CoffeeBook({}: CoffeeBookProps) {
  return (
    <button className="button-wrapper" draggable={false}>
      <img src={cafeBook} alt="Books and Shows" className="cafe-book" draggable={false}/>
    </button>
  );
}
