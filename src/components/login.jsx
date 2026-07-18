import { useState,useRef } from 'react'
import { login } from '../api/users'
import { useNavigate } from 'react-router-dom'

function Login({setLogado}) {
    const [alerta, setAlerta] = useState("")
    const navigate = useNavigate()
    const usernameRef = useRef(null)
    const passwordRef = useRef(null)
    async function handleSubmit(e) {
    e.preventDefault() 
    const username = usernameRef.current.value
    const password = passwordRef.current.value

    if (!username || !password) {
        setAlerta("Preencha usuário e senha")
        return
    }
    try {
        const data = await login(username, password);
        document.cookie = `token=${data.access_token}; path=/; max-age=86400`;
        setLogado(true)
        alert("login feito.");
        navigate('/animes')
    
      
    } catch (err) {
        setAlerta(err.message);
    }
    }
    return (
    <form className="login" onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input ref={usernameRef} type="text" placeholder="Username" />
      <input ref={passwordRef} type="password" placeholder="Password" />
      <button type="submit">Entrar</button>
      {alerta && <p id="alerta">{alerta}</p>}
    </form>
  )
}

export default Login;