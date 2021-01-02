import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import getThemeColor from "../../utils/getThemeColor"

import Avatar from "../Avatar"
import * as STYLE from "./styled"

const ProfileComponent = () => {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          position
          description
        }
      }
    }
  `)
  return (
    <STYLE.ProfileWrapper>
      <STYLE.ProfileLink
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.6}
      >
        <Avatar />
        <STYLE.ProfileAuthor>
          {title}
          <STYLE.ProfilePosition>{position}</STYLE.ProfilePosition>
        </STYLE.ProfileAuthor>
      </STYLE.ProfileLink>
      <STYLE.ProfileDescription>{description}</STYLE.ProfileDescription>
    </STYLE.ProfileWrapper>
  )
}

export default ProfileComponent
