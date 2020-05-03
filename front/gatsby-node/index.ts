import * as path from "path"
import { GatsbyNode } from "gatsby"

import * as author from "./author"

export type AuthorPageContext = author.AuthorPageContext

export const createPages: GatsbyNode["createPages"] = async args => {
  author.createPagesAuthor(args)
}
