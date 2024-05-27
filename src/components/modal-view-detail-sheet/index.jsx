import React from "react";
import { Sheet } from "../sheet";
import "./styles/index.css";

export const ModalViewDetailSheet = ({ item, onClose }) => {
  return (
    <div className="modal-view-detail">
      <Sheet data={item} info={item.data} size="large" />
      <button onClick={onClose}>Close</button>
    </div>
  );
};
