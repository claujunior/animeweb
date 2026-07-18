import { useState } from 'react'
import Navbar from './components/nav/navbar'
import { Routes, Route } from 'react-router-dom'
import Login from './components/login'
import Cadastro from './components/cadastro'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/animes" element={<Navbar />} />
      <Route path="/login" element={<><Navbar /><Login /></>} />
      <Route path="*" element={<><Navbar /><Cadastro /></>} />
    </Routes>
    )
}

export default App
