import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppBarMenu from './components/navbar'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './components/mainLayout'
import ListDownloads from './components/listDownloads'

function App() {


  return (
    <>
      <header>
        <AppBarMenu />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/Costumes" element={<ListDownloads jsonName="pruebas" />} />
          <Route path="/Props" element={<ListDownloads jsonName="pruebas" />} />
          <Route path="/Sets" element={<ListDownloads jsonName="pruebas" />} />
          <Route path="/Escenas" element={<ListDownloads jsonName="pruebas" />} />
          <Route path="/Herramientas" element={<ListDownloads jsonName="herramientas" />} />

        </Routes>
      </main>
    </>
  )
}

export default App
