import React from "react"
import { graphql } from "gatsby"

export const IndexTemplate = ({ title, logo }) => (
  <div>
    <img src={logo} />
    <h1>{title}</h1>
  </div>
)

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <IndexTemplate
      path={frontmatter.path}
      logo={frontmatter.logo}
      title={frontmatter.title}
    ></IndexTemplate>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        path
        logo
        title
      }
    }
  }
`
