import React from 'react'
import ReactDOM from 'react-dom/client'
import { ShoppingApp } from './ShoppingApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <ShoppingApp />
    </React.StrictMode>
  </BrowserRouter>
)
