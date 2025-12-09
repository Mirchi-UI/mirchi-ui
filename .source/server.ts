// @ts-nocheck
import * as __fd_glob_12 from "../content/docs/components/three-d-card.mdx?collection=docs"
import * as __fd_glob_11 from "../content/docs/components/text.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/components/fluid-dropdown.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/components/buttons.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/components/backgrounds.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/blocks/pricing.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/blocks/heros.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/blocks/faqs.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/welcome.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/index.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/components.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/blocks.mdx?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/2.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"2.json": __fd_glob_0, }, {"blocks.mdx": __fd_glob_1, "components.mdx": __fd_glob_2, "index.mdx": __fd_glob_3, "welcome.mdx": __fd_glob_4, "blocks/faqs.mdx": __fd_glob_5, "blocks/heros.mdx": __fd_glob_6, "blocks/pricing.mdx": __fd_glob_7, "components/backgrounds.mdx": __fd_glob_8, "components/buttons.mdx": __fd_glob_9, "components/fluid-dropdown.mdx": __fd_glob_10, "components/text.mdx": __fd_glob_11, "components/three-d-card.mdx": __fd_glob_12, });