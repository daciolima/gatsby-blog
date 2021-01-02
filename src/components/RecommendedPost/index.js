import React from "react"
import propTypes from "prop-types"
import * as STYLE from "./styled"
import getThemeColor from "../../utils/getThemeColor"

const RecommendedPost = ({ next, previous }) => (
  <STYLE.RecommendedWrapper>
    {previous && (
      <STYLE.RecommendedLink
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.6}
        to={previous.fields.slug}
        className="previous"
      >
        {previous.frontmatter.title}
      </STYLE.RecommendedLink>
    )}
    {next && (
      <STYLE.RecommendedLink
        cover
        direction="right"
        bg="#16202c"
        duration={0.6}
        to={next.fields.slug}
        className="next"
      >
        {next.frontmatter.title}
      </STYLE.RecommendedLink>
    )}
  </STYLE.RecommendedWrapper>
)

RecommendedPost.propTypes = {
  next: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
  previous: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
}

export default RecommendedPost
