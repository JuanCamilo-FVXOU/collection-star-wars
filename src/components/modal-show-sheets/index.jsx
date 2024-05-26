import React from "react";
import "./styles/index.css";

export const ModalShowSheets = ({ sheets, onClose }) => {
  return (
    <div className="modal-windown">
      <div className="modal-view">
        { sheets !== undefined ? sheets.map((sheet, i) => (
          <div key={i}>
            <h1>{sheet.name}</h1>
            <p>{sheet.height}</p>
            <p>{sheet.mass}</p>
            <p>{sheet.hair_color}</p>
          </div>
        )) : <div>loading...</div> }
      </div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};
