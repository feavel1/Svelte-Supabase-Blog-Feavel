/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	darkMode: 'class',
	plugins: [require('@tailwindcss/typography'), require('daisyui')]
	// daisyui: {
	// 	styled: true,
	// 	themes: [
	// 		'cupcake',
	// 		'dark',
	// 		'cmyk',
	// 		{
	// 			mytheme: {
	// 				primary: '#f5f5f4',
	// 				secondary: '#e0f2fe',
	// 				accent: '#7dd3fc',
	// 				neutral: '#292524',
	// 				'base-100': '#1c1917',
	// 				info: '#3ABFF8',
	// 				success: '#5eead4',
	// 				warning: '#fef08a',
	// 				error: '#F87272'
	// 			}
	// 		}
	// 	],
	// 	base: true,
	// 	utils: true,
	// 	logs: true,
	// 	rtl: true,
	// 	prefix: ''
	// }
};
