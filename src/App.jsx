import { useState } from 'react'
import Navbar from './components/nav/navbar'
import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
function App() {

  const Login = lazy(() => import('./components/login'))
  const Cadastro = lazy(() => import('./components/cadastro'))
  
  return (
     <>
      <Navbar />
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="*" element={<Cadastro />} />
        </Routes>
      </Suspense>
    </>
    )
}

export default App
