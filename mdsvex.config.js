import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import path from 'path';
import { fileURLToPath } from 'url';
import highlighter from './src/components/scripts/codeHighliter.mjs';

const dirname = path.resolve(fileURLToPath(import.meta.url), '../');

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},
	highlight: {
		highlighter
	},

	layout: {
		home: path.join(dirname, './src/components/layouts/home.svelte')
	},

	remarkPlugins: [],
	rehypePlugins: []
});

export default config;
