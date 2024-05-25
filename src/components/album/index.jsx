import React from "react";
import "./styles/index.css";

export const Album = ({album,open}) => {
  const [section, setSection] = React.useState("films");
  return(
    <div className={`album ${open && "open"}`}>
        <h4 className="album-title">Collectibles</h4>
        <div className="album-nav">
            <button onClick={()=>setSection("films")}>Films</button>
            <button onClick={()=>setSection("starships")}>Starships</button>
            <button onClick={()=>setSection("characters")}>Characters</button>
        </div>
        <div className="album-items">
            {album[section].map((item, index) => (
              <div key={index}>
                {item.name}
              </div>
            ))}
        </div>
    </div> 
  );
}