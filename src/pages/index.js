import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem 
      slug='/about'
      background=""
      category="misc"
      date="16 de Novembro de 2020"
      timeToRead="5"
      title="Características de um Pythonista"
      description="O lado bom de você escrever sobre o que sabe."
    />
  </Layout>
)

export default IndexPage
