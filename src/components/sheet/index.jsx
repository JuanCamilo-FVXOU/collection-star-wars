import React from "react";
import sheetstarship from "../../assets/deckup4.webp";
import sheetfilm from "../../assets/deck3.webp";
import sheetcharacter from "../../assets/deck2.jpg";
import "./styles/index.css";

export const Sheet = ({ data, info, size, action }) => {
  if (!action) action = () => {};

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
    <div
      onClick={() => action(data)}
      className={`sheet ${isSpecialSheet && "plus"} ${
        size === "small" ? "small" : ""
      } ${size === "large" ? "large" : ""}`}
    >
      <div className="tag-id">{data.id}</div>
      {info.title && <div className="sheet-tag">{info.title}</div>}
      {info.name && <div className="sheet-tag">{info.name}</div>}
      {info && size === "large" && data.type === "starships" && (
        <div className="content-attributes">
          <div>
            <strong>Nombre:</strong> {info.name}
          </div>
          <div>
            <strong>Modelo:</strong> {info.model}
          </div>
          <div>
            <strong>Clase:</strong> {info.starship_class}
          </div>
          <div>
            <strong>Fabricante:</strong> {info.manufacturer}
          </div>
          <div>
            <strong>Costo en créditos:</strong> {info.cost_in_credits}
          </div>
          <div>
            <strong>Longitud:</strong> {info.length}
          </div>
          <div>
            <strong>Tripulación:</strong> {info.crew}
          </div>
          <div>
            <strong>Pasajeros:</strong> {info.passengers}
          </div>
          <div>
            <strong>Velocidad máxima en atmósfera:</strong>
            {info.max_atmosphering_speed}
          </div>
          <div>
            <strong>Clasificación del hiperimpulsor:</strong>
            {info.hyperdrive_rating}
          </div>
          <div>
            <strong>MGLT:</strong> {info.MGLT}
          </div>
          <div>
            <strong>Capacidad de carga:</strong> {info.cargo_capacity}
          </div>
          <div>
            <strong>Consumibles:</strong> {info.consumables}
          </div>
          <div>
            <strong>Apariciones en películas de StarWars: </strong>
            {info.films && info.films.length}
          </div>
        </div>
      )}
      {info && size === "large" && data.type === "characters" && (
        <div className="content-attributes">
          <div>
            <strong>Nombre: </strong> {info.name}
          </div>
          <div>
            <strong>Fecha de nacimiento: </strong> {info.birth_year}
          </div>
          <div>
            <strong>Altura: </strong> {info.height}
          </div>
          <div>
            <strong>Peso: </strong> {info.mass}
          </div>
          <div>
            <strong>Color de cabello: </strong> {info.hair_color}
          </div>
          <div>
            <strong>Color de piel: </strong> {info.skin_color}
          </div>
          <div>
            <strong>Color de ojos: </strong> {info.eye_color}
          </div>
          <div>
            <strong>Genero: </strong> {info.gender}
          </div>
          <div>
            <strong>Planeta de origen: </strong> {info.created}
          </div>
          <div>
            <strong>Fecha de creación: </strong> {info.edited}
          </div>
          <div>
            <strong>Apariciones en películas de StarWars: </strong>
            {info.films && info.films.length}
          </div>
        </div>
      )}

      {info && size === "large" && data.type === "films" && (
        <div className="content-attributes">
          <div>
            <strong>Título: </strong>
            {info.title}
          </div>
          <div>
            <strong>Episodio: </strong>
            {info.episode_id}
          </div>
          <div>
            <strong>Director: </strong>
            {info.director}
          </div>
          <div>
            <strong>Productor: </strong>
            {info.producer}
          </div>
          <div>
            <strong>Fecha de creación: </strong>
            {info.created}
          </div>
          <div>
            <strong>Fecha de edición: </strong>
            {info.edited}
          </div>
          <div>
            <strong>Apertura: </strong>
            {info.opening_crawl}
          </div>
          <div>
            <strong>Fecha de lanzamiento: </strong>
            {info.release_date}
          </div>
          <div>
            <strong>Personajes: </strong>
            <ul className="content-characters">
              {info.characters &&
                info.characters.map((char,index) => <li key={index}>{char}</li>)}
            </ul>
          </div>
        </div>
      )}
      <img src={getImageSheet(data.type)} alt="img-type-sheet" />
    </div>
  );
};
