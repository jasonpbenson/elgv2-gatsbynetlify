const path = require(`path`)
const { createFilePath } = require("gatsby-source-filesystem")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const goodTemplate = path.resolve(`src/templates/goodTemplate.js`)
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fileAbsolutePath
            frontmatter {
              description
              image1
              image2
              image3
              title
              type
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    const goods = result.data.allMarkdownRemark.edges
    console.log(goods)
    goods.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
