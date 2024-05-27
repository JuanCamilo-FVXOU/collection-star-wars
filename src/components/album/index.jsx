import React from "react";
import { Sheet } from "../sheet";
import bannerimg from "../../assets/bannercollection.webp";
import {ModalViewDetailSheet} from "../modal-view-detail-sheet";
import { getFilmsStarWars, getStarShipsStarWars, getCharactersStarWars } from "../../services";
import "./styles/index.css";

export const Album = ({ album, open }) => {
  const [data, setData] = React.useState([]);
  const [openModal, setOpenModal] = React.useState(false);
  const [sheetSelected, setSheetSelected] = React.useState(data[0]);
  const [section, setSection] = React.useState("films");
  const arrayghost = new Array(data.count).fill(null);

  const handleviewSheet = (data) => {
    setOpenModal(true);
    setSheetSelected(data);
  }

  const handleToggleModal = () => {
    setOpenModal(!openModal);
  }
  React.useEffect(() => {
    const fetchData = async () => {
      let result;
      switch (section) {
        case "films":
          result = await getFilmsStarWars();
          setData(result);
          break;
        case "starships":
          result = await getStarShipsStarWars();
          setData(result);
          break;
        case "characters":
          result = await getCharactersStarWars();
          setData(result);
          break;
        default:
          break;
      }
    };
  
    fetchData();
  }, [section]);
  return (
    <div className={`album ${open && "open"}`}>
      <img src={bannerimg} alt="img-banner" />
      <div className="album-nav">
        <button onClick={() => setSection("films")} className={`btn-nav ${section === "films" && "active-section"}`}>Peliculas</button>
        <button onClick={() => setSection("starships")}className={`btn-nav ${section === "starships" && "active-section"}`}>Naves</button>
        <button onClick={() => setSection("characters")}className={`btn-nav ${section === "characters" && "active-section"}`}>Personajes</button>
      </div>
      <div className="album-items">
      {arrayghost.map((_, index) => {
          const item = album[section].find((sheet) => sheet.id === index + 1);
          return item ? (
            <Sheet key={index} data={item} info={item.data} size="small" action={handleviewSheet}/>
          ) : (
            <div className="block-sheet" key={index}>
              <div className="sheet-id">{index + 1}</div>
            </div>
          );
        })}
      </div>
      {openModal && <ModalViewDetailSheet item={sheetSelected} onClose={handleToggleModal}/>}
    </div>
  );
};
