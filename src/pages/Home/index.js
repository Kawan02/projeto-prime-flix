import { useState, useEffect } from "react";
import api from "../../services/api";

function Home() {
  const [filmes, setFilmes] = useState([]);

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

      console.log(response);
    }
    loadFilmes();
  }, []);

  return (
    <div>
      <h1>Bem vindo a home</h1>
    </div>
  );
}

export default Home;
