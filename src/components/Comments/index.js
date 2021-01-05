import React from "react"
import PropTypes from "prop-types"
import { DiscussionEmbed } from "disqus-react"

import * as STYLE from "./styled"

const Comments = ({ url, image }) => {
  const completeURL = `https://blog-dacio.netlify.app/${url}`
  const imageUrl = image
  return (
    <STYLE.CommentsWrapper>
      <STYLE.CommentsTitle>Comentários</STYLE.CommentsTitle>
      <DiscussionEmbed
        shortname="https-blog-dacio-netlify-app"
        config={{
          url: completeURL,
          image: imageUrl,
          language: "pt_BR",
        }}
      />
    </STYLE.CommentsWrapper>
  )
}

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Comments
