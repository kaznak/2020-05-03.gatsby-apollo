import * as React from "react"
import { Link, graphql } from "gatsby"

import { IndexPageQuery } from "../../types/graphql-types"
// type definition file, "../../types/graphql-types", will generate while build time.

// ______________________________________________________
//
type Props = {
  data: IndexPageQuery
}
// ______________________________________________________
//
const Component: React.FC<Props> = ({ data }) => {
  const smd = data.site.siteMetadata
  return (
    <React.Fragment>
      <h1>{smd.title}</h1>
      <ul>
        {smd.authors.map((author, i) => (
          <li key={i}>
            <Link to={`/authors/${author.slug}/`}>{author.name}</Link>
          </li>
        ))}
      </ul>
    </React.Fragment>
  )
}

// ______________________________________________________
//
export const pageQuery = graphql`
  query IndexPage {
    site {
      siteMetadata {
        title
        authors {
          name
          slug
        }
      }
    }
  }
`
// ______________________________________________________
//
export default Component
