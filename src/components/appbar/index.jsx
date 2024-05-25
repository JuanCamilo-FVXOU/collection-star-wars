import "./styles/index.css";

export const AppBar = ({ albumopen }) => {
  return (
    <header>
      <h3 className="appbar-tittle">Collection Star Wars</h3>
      <div className="appbar-buttoms">
        <button>Obtener Láminas</button>
        <button onClick={albumopen}>Mi álbum</button>
      </div>
    </header>
  );
};
