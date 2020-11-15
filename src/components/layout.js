import React from "react"
import PropTypes from "prop-types"
import ProfileComponent from "./Profile"

const Layout = ({ children }) => {
  return (
    <>
      <aside>
        <ProfileComponent />
        <main>{children}</main>
      </aside>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
