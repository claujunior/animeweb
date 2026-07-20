import { top10animes } from "../../api/animes";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
function Second(){

    const [resultados, setResultados] = useState([])

    useEffect(() => {
        const carregarAnimes = async () => {
        try {
        const dados = await top10animes();
        setResultados(dados); 
        }catch (err) {
        console.log(err);
        }
    };

    carregarAnimes();
    }, []);

return (
    <div id="conteudo">
      <h1>Top Animes</h1>
      <div className="animes">
        {resultados.map((resultado) => (
          <Link
            key={resultado.node.id}
            to={`/anime/${resultado.node.id}`}
            className="card"
          >
            {resultado.node.main_picture?.medium && (
              <img
                src={resultado.node.main_picture.medium}
                alt={resultado.node.title}
              />
            )}
            <h3>{resultado.node.title}</h3>
          </Link>
        ))}
      </div>

    </div>
  )
}

export default Second;