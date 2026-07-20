import { useEffect, useState } from "react";
import { searchId } from "../../api/animes";
import { useParams } from "react-router-dom";

function Conteudo(){
    const { id } = useParams();
    const [anime, setAnime] = useState(null)

    useEffect(() => {
        const carregarAnimes = async () => {
        try {
        const dados = await searchId(id);
        setAnime(dados); 
        }catch (err) {
        console.log(err);
        }
    };

    carregarAnimes();
    }, []);

    if (!anime) {
        return <p>Carregando...</p>;
    }
    
return (
  <main id="conteudo">
    <div className="anime-page">
      <div className="anime-banner">
        {anime.pictures?.map((picture, index) => (
          <img key={index} src={picture.large} alt="" />
        ))}
      </div>

      <div className="anime-content">
        <div className="anime-poster">
          <img
            src={anime.pictures?.[0]?.large || anime.main_picture?.large}
            alt={anime.title}
          />
        </div>

        <div className="anime-info">
          <h1>{anime.title}</h1>

          <div className="anime-meta">
            <span><span className="meta-label">Nota</span> {anime.mean || "N/A"}</span>
            <span><span className="meta-label">Rank</span> #{anime.rank || "N/A"}</span>
            <span><span className="meta-label">Popularidade</span> #{anime.popularity || "N/A"}</span>
            <span><span className="meta-label">Status</span> {anime.status || "Unknown"}</span>
          </div>

          <div className="genres">
            {anime.genres?.map((g, index) => (
              <span key={index} className="genre">{g.name}</span>
            ))}
          </div>

          <p className="synopsis">
            {anime.synopsis || "No synopsis available"}
          </p>

          <div className="details">
            <div className="detail-card">
              <h3>Japanese</h3>
              <p>{anime.alternative_titles?.ja || "Unknown"}</p>
            </div>
            <div className="detail-card">
              <h3>English</h3>
              <p>{anime.alternative_titles?.en || "Unknown"}</p>
            </div>
            <div className="detail-card">
              <h3>Source</h3>
              <p>{anime.source || "Unknown"}</p>
            </div>
            <div className="detail-card">
              <h3>Episodes</h3>
              <p>{anime.num_episodes || "Airing"}</p>
            </div>
            <div className="detail-card">
              <h3>Season</h3>
              <p>
                {anime.start_season?.season || "Unknown"}{" "}
                {anime.start_season?.year || ""}
              </p>
            </div>
            <div className="detail-card">
              <h3>Broadcast</h3>
              <p>
                {anime.broadcast?.day_of_the_week || "Unknown"}{" "}
                {anime.broadcast?.start_time || ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);


}

export default Conteudo