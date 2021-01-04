import React from "react"

import Icons from "./Icons"
import links from "./Content"

import * as STYLE from "./styled"

const SocialLinks = () => (
  <STYLE.SocialLinksWrapper>
    <STYLE.SocialLinksList>
      {links.map((link, i) => {
        const Icon = Icons[link.label]

        return (
          <STYLE.SocialLinksItem key={i}>
            <STYLE.SocialLinksLink
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <STYLE.IconWrapper>
                <Icon />
              </STYLE.IconWrapper>
            </STYLE.SocialLinksLink>
          </STYLE.SocialLinksItem>
        )
      })}
    </STYLE.SocialLinksList>
  </STYLE.SocialLinksWrapper>
)

export default SocialLinks
