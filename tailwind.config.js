/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				primary: {
					500: '#FF7000',
					100: '#FFF1E6',
				},
				dark: {
					100: '#000000',
					200: '#0F1117',
					300: '#151821',
					400: '#212734',
					500: '#101012',
				},
				'accent-blue': '#1DA1F2',
				light: {
					background: {
						default: '#FFFFFF',
						paper: '#F4F6F8',
					},
					primary: {
						main: '#7785FF',
						light: '#FFF1E6',
						dark: '#7785FF',
						contrastText: '#FFFFFF',
					},
					gradients: {
						peach: 'linear-gradient(208deg, #E31F76 -13.56%, #792B8B 91.39%)',
						lambada: 'linear-gradient(208deg, #66E175 -20.27%, #5387E9 95.68%)',
						test: 'linear-gradient(0deg, rgba(0,0,0,0.5858718487394958) 0%, rgba(161,105,235,1) 20%, rgba(0,255,170,1) 100%, rgba(23,254,236,1) 100%, rgba(48,178,131,0) 100%, rgba(0,255,179,0) 100%)',
					},
					boxShadow: {
						large: '0px 4px 120px 0px rgba(50, 54, 101, 0.25)',
					},
				},
				dark: {
					background: {
						default: '#323665',
						paper: '#212734',
					},
					primary: {
						main: '#79DFFF',
						light: '#BDEFFF',
						dark: '#00B0E8',
						contrastText: '#000000',
					},
					gradients: {
						peach: 'linear-gradient(208deg, #FFAED3 -13.56%, #FF5E98 91.39%)',
						lambada: 'linear-gradient(208deg, #B9FFC1 -20.27%, #8CB4FF 95.68%)',
					},
					boxShadow: {
						large: '0px 4px 120px 0px rgba(255, 255, 255, 0.15)',
					},
				},
				common: {
					greyScale: {
						100: '#f1f1f1',
						200: '#d4d4d4',
						300: '#b8b8b8',
						400: '#9c9c9c',
						500: '#808080',
						600: '#636363',
						700: '#474747',
						800: '#2a2a2a',
						900: '#2a2a2a',
					},
					white: '#FFFFFF',
					black: '#000000',
				},
			},
			fontFamily: {
				inter: ['var(--font-inter)'],
				spaceGrotesk: ['var(--font-spaceGrotesk)'],
			},
			boxShadow: {
				'light-100':
					'0px 12px 20px 0px rgba(184, 184, 184, 0.03), 0px 6px 12px 0px rgba(184, 184, 184, 0.02), 0px 2px 4px 0px rgba(184, 184, 184, 0.03)',
				'light-200': '10px 10px 20px 0px rgba(218, 213, 213, 0.10)',
				'light-300': '-10px 10px 20px 0px rgba(218, 213, 213, 0.10)',
				'dark-100': '0px 2px 10px 0px rgba(46, 52, 56, 0.10)',
				'dark-200': '2px 0px 20px 0px rgba(39, 36, 36, 0.04)',
			},
			backgroundImage: {
				'gradient-linear':
					'linear-gradient(0deg, rgba(0,0,0,0.5858718487394958) 0%, rgba(161,105,235,1) 20%, rgba(0,255,170,1) 100%, rgba(23,254,236,1) 100%, rgba(48,178,131,0) 100%, rgba(0,255,179,0) 100%)',
				'auth-light': "url('/assets/images/auth-light.png')",
			},
			screens: {
				xs: '420px',
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};
