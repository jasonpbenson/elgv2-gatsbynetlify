// const path = require("path")
// const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.createPages = ({ actions, graphql }) => {
//   const { createPage } = actions

//   return graphql(`
//     {
//       allMarkdownRemark {
//         edges {
//           node {
//             frontmatter {
//               description
//               path
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     if (result.errors) {
//       result.errors.forEach(element => console.error(element.toString()))
//       return Promise.reject(result.errors)
//     }

//     const goods = result.data.allMarkdownRemark.edges

//     goods.forEach(edge => {
//       createPage({
//         path: edge.node.fields.slug,
//         component: path.resolve(`src/templates/goods-template.js`),
//       })
//     })
//   })
// }

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === "MarkdownRemark") {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: "slug",
//       node,
//       value,
//     })
//   }
// }
