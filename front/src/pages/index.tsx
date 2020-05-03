import * as React from "react"
import { graphql } from "gatsby"

import { IndexPageQuery } from "../../types/graphql-types"
// type definition file, "../../types/graphql-types", will generate while build time.

// ______________________________________________________
//
type Props = {
  data: IndexPageQuery
}
// ______________________________________________________
//
const Component: React.FC<Props> = ({ data }) => (
  <div>{data.site?.siteMetadata?.title}</div>
)

// ______________________________________________________
//
export const pageQuery = graphql`
  query IndexPage {
    site {
      siteMetadata {
        title
      }
    }
  }
`
// ______________________________________________________
//
export default Component
