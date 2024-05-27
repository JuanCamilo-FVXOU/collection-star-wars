import React from "react";
import { Sheet } from "../sheet";
import "./styles/index.css";

export const ModalShowSheets = ({ sheets, onClose, saveSheet }) => {
  const handleClick = () => {
    onClose();
    saveSheet(sheets);
  };
  return (
    <div className="modal-windown">
      <div className="modal-view">
        <div className="container-sheets">
          {sheets !== undefined ? (
            sheets.map((sheet, i) => (
              <Sheet data={sheet} info={sheet.data} key={i} />
            ))
          ) : (
            <div>loading...</div>
          )}
        </div>
        <div className="container-button">
          <button onClick={handleClick}>Confirmar</button>
        </div>
      </div>
    </div>
  );
};
