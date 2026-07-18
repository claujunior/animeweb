import { useState } from 'react'
import { login } from '../api/users'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [alerta, setAlerta] = useState("")
    const navigate = useNavigate()
    
    async function handleSubmit(e) {
    e.preventDefault() 

    if (!username || !password) {
        setAlerta("Preencha usuário e senha")
        return
    }
    try {
        const data = await login(username, password);
        document.cookie = `token=${data.access_token}; path=/; max-age=86400`;
        alert("login feito.");
        navigate('/animes')
    
      
    } catch (err) {
        setAlerta(err.message);
    }
    }
    return (
        <form className="login" onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Entrar</button>
            {alerta && <p id="alerta">{alerta}</p>}
        </form>
  )
}

export default Login;