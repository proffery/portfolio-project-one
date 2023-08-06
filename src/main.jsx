import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './components/NavBar'
import { Banner } from './components/Banner'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'
import { Contact } from './components/Contact'
//Hash router fo publishing on gh-pages!
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
  </React.StrictMode>,
)
