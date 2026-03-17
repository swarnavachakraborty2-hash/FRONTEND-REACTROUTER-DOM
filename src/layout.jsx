import React from 'react'
import Header from "./Components/Header2"
import Footer from "./Components/Footer2"
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
     <Header />
     <Outlet />
     <Footer />
    </>
  )
}

export default Layout
