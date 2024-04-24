import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		adapter: adapter({
			fallback: '200.html'
		}),
		paths: {
			// Change this to the base path of your GitHub repository
			base: '/vite_test'
		}
	}
};
