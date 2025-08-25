import pancake from "../assets/pancake.gif";

interface PancakeProps {}

export default function Pancake({}: PancakeProps) {
  return (
    <button className="button-wrapper" draggable={false}>
      <img src={pancake} alt="Pancake" className="pancake" draggable={false}/>
    </button>
  );
}
