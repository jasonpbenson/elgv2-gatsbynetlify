import { graphql, useStaticQuery } from "gatsby"

const siteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query getSiteMetadata {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )
  return site.siteMetadata
}

export default siteMetadata
