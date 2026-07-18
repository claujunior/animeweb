import { Link } from 'react-router-dom'
import Search from "./search.jsx"
import { memo } from 'react'
function Navbar({ logado, setLogado}) {

  function handleLogout(){
    document.cookie = "token=; path=/; max-age=0"
    setLogado(false)
  }
  return (
    <header className="navbar">
    <div className="logo"><span className="logo-red">Ani</span>lib</div>
      <nav className="menu">
        <Link to="/">Animes</Link>
        {logado && <Link to="/perfil">Perfil</Link>}
        {!logado && <Link to="/login">Login</Link>}
        {!logado && <Link to="/cadastro">Cadastro</Link>}
        <Link to="/login" onClick={handleLogout}>
        Logout
        </Link>
      </nav>
      <Search/>
    </header>
    )
}

export default memo(Navbar)




