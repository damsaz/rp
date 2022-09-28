import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import { useCookies } from 'react-cookie';
function Layout({children}) {
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
    return (
        
      <div className="container">
        <Header />
        <main role="main" className="pb-3">{children}</main>
        <Footer />
        </div>
    )
  }

export default Layout;