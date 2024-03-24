import { Link } from "react-router-dom";
import "./header.css";
import { useEffect, useState } from "react";

function Header() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    function filmeLength() {
      const minhaLista = localStorage.getItem("@primeflix");
      setFilmes(JSON.parse(minhaLista) || []);
    }
    filmeLength();
  }, [filmes]);

  return (
    <header>
      <Link className="logo" to="/">
        Prime Flix
      </Link>
      {filmes.length === 0 ? (
        <Link className="favoritos" to="/favoritos">
          Meus Filmes
        </Link>
      ) : (
        <Link className="favoritos" to="/favoritos">
          Meus Filmes {filmes.length}
        </Link>
      )}
    </header>
  );
}

export default Header;
