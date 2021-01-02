import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as STYLE from "./styled"

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "avatar-profile.png" }) {
          childImageSharp {
            fluid(maxWidth: 60) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )
  return <STYLE.AvatarWrapper fluid={avatarImage.childImageSharp.fluid} />
}

export default Avatar
