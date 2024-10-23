import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './Componants/Login'
import Dashbord from './Componants/Dashbord'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Dashbord/>
  </StrictMode>,
)
