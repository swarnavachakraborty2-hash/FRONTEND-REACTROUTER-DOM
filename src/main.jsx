import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Outlet, Route, Router, RouterProvider } from 'react-router-dom'
import Home from "./Components/Home"
import About from './Components/About'
import Contact from './Components/contact'
import Github from './Components/Github'
import Layout from './layout'
import Login from './Components/Login'
import NewContextProvider from './ContextStore/contextProvider'

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "github",
        element: <Github />
      },
      {
        path: "login",
        element: <Login />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <NewContextProvider>
      <RouterProvider router={route} />
    </NewContextProvider>
  </React.StrictMode>,
)
