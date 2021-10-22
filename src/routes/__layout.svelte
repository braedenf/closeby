<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';

	export let darkModeEnabled;

	function handleDarkMode(e) {
		darkModeEnabled = e.detail.darkModeEnabled;
	}
</script>

<div class={darkModeEnabled ? 'dark' : ''}>
	<div class="dark:bg-dark-secondary">
		<Header on:darkmode={handleDarkMode} />
		<slot />
	</div>
</div>
