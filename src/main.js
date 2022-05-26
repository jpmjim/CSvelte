import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Jimmy',
		lastName: 'Pecho'
	}
});

export default app;