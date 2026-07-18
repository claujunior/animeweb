import { Link } from 'react-router-dom'
import Search from "./search.jsx"

function Navbar() {
  const logado = document.cookie
  .split("; ")
  .find(row => row.startsWith("token="))
  ?.split("=")[1];


  return (
    <header className="navbar">
    <div className="logo"><span className="logo-red">Ani</span>lib</div>
      <nav className="menu">
        <Link to="/">Animes</Link>
        {logado && <Link to="/perfil">Perfil</Link>}
        {!logado && <Link to="/login">Login</Link>}
        {!logado && <Link to="/cadastro">Cadastro</Link>}
        {logado && <Link to="/logout">Logout</Link>}
      </nav>
      <Search/>
    </header>
    )
}

export default Navbar




