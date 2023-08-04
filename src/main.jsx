import React from 'react'
import ReactDOM from 'react-dom/client'
import { NavBar } from './components/NavBar/NavBar'
import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
  </React.StrictMode>,
)
