import React from "react";
import { Sheet } from "../sheet";
import "./styles/index.css";

export const ModalShowSheets = ({ sheets, onClose }) => {
  return (
    <div className="modal-windown">
      <div className="modal-view">
        {sheets !== undefined ? (
          sheets.map((sheet, i) => <Sheet data={sheet} info={sheet.data} key={i}/>)
        ) : (
          <div>loading...</div>
        )}
      <button onClick={onClose}>Confirmar</button>
      </div>
    </div>
  );
};
