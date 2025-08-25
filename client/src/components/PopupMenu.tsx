import charSpeech from "../assets/char-speech.gif";
import popupMenu from "../assets/popup.png";
import menuOptions from "../assets/options.png";

export default function PopupMenu({}) {
  return (
    <div className="popup-list">
      <img src={charSpeech} alt="Char Speech" className="char-speech" draggable={false}/>
      <img src={popupMenu} alt="Popup Menu" className="popup-menu" draggable={false}/>

      <button className="button-wrapper" draggable={false}>
        <img src={menuOptions} alt="Menu Options" height="170" draggable={false}/>
        <span className="button-text-overlay">JOURNAL</span>
      </button>

      <button className="button-wrapper" draggable={false}>
        <img src={menuOptions} alt="Menu Options" height="170" draggable={false}/>
        <span className="button-text-overlay">TO-DO LIST</span>
      </button>

      <button className="button-wrapper" draggable={false}>
        <img src={menuOptions} alt="Menu Options" height="170" draggable={false}/>
        <span className="button-text-overlay">CHANGE THEME</span>
      </button>
    </div>
  );
}
