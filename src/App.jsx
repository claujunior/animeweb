import { useState } from 'react'
import Navbar from './components/nav/navbar'
import { Routes, Route } from 'react-router-dom'
import Login from './components/login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/animes" element={<Navbar />} />
      <Route path="*" element={<><Navbar /><Login /></>} />
    </Routes>
    )
}

export default App
