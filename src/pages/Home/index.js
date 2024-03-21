import { useState, useEffect } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const apiUrl = "movie/now_playing";
      // movie/now_playing?api_key=28fc232cc001c31e8a031f419d0a14ca&language=pt-BR
      const response = await api.get(apiUrl, {
        params: {
          api_key: "28fc232cc001c31e8a031f419d0a14ca",
          language: "pt-BR",
          page: 1,
        },
      });

      //   Vai comecar no 0 e termina no 10
      //   console.log(response.data.results.slice(0, 10));

      setFilmes(response.data.results.slice(0, 10));
      setLoading(false);
    }
    loadFilmes();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h2>Carregando filme...</h2>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme) => {
          return (
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
