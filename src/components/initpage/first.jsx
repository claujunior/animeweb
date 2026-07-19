import { useEffect, useState } from "react"
import { mostrarAnimes1 } from "../../api/animes";
import { Link } from "react-router-dom";

function First(){

    const [resultados, setResultados] = useState([])
    const [paginaAtual, setPagina] = useState(1)

    useEffect(() => {
        const carregarAnimes = async () => {
        try {
        const dados = await mostrarAnimes1(paginaAtual);
        setResultados(dados); 
        }catch (err) {
        console.log(err);
        }
    };

    carregarAnimes();
    }, [paginaAtual]);

    const irParaAnterior = () => {
    setPagina((paginaAtual) => Math.max(paginaAtual - 1, 1));
    };

    const irParaProxima = () => {
    setPagina((paginaAtual) => paginaAtual + 1);
    };

return (
    <div id="conteudo">
      <h1>Animes recentes</h1>
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

      <div className="paginacao">
        <button id="prev" onClick={irParaAnterior}>Anterior</button>
        <button id="next" onClick={irParaProxima}>Próxima</button>
      </div>
    </div>
  )
}

export default First;