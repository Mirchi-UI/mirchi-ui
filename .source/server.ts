// @ts-nocheck
import * as __fd_glob_6 from "../content/docs/components/buttons.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/components/backgrounds.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/blocks/heros.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/blocks/faqs.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/welcome.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/index.mdx?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/2.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"2.json": __fd_glob_0, }, {"index.mdx": __fd_glob_1, "welcome.mdx": __fd_glob_2, "blocks/faqs.mdx": __fd_glob_3, "blocks/heros.mdx": __fd_glob_4, "components/backgrounds.mdx": __fd_glob_5, "components/buttons.mdx": __fd_glob_6, });