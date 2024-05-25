import React from "react";
import "./styles/index.css";
import imgfondo from "../../assets/deck2.jpg";

export const Sheet = ({ data, type }) => {
  return (
    <div className="sheet">
      {type === "films" && <div>{data.title}</div>}
      {type === "starships" ||
        (type === "characters" && <div>{data.name}</div>)}
      <img src={imgfondo} alt="" />
    </div>
  );
};
