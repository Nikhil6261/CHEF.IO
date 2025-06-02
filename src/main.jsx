import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReacipeContext from '../context/ReacipeContext.jsx'
import { BrowserRouter } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(

  <ReacipeContext>  
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  </ReacipeContext>

)
