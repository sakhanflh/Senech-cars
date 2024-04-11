import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home.jsx'
import BuyPage from './pages/buy'
import HowPage from './pages/how'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/buy' element={<BuyPage />}/>
      <Route path='/howitworks' element={<HowPage />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
