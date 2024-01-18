import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './pages/Home.jsx'
import Register from './pages/auth/Register.jsx'

const routes = createBrowserRouter([
  {
    path : "/",
    element : <Home />
  },
  {
    path : "/register",
    element : <Register/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
  ,
)
