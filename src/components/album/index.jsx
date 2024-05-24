import React from "react";
import "./styles/index.css";

export const Album = () => {
  const [sheets, setSheets] = React.useState([]);
  return(
    <div className="album">
        <h4 className="album-title">Collectibles</h4>
        <div className="album-nav">
            <button>Films</button>
            <button>Starships</button>
            <button>Characters</button>
        </div>
        <div className="album-items">
            {sheets.map((sheet) => (
            <div key={sheet.id}>
                <h2>{sheet.title}</h2>
                <p>{sheet.description}</p>
            </div>
            ))}
        </div>
    </div> 
  );
}