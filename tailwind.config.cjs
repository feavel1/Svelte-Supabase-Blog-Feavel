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
					primary: '#c7d2fe',
					secondary: '#57534e',
					accent: '#d8b4fe',
					neutral: '#191D24',
					'base-100': '#f3f4f6',
					info: '#3ABFF8',
					success: '#36D399',
					warning: '#FBBD23',
					error: '#F87272'
				}
			}
		],
		base: true,
		utils: true,
		logs: true,
		rtl: true,
		prefix: ''
	}
};
