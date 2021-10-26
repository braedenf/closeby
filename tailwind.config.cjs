const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		fontFamily: {
			display: ['Merriweather', 'serif'],
			body: ['Open Sans', 'sans-serif']
		},
		extend: {
			colors: {
				primary: {
					light: '#8E66FF',
					dark: '#6447B3'
				},
				dark: {
					primary: '#2E3650',
					secondary: '#242B42',
					accent: '#B1B9D8',
					'accent-light': '#EAE8FF'
				}
			}
		}
	},

	plugins: []
};

module.exports = config;
