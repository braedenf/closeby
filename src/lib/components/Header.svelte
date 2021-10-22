<script>
	import { supabaseClient } from '$lib/supabaseClient';
	import { session } from '$app/stores';

	import ThemeToggle from './ui/ThemeToggle.svelte';

	async function signOut() {
		const { error } = await supabaseClient.auth.signOut();
	}
</script>

<header class="flex items-center justify-between shadow-md w-full sticky p-4 dark:bg-dark-primary">
	<a href="/" class="font-display font-black text-gray-800 dark:text-dark-accent text-2xl"
		>Closeby</a
	>
	<div class="flex gap-6 items-center">
		{#if $session}
			<button
				on:click={signOut}
				class="px-3 py-2 bg-primary-light hover:bg-primary-dark transition duration-200 text-white rounded-full"
				>Log Out</button
			>
		{/if}
		<ThemeToggle on:darkmode />
	</div>
</header>
