import { useState } from 'react'
import Navbar from './components/nav/navbar'
import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
function App() {

  const Login = lazy(() => import('./components/login'))
  const Cadastro = lazy(() => import('./components/cadastro'))
  const [logado, setLogado] = useState(() =>{
    const token = document.cookie.split("; ").find(row => row.startsWith("token="))?.split("=")[1]
    return !!token 
  })
  return (
     <>
      <Navbar logado={logado} setLogado={setLogado}/>
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route path="/login" element={<Login setLogado={setLogado}/>} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="*" element={<Cadastro />} />
        </Routes>
      </Suspense>
    </>
    )
}

export default App
