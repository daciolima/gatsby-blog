const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

// Adicionando um campo slug em cada post
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Verificando se o arquivo é markdown
  if (node.internal.type === "MarkdownRemark") {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    })

    // Criando o campo slug dentro de cada nó
    createNodeField({
      node,
      name: "slug",
      value: `/${slug.slice(12)}`,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({node}) => {
          createPage({
              path: node.fields.slug,
              component: path.resolve('./src/templates/blog-post.js'),
              context: {
                  slug: node.fields.slug
              }
          })
      })
  })
}
