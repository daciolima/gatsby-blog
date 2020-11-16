import React from "react"
import PropTypes from "prop-types"
import Sidebar from "../Sidebar"
import MenuBar from "../MenuBar"
import GlobalStyles from "../../styles/globais"
import * as STYLE from './styled'



const Layout = ({ children }) => {
  return (
    <STYLE.LayoutWrapper>
      <GlobalStyles />
      <Sidebar />
      <STYLE.LayoutMain>{children}</STYLE.LayoutMain>
      <MenuBar />
    </STYLE.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
