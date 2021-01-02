import React from "react"
import * as STYLE from "./styled"
import links from "./content"
import getThemeColor from "../../utils/getThemeColor"

const MenuLinks = () => (
  <STYLE.MenuLinksWrapper>
    <STYLE.MenuLinksList>
      {links.map((link, i) => (
        <STYLE.MenuLinksItem key={i}>
          <STYLE.MenuLinksLink
            cover
            direction="left"
            bg={getThemeColor()}
            duration={0.6}
            to={link.url}
            activeClassName="active"
          >
            {link.label}
          </STYLE.MenuLinksLink>
        </STYLE.MenuLinksItem>
      ))}
    </STYLE.MenuLinksList>
  </STYLE.MenuLinksWrapper>
)

export default MenuLinks
