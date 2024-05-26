import React from "react";
import "./styles/index.css";
import sheetstarship from "../../assets/deckup4.webp";
import sheetfilm from "../../assets/deck3.webp";
import sheetcharacter from "../../assets/deck2.jpg";

export const Sheet = ({ data, info }) => {
  const isSpecialSheet =
    data.type === "films" ||
    (data.type === "characters" && data.id >= 1 && data.id <= 20) ||
    (data.type === "starships" && data.id >= 1 && data.id <= 10);
  const getImageSheet = (type) => {
    if (type === "films") {
      return sheetfilm;
    }
    if (type === "characters") {
      return sheetcharacter;
    }
    return sheetstarship;
  };
  return (
    <div className={`sheet ${isSpecialSheet && "plus"}`}>
      <div className="tag-id">{data.id}</div>
      {info.title && <div className="sheet-tag">{info.title}</div>}
      {info.name && <div className="sheet-tag">{info.name}</div>}
      <img src={getImageSheet(data.type)} alt="" />
    </div>
  );
};
