import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { PizzeriaProvider } from './context/PizzeriaContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <PizzeriaProvider>
    <App />
    </PizzeriaProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
