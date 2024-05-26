import React from "react";
import { AppBar } from "./components/appbar";
import "./App.css";
import { Album } from "./components/album";
import { Deck } from "./components/deck";
import { ModalShowSheets } from "./components/modal-show-sheets";
import {
  getCharactersStarWarsById,
  getStarShipsStarWarsById,
  getFilmsStarWarsById,
} from "./services";

function App() {
  const album = {
    films: [],
    starships: [],
    characters: [],
  };
  const [openmodal, setOpenModal] = React.useState(false);
  const [decks, setDecksPack] = React.useState([]);
  const [openAlbum, setOpenAlbum] = React.useState(false);
  const [timeLeft, setTimeLeft] = React.useState(60);
  const [timerActive, setTimerActive] = React.useState(false);
  const [tempdeck, setTempDeck] = React.useState([]);
  const ndeck = 4;

  function getRandomArray() {
    const combone = ["films", "people", "people", "people", "starships"];
    const combtwo = ["people", "people", "people", "starships", "starships"];
    const randomIndex = Math.random() < 0.5 ? 0 : 1;
    return randomIndex === 0 ? combone : combtwo;
  }
  const handleToggleAlbum = () => {
    setOpenAlbum(!openAlbum);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setTempDeck([]);
  }
  const handleOpenModal = () => {
    setOpenModal(true);
  }

  const handleGetDesks = () => {
    const newDecks = [];
    for (let i = 0; i < ndeck; i++) {
      newDecks.push({ id: i + 1, data: getRandomArray() });
    }
    setDecksPack(newDecks);
  };
  const handleOpenDeck = (deck) => {
    if (timerActive) return;
    handleOpenModal();
    console.log(deck);
    setTimerActive(true);
    setTimeLeft(60);
    deck.data.forEach(async (item) => {
      let data;
      let id;
      switch (item) {
        case "films":
          id = Math.floor(Math.random() * 6) + 1;
          data = await getFilmsStarWarsById(id);
          setTempDeck((prevDeck) => [...prevDeck, data]);
          break;
        case "people":
          id = Math.floor(Math.random() * 89) + 1;
          data = await getCharactersStarWarsById(id);
          setTempDeck((prevDeck) => [...prevDeck, data]);
          break;
        case "starships":
          id = Math.floor(Math.random() * 36) + 1;
          data = await getStarShipsStarWarsById(id);
          setTempDeck((prevDeck) => [...prevDeck, data]);
          break;
        default:
          break;
      }
    });
    const newDecks = decks.filter((d) => d.id !== deck.id);
    setDecksPack(newDecks);
  };
  React.useEffect(() => {
    if (timerActive === true && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setTimerActive(false);
    }
  }, [timerActive, timeLeft]);
  React.useEffect(() => {
    console.log("decks", decks);
    console.log("tempdeck", tempdeck);
  }, [decks, tempdeck]);

  return (
    <div className="app">
      <AppBar albumopen={handleToggleAlbum} getdecks={handleGetDesks} />
      <div className="collection">
        <div className="content">
          <div className="content-timer">{timeLeft}</div>
          <div className="content-decks">
            {decks.map((sheets, i) => (
              <Deck
                key={i}
                timer={timerActive}
                opendeck={handleOpenDeck}
                sheets={sheets}
              />
            ))}
          </div>
          <div>
            {openmodal && (
              <ModalShowSheets
                sheets={tempdeck}
                onClose={handleCloseModal}
              />
            )}
          </div>
        </div>
        <Album album={album} open={openAlbum} />
      </div>
    </div>
  );
}

export default App;
