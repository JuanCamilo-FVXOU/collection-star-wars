import React from "react";
import { AppBar } from "./components/appbar";
import "./App.css";
import { Album } from "./components/album";
import { Deck } from "./components/deck";

function App() {
  const album = {
    films: [],
    starships: [],
    characters: [],
  };
  const [openAlbum, setOpenAlbum] = React.useState(false);
  const counter = 1;
  const [counterActive, setCounterActive] = React.useState(false);
  const configDeck = ["131", "320"];
  const ndeck = 4;
  const decks = new Array(ndeck).fill(null);

  const handleToggleAlbum = () => {
    setOpenAlbum(!openAlbum);
  };

  return (
    <div className="app">
      <AppBar albumopen={handleToggleAlbum} />
      <div className="collection">
        <div className="content">
          {decks.map((_, i) => (
            <Deck key={i} />
          ))}
        </div>
        <Album album={album} open={openAlbum} />
      </div>
    </div>
  );
}

export default App;
