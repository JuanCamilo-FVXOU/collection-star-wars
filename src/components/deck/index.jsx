import React from "react";
import "./styles/index.css";
import imgdeck from "../../assets/deck1.jpeg";
import imgdeckup from "../../assets/deckup1.webp";

export const Deck = () => {
  return (
    <div className="deck">
      <div className="deck_up">
        <img src={imgdeckup} alt="img-deck-up" />
      </div>
      <div className="deck_content">
        <img src={imgdeck} alt="img-deck" />
      </div>
    </div>
  );
};
