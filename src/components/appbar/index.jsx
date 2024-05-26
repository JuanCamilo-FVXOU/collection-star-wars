import "./styles/index.css";

export const AppBar = ({ albumopen,getdecks }) => {
  return (
    <header>
      <h2 className="appbar-tittle">Collection Star Wars</h2>
      <div className="appbar-buttoms">
        <button onClick={getdecks}>Obtener Láminas</button>
        <button onClick={albumopen}>Mi álbum</button>
      </div>
    </header>
  );
};
