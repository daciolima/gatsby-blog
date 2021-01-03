import React from "react"
import ProfileComponent from "../Profile"
import SocialLinks from "../SocialLinks"
import MenuLinks from "../MenuLinks"

import * as STYLE from "./styled"

const Sidebar = () => (
  <STYLE.SidebarWrapper>
    <ProfileComponent />
    <SocialLinks />
    <MenuLinks />
  </STYLE.SidebarWrapper>
)

export default Sidebar
