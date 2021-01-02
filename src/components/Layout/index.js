import React from "react"
import PropTypes from "prop-types"
import { TransitionPortal } from "gatsby-plugin-transition-link"
import Sidebar from "../Sidebar"
import MenuBar from "../MenuBar"
import GlobalStyles from "../../styles/globais"
import * as STYLE from "./styled"

const Layout = ({ children }) => {
  return (
    <STYLE.LayoutWrapper>
      <GlobalStyles />
      <TransitionPortal level="top">
        <Sidebar />
      </TransitionPortal>
      <STYLE.LayoutMain>{children}</STYLE.LayoutMain>
      <TransitionPortal level="top">
        <MenuBar />
      </TransitionPortal>
    </STYLE.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
