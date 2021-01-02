import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import RecommendedPost from "../components/RecommendedPost"
import Comments from "../components/Comments"

import * as STYLE from "../components/Post/styled"

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const next = pageContext.nextPost
  const previous = pageContext.previousPost

  return (
    // Fragment   <> </>
    <Layout>
      <SEO
        title={post.frontmatter.title}
        // description={post.frontmatter.description}
        // image={post.frontmatter.image}
      />
      <STYLE.PostHeader>
        <STYLE.PostDate>
          {post.frontmatter.date} - {post.timeToRead} min de leitura
        </STYLE.PostDate>
        <STYLE.PostTitle>{post.frontmatter.title}</STYLE.PostTitle>
        <STYLE.PostDescription>
          {post.frontmatter.description}
        </STYLE.PostDescription>
      </STYLE.PostHeader>
      <STYLE.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </STYLE.MainContent>
      <RecommendedPost next={next} previous={previous} />
      <Comments url={post.fields.slug} title={post.frontmatter.title} />
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      }
      html
      timeToRead
    }
  }
`
export default BlogPost
