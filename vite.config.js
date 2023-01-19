import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	adapter: adapter(),
	vite: {
		define: {
			'process.env': process.env
		}
	}
};

export default config;
