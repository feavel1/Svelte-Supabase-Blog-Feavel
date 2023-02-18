import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import path from 'path';
import { fileURLToPath } from 'url';
import highlighter from './src/lib/components/scripts/codeHighliter.mjs';
const dirname = path.resolve(fileURLToPath(import.meta.url), '../');

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx', '.mdx'],
	smartypants: {
		dashes: 'oldschool'
	},
	highlight: {
		highlighter
	},
	layout: {
		post: path.join(dirname, './src/lib/components/layouts/post.svelte'),
		Home: path.join(dirname, './src/lib/components/layouts/home.svelte'),
		_: path.join(dirname, './src/lib/components/layouts/home.svelte')
	},
	remarkPlugins: [],
	rehypePlugins: []
});

export default config;
