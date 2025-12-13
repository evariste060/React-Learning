import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import home from "scr/components/home.jsx"
import Home from './components/home'
import About from './components/about'
import Form from "./components/Form"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <About/>
    <Home />
    <Form/>
    
  </StrictMode>,
)
a