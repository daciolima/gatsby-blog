import React from "react"
import propTypes from "prop-types"
import * as STYLE from "./styled"

const RecommendedPost = ({ next, previous }) => (
  <STYLE.RecommendedWrapper>
    {previous && (
      <STYLE.RecommendedLink to={previous.fields.slug} className="previous">
        {previous.frontmatter.title}
      </STYLE.RecommendedLink>
    )}
    {next && (
      <STYLE.RecommendedLink to={next.fields.slug} className="next">
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
