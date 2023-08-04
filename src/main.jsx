import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './components/NavBar'
import { Banner } from './components/Banner'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Banner />
    <Skills />
    <Projects />
  </React.StrictMode>,
)
