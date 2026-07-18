import { useState } from 'react'
import Navbar from './components/nav/navbar'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="*" element={<Navbar />} />
    </Routes>
    )
}

export default App
