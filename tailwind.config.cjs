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
					primary: '#f5f5f4',
					secondary: '#57534e',
					accent: '#d8b4fe',
					neutral: '#1c1917',
					'base-100': '#44403c',
					info: '#a5f3fc',
					success: '#a7f3d0',
					warning: '#fde68a',
					error: '#fecaca'
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
