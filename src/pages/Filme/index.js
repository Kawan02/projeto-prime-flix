import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./filme-info.css";

function Filme() {
  const { id } = useParams("id");
  const navigate = useNavigate();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      await api
        .get(`movie/${id}`, {
          params: {
            api_key: "28fc232cc001c31e8a031f419d0a14ca",
            language: "pt-BR",
          },
        })
        .then((response) => {
          setFilme(response.data);
          setLoading(false);
        })
        .catch(() => {
          navigate("/", { replace: true });
          return;
        });
    }
    loadFilme();

    return () => {};
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="filme-info">
        <h1>Carregando...</h1>
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
      <strong>Avaliação: {filme.vote_average} / 10</strong>

      <div className="area-btn">
        <button>Salvar</button>
        <button>
          <a href={`https://youtube.com/results?search_query=${filme.title} Trailer`} target="_blank" rel="noreferrer">
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
}

export default Filme;
