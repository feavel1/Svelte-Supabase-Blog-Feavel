/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts,mdx,md}'],
	theme: {
		extend: {}
	},
	darkMode: 'class',
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		styled: true,
		themes: [
			'cupcake',
			'dark',
			'cmyk',
			'emerald',
			{
				mytheme: {
					primary: '#E4C29A',

					secondary: '#CAAC89',

					accent: '#F6BFE6',

					neutral: '#817C75',

					'base-100': '#2B2926',

					info: '#213065',

					success: '#31EDAE',

					warning: '#FCD34A',

					error: '#FA0F2B'
				},
				mylighttheme: {
					primary: '#d968e8',
					secondary: '#f5ebe0',
					accent: '#d5bdaf',
					neutral: '#2C242D',
					'base-100': '#FFFFFF',
					info: '#6284F3',
					success: '#53E4C5',
					warning: '#F3A339',
					error: '#E53440'
				}
			}
		],
		base: true,
		utils: true,
		logs: false,
		rtl: true,
		prefix: ''
	}
};
