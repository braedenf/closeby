<script>
	import '../app.css';
	import { session } from '$app/stores';
	import { supabaseClient } from '$lib/supabaseClient';
	import { browser } from '$app/env';
	import Header from '$lib/components/Header.svelte';
	import { goto } from '$app/navigation';

	export let darkModeEnabled;

	if (browser) {
		// When the user arrives set the session
		$session = supabaseClient.auth.session();

		$session ? goto('/') : goto('/signin');

		supabaseClient.auth.onAuthStateChange((event, mySession) => {
			$session = mySession;
			$session ? goto('/') : goto('/signin');
		});
	}

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
