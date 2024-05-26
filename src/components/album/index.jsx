import React from "react";
import { Sheet } from "../sheet";
import "./styles/index.css";
import bannerimg from "../../assets/bannercollection.webp";
import { getFilmsStarWars, getStarShipsStarWars, getCharactersStarWars } from "../../services";

export const Album = ({ album, open }) => {
  const [section, setSection] = React.useState("films");
  const [data, setData] = React.useState([]);
  const arrayghost = new Array(data.count).fill(null);
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
        <button onClick={() => setSection("films")} className={`btn-nav ${section === "films" && "active-section"}`}>Films</button>
        <button onClick={() => setSection("starships")}className={`btn-nav ${section === "starships" && "active-section"}`}>Starships</button>
        <button onClick={() => setSection("characters")}className={`btn-nav ${section === "characters" && "active-section"}`}>Characters</button>
      </div>
      <div className="album-items">
        {arrayghost.map((_, index) => (
          <div className="block-sheet" key={index}>
            <div className="sheet-id">{index+1}</div>
          </div>
        ))}
        {/* {album[section].map((item, index) => (
              <div key={index}>
                {item.name}
              </div>
            ))} */}
      </div>
    </div>
  );
};
