import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		// adapter: adapter({ pages: 'docs' }),
		adapter: adapter(),
		paths: {
			base: '/vite_test'
		}
	}
};
