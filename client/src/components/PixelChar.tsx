import pixelChar from "../assets/autumn-char.png";

interface PixelCharProps {
  onClick: () => void; 
}

export default function PixelChar({ onClick }: PixelCharProps) {
  return (
    <button className="button-wrapper" onClick={onClick} draggable={false}>
      <img src={pixelChar} alt="Pixel Character" className="pixel-char"draggable={false} />
    </button>
  );
}
