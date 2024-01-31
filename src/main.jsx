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
import { QueryClient, QueryClientProvider } from 'react-query'
import MyAccount from './pages/Profile/MyAccount.jsx'

const queryClient = new QueryClient();


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
    path: "/channel/:username",
    element : <MyAccount/>
  },
  {
    path : "*",
    element : <p className='text-4xl text-white'>Page Not Found</p>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <QueryClientProvider client={queryClient} >
    <Toaster position="top-center" />
    <Header />
    <RouterProvider router={routes} />
    </QueryClientProvider>
  </React.StrictMode>
 
  ,
)
