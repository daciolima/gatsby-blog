import React from "react"
import ProfileComponent from "../profile"
import SocialLinks from "../socialLinks"
import MenuLinks from "../menuLinks"

import * as STYLE from "./styled"

const Sidebar = () => (
  <STYLE.SidebarWrapper>
    <ProfileComponent />
    <SocialLinks />
    <MenuLinks />
  </STYLE.SidebarWrapper>
)

export default Sidebar
