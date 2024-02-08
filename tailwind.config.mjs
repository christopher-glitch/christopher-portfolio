/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			PressStart: ['"Press Start 2P"', 'sans-serif'],
			Roboto: ['Roboto', 'sans-serif'],
			Menlo: ['Menlo', 'sans-serif'],
			Monaco: ['Monaco', 'sans-serif'], 
			japan: ['メイリオ', 'ヒラギノ丸ゴシック']
		},
		extend: {},
	},
	plugins: [require("daisyui")],
}
