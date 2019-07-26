import React from "react"
import { graphql } from "gatsby"
import placeHolderImg from "../images/placeholder.svg"

const IndexPage = ({ data }) => (
  <>
    <h1>{data.site.siteMetadata.title}</h1>
    <h2>{data.site.siteMetadata.description}</h2>
    <img src={placeHolderImg} alt="face-in-hand-graphic" />
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
