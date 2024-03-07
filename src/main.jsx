import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home.jsx'
import LoginMobilePage from './components/utils/login/LoginMobile'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<LoginMobilePage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
