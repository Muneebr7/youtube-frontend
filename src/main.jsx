import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './pages/Home.jsx'
import Register from './pages/auth/Register.jsx'
import { Toaster } from 'react-hot-toast'
import Login from './pages/auth/Login.jsx'
import SingleVideo from './pages/SingleVideo.jsx'
import Header from './components/layouts/Header.jsx'

const routes = createBrowserRouter([
  {
    path : "/",
    element : <Home />
  },
  {
    path : "/login",
    element : <Login />
  },
  {
    path : "/register",
    element : <Register/>
  },
  {
    path : "/video/:videoId",
    element : <SingleVideo />
  },
  {
    path : "*",
    element : <p className='text-4xl text-white'>Page Not Found</p>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <Toaster position="top-center" />
    <Header />
    <RouterProvider router={routes} />
  </React.StrictMode>
  ,
)
