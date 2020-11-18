import React from "react"
import PropTypes from "prop-types"

import * as STYLE from "./styled"

const PostItem = ({ slug, background, category, date, timeToRead, title, description }) => (
  <STYLE.PostItemLink to={slug}>
    <STYLE.PostItemWrapper>
      <STYLE.PostItemTag background={background}>{category}</STYLE.PostItemTag>
      <STYLE.PostItemInfo>
        <STYLE.PostItemDate>
          {date} * {timeToRead}
        </STYLE.PostItemDate>
        <STYLE.PostItemTitle>
            {title}
        </STYLE.PostItemTitle>
        <STYLE.PostItemDescription>
          {description}
        </STYLE.PostItemDescription>
      </STYLE.PostItemInfo>
    </STYLE.PostItemWrapper>
  </STYLE.PostItemLink>
)

PostItem.prototype = {
    slug: PropTypes.string.isRequired,
    background: PropTypes.string,
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    timeToRead: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default PostItem

