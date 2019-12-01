import App from './App.svelte';
import './tailwind.css'
import chance from 'chance'


const app = new App({
	target: document.body,
	props: {
		chance: chance.Chance()
	}
});

export default app;