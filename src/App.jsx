import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar'
import HomePage from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/GrabFoodApp' element={<HomePage/>}/>
      </Routes>
    </>
  )
}

export default App
