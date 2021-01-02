import React from "react"
import propTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/Anilink"
import getThemeColor from "../../utils/getThemeColor"

import * as STYLE from "./styled"

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <STYLE.PaginationWrapper>
    {!isFirst && (
      <AniLink
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.6}
        to={prevPage}
      >
        ← página anterior
      </AniLink>
    )}
    <p>
      {currentPage} de {numPages}
    </p>
    {!isLast && (
      <AniLink
        cover
        direction="right"
        bg="#16202c"
        duration={0.6}
        to={nextPage}
      >
        proxima página →
      </AniLink>
    )}
  </STYLE.PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
}

export default Pagination
