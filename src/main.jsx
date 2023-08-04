import React from 'react'
import ReactDOM from 'react-dom/client'
import { NavBar } from './components/NavBar'
import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Banner } from './components/Banner'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Banner />
  </React.StrictMode>,
)
