import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import All from './All.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <All />
  </StrictMode>
  </BrowserRouter>
  
)
