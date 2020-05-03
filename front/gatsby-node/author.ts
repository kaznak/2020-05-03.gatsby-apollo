import * as path from "path"
import { GatsbyNode } from "gatsby"

import { Site, SiteSiteMetadataAuthors } from "../types/graphql-types"
// type definition file, "../../types/graphql-types", will generate while build time.

// ______________________________________________________
//

export type AuthorPageContext = {
  author: SiteSiteMetadataAuthors
}

// ______________________________________________________
//

export const createPagesAuthor: GatsbyNode["createPages"] = async ({
  graphql,
  actions: { createPage },
}) => {
  const result = await graphql<{
    site: Site
  }>(`
    {
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
  `)
  if (result.errors || !result.data) {
    throw result.errors
  }
  const { siteMetadata } = result.data.site
  if (!siteMetadata || !siteMetadata.authors)
    throw new Error("undefined authors")
  else
    for (let author of siteMetadata.authors) {
      if (author) {
        createPage<AuthorPageContext>({
          path: `/authors/${author.slug}/`,
          component: path.resolve("src/templates/author.tsx"),
          context: { author },
        })
      }
    }
}
