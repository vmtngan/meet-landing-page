/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'boston-blue': 'hsl(192, 37%, 48%)',
				plum: 'hsl(268, 34%, 53%)',
				seagull: 'hsl(192, 54%, 64%)',
				'blue-magenta': 'hsl(267, 54%, 71%)',
				'columbia-blue': 'hsl(192, 90%, 77%)',
				'lavender-purple': 'hsl(268, 100%, 86%)',
				valhalla: 'hsl(240, 21%, 20%)',
				manatee: 'hsl(240, 10%, 57%)',
				lotion: 'hsl(0, 0%, 98%)'
			},
			backgroundImage: {
				'footer-mobile': 'url(/images/image-footer-mobile.jpg)',
				'footer-tablet': 'url(/images/image-footer-tablet.jpg)',
				'footer-desktop': 'url(/images/image-footer-desktop.jpg)'
			}
		}
	},
	plugins: []
};
