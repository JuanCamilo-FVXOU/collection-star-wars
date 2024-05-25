import React from "react";
import { Sheet } from "../sheet";
import "./styles/index.css";
import { getFilmsStarWars, getStarShipsStarWars, getCharactersStarWars } from "../../services";

export const Album = ({ album, open }) => {
  const [section, setSection] = React.useState("films");
  const [data, setData] = React.useState([]);
  const arrayghost = new Array(data.count).fill(null);
  React.useEffect(() => {
    console.log(data.count);
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
      <h4 className="album-title">Coleccionables</h4>
      <div className="album-nav">
        <button onClick={() => setSection("films")}>Films</button>
        <button onClick={() => setSection("starships")}>Starships</button>
        <button onClick={() => setSection("characters")}>Characters</button>
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
