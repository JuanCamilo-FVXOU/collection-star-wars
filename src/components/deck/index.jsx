import React from "react";
import "./styles/index.css";
import imgdeck from "../../assets/deck1.jpeg";
import imgdeckup from "../../assets/deckup1.webp";

export const Deck = ({ timer, opendeck,sheets}) => {
  return (
    <div className="deck" onDoubleClick={()=>opendeck(sheets)}>
      <div className="deck_up">
        <img src={imgdeckup} alt="img-deck-up" />
      </div>
      <div className="deck_content">
        <img src={imgdeck} alt="img-deck" />
      </div>
      {timer && (
        <div className="timer">
          <div className="loader">{timer}</div>
        </div>
      )}
    </div>
  );
};
