import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import path from 'path';
import { fileURLToPath } from 'url';

const dirname = path.resolve(fileURLToPath(import.meta.url), '../');

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	layout: {
		home: path.join(dirname, './src/components/layouts/home.svelte')
	},

	remarkPlugins: [],
	rehypePlugins: []
});

export default config;
