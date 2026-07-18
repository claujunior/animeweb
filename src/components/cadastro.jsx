import { useState } from 'react'
import { cadastroapi} from '../api/users'
import { useNavigate } from 'react-router-dom'

function Cadastro() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [password1, setPassword1] = useState("")
    const [alerta, setAlerta] = useState("")
    const navigate = useNavigate()
    
    async function handleSubmit(e) {
    e.preventDefault() 

    if (!username || !password) {
        setAlerta("Preencha usuário e senha")
        return
    }
    if(password!=password1){
        setAlerta("Senhas diferentes")
        return
    }
    try {
        const data = await cadastroapi(username, password);
        alert("Cadastro feito.");
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
            <input
                type="password"
                placeholder="Repeat Password"
                value={password1}
                onChange={(e) => setPassword1(e.target.value)}
            />

            <button type="submit">Cadastrar</button>
            {alerta && <p id="alerta">{alerta}</p>}
        </form>
  )
}

export default Cadastro;