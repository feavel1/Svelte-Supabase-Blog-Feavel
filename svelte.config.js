import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

//Must Import or the vite won't see the highlighter code plugin
import highlighter from './src/lib/components/scripts/codeHighliter.mjs';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	kit: {
		adapter: adapter()
	},
	preprocess: [mdsvex(mdsvexConfig), vitePreprocess()]
};

export default config;
