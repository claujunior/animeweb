import { useState,useRef } from 'react'
import { cadastroapi} from '../api/users'
import { useNavigate } from 'react-router-dom'

function Cadastro() {

    const [alerta, setAlerta] = useState("")
    const navigate = useNavigate()
    const usernameRef = useRef(null)
    const passwordRef = useRef(null)
    const passwordRef1 = useRef(null)
    async function handleSubmit(e) {
    e.preventDefault() 
    const username = usernameRef.current.value
    const password = passwordRef.current.value
    const password1 = passwordRef1.current.value
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
        navigate('/login') 
    } catch (err) {
        setAlerta(err.message);
    }
    }
    return (
        <form className="login" onSubmit={handleSubmit}>
            <h1>Cadastro</h1>
            <input ref={usernameRef} type="text" placeholder="Username" />
            <input ref={passwordRef} type="password" placeholder="Password" />
            <input ref={passwordRef1} type="password" placeholder="Repeat Password" />
            <button type="submit">Cadastrar</button>
            {alerta && <p id="alerta">{alerta}</p>}
        </form>
  )
}

export default Cadastro;