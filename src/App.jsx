import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Componets/Header'
import Slider from './Componets/Slider'
import ProductionHouse from './Componets/ProductionHouse'

function App() {
 

  return (
    <div className="">
        <Header/>
        <Slider/>
        <ProductionHouse/>
    </div>
  )
}

export default App
