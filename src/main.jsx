import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import All from './All.jsx'
import Loader from './Components/Loader/Loader.jsx'
function Root(){
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const timer = setTimeout(()=>setLoading(false), 3500)
    return ()=>clearTimeout(timer)
  }, [])
  return loading ? <Loader /> :(
    <BrowserRouter>
    <All />
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Root />
  </StrictMode>
 
  
)
