import {searchAnimes} from "../../api/animes.js";
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

function Search() {
  const [termo, setTermo] = useState("")
  const [resultados, setResultados] = useState([])
  const buscaTimer = useRef(null)
  const buscaSeq = useRef(0)

  useEffect(() => {
    clearTimeout(buscaTimer.current)

    if (termo.length <= 2) {
      setResultados([])
      return
    }

    buscaTimer.current = setTimeout(async () => {
      const seq = ++buscaSeq.current
      try {
        const data = await searchAnimes(termo)
        if (seq !== buscaSeq.current) return
        setResultados(data)
      } catch (err) {
        if (seq === buscaSeq.current) setResultados([])
      }
    }, 300)

    return () => clearTimeout(buscaTimer.current)
  }, [termo])

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search..."
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
      />
      <div className="results">
        {resultados.map((anime) => (
            <Link
                key={anime.node.id}
                to={`/anime/${anime.node.id}`}
                className="anime-link"
            >
            <div className="anime-item">
              {anime.node.main_picture?.medium && (<img src={anime.node.main_picture.medium} alt={anime.node.title} />)}
              <h3>{anime.node.title}</h3>
            </div>
            </Link>       
        ))}
      </div>
    </div>
  );
}

export default Search;
