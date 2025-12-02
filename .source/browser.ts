// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "welcome.mdx": () => import("../content/docs/welcome.mdx?collection=docs"), "blocks/faqs.mdx": () => import("../content/docs/blocks/faqs.mdx?collection=docs"), "blocks/heros.mdx": () => import("../content/docs/blocks/heros.mdx?collection=docs"), "components/backgrounds.mdx": () => import("../content/docs/components/backgrounds.mdx?collection=docs"), "components/buttons.mdx": () => import("../content/docs/components/buttons.mdx?collection=docs"), "components/fluid-dropdown.mdx": () => import("../content/docs/components/fluid-dropdown.mdx?collection=docs"), "components/text.mdx": () => import("../content/docs/components/text.mdx?collection=docs"), }),
};
export default browserCollections;