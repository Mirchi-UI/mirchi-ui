// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "components/background-circles.mdx": () => import("../content/docs/components/background-circles.mdx?collection=docs"), "components/loading-button.mdx": () => import("../content/docs/components/loading-button.mdx?collection=docs"), }),
};
export default browserCollections;