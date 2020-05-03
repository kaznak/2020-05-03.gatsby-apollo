import * as React from "react"
import { Link } from "gatsby"
import { AuthorPageContext } from "../../gatsby-node"
// ______________________________________________________
//
type Props = {
  pageContext: AuthorPageContext
}
// ______________________________________________________
//
const Component: React.FC<Props> = ({ pageContext }) => (
  <div>
    <h1>{pageContext.author.name}</h1>
    <Link to="/">Back to top</Link>
  </div>
)
// ______________________________________________________
//
export default Component
