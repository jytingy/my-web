import { useState, useRef} from 'react';
import sleepyCat from "../assets/winter-cat.gif";
import catSpeech from "../assets/meowsic.gif";
import meowSound from "../assets/meow.mp3";
import backgroundMusic from "../assets/beneath_the_mask.mp3";
import birdSounds from "../assets/birds.mp3";
import leafSounds from "../assets/leaves.mp3";
import volumeButton from "../assets/volume.png";



export default function CatVolumeButton() {

  const meowAudio = useRef(new Audio(meowSound));
  const backgroundAudioRef = useRef(new Audio(backgroundMusic));
  const birdAudio = useRef(new Audio(birdSounds));
  const leafAudio = useRef(new Audio(leafSounds));
  const [showCatSpeech, setShowCatSpeech] = useState(true);

  birdAudio.current.loop = true;
  leafAudio.current.loop = true;

  leafAudio.current.volume = 0.1;
  birdAudio.current.volume = 0.5
  birdAudio.current.play();
  leafAudio.current.play();

  const catClick = () => {
    const backgroundAudio = backgroundAudioRef.current;
    backgroundAudio.loop = true;

    backgroundAudio.volume = 0.2;

    meowAudio.current.play();

    if (backgroundAudio.paused) backgroundAudio.play();
    else backgroundAudio.pause();

    setShowCatSpeech(true);
  };

  const catSpeechClick = () => setShowCatSpeech(false);

  const handleVolumeClick = () => {
    [backgroundAudioRef, birdAudio, leafAudio, meowAudio].forEach(ref => {
      if (ref.current) ref.current.muted = !ref.current.muted;
    });
  };


  return (
    <div>
      <button className="button-wrapper" onClick={catClick} draggable="false">
        <img src={sleepyCat} alt="Sleepy Cat" className="sleepy-cat" draggable="false" />
      </button>

    {showCatSpeech &&
      <button className="button-wrapper" onClick={catSpeechClick} draggable="false">
        <img src={catSpeech} alt="Cat Speech" className="cat-speech" draggable="false" />
      </button> }

      <button className="button-wrapper" onClick={handleVolumeClick} draggable="false">
        <img src={volumeButton} alt="Volume" className="volume" draggable="false" />
      </button>
      
    </div>
    
  )
};

