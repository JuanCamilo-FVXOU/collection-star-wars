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
import { TagTimer } from "./components/tag-timer";

function App() {
  const [album, setAlbum] = React.useState({
    films: [],
    starships: [],
    characters: [],
  });
  const [time, setTime] = React.useState(0);
  const [openmodal, setOpenModal] = React.useState(false);
  const [decks, setDecksPack] = React.useState([]);
  const [openAlbum, setOpenAlbum] = React.useState(false);
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
  };
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleSaveSheets = (sheets) => {
    const updatedAlbum = { ...album };
    sheets.forEach((item) => {
      if (album[item.type]) {
        const alreadyExists = updatedAlbum[item.type].some(
          (existingItem) => existingItem.id === item.id
        );
        if (!alreadyExists) {
          updatedAlbum[item.type].push(item);
        }
      }
    });
    setAlbum(updatedAlbum);
  };
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
    setTime(60);
    setTimerActive(true);
    deck.data.forEach(async (item) => {
      let data;
      let id;
      switch (item) {
        case "films":
          id = Math.floor(Math.random() * 6) + 1;
          data = await getFilmsStarWarsById(id);
          setTempDeck((prevDeck) => [...prevDeck, { id, type: "films", data }]);
          break;
        case "people":
          id = Math.floor(Math.random() * 89) + 1;
          data = await getCharactersStarWarsById(id);
          setTempDeck((prevDeck) => [
            ...prevDeck,
            { id, type: "characters", data },
          ]);
          break;
        case "starships":
          id = Math.floor(Math.random() * 36) + 1;
          data = await getStarShipsStarWarsById(id);
          setTempDeck((prevDeck) => [
            ...prevDeck,
            { id, type: "starships", data },
          ]);
          break;
        default:
          break;
      }
    });
    const newDecks = decks.filter((d) => d.id !== deck.id);
    setDecksPack(newDecks);
  };
  React.useEffect(() => {}, [decks, tempdeck, album]);
  return (
    <div className="app">
      <AppBar albumopen={handleToggleAlbum} getdecks={handleGetDesks} />
      <div className="collection">
        <div className="content">
          <TagTimer
            active={timerActive}
            setActive={setTimerActive}
            setTime={setTime}
            time={time}
          />
          <h2>Mis Paquetes...</h2>
          <div className="content-decks">
            {decks.length > 0 ? (
              decks.map((sheets, i) => (
                <Deck
                  key={i}
                  timer={timerActive}
                  opendeck={handleOpenDeck}
                  sheets={sheets}
                />
              ))
            ) : (
              <div>No tienes paquetes de laminas disponibles...</div>
            )}
          </div>
          <div>
            {openmodal && (
              <ModalShowSheets
                sheets={tempdeck}
                onClose={handleCloseModal}
                saveSheet={handleSaveSheets}
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
