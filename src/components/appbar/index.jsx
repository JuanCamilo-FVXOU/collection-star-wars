import "./styles/index.css";

export const AppBar = ({albumopen}) => {
  return (
    <header>
        <h1>Collection Star Wars</h1>
        <button>Obtener Láminas</button>
        <button onClick={albumopen}>Mi álbum</button>
    </header>
  )
}
