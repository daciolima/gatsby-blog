import React from "react"
import PropTypes from "prop-types"
import ReactDisqusComments from "react-disqus-comments"

import * as STYLE from "./styled"

const Comments = ({ url, title }) => {
  const completeURL = `https://blog-dacio.netlify.app${url}`

  return (
    <STYLE.CommentsWrapper>
      <STYLE.CommentsTitle>Comentários</STYLE.CommentsTitle>
      <ReactDisqusComments
        shortname="disqus_sYOityJnF5"
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </STYLE.CommentsWrapper>
  )
}

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Comments
