import React from "react"
import { graphql } from "gatsby"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="good-container-indv">
      <div className="good">
        <div className="good-images-container">
          <img
            className="good-image"
            src={frontmatter.image1}
            alt={frontmatter.image1 - alt}
          />
          <img
            className="good-image"
            src={frontmatter.image2}
            alt={frontmatter.image2 - alt}
          />
          <img
            className="good-image"
            src={frontmatter.image3}
            alt={frontmatter.image3 - alt}
          />
        </div>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.description}</h2>
        <div
          className="good-container-indv"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
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
`
