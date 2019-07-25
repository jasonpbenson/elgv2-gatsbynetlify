import React from "react"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
  <>
    <h1>{data.site.siteMetadata.title}</h1>
    <h2>{data.site.siteMetadata.description}</h2>
  </>
)

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`

export default IndexPage
