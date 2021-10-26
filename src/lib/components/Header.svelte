<script>
	import ThemeToggle from './ui/ThemeToggle.svelte';

	export let session = null;
</script>

<header class="flex items-center justify-between shadow-md w-full sticky p-4 dark:bg-dark-primary">
	<a href="/" class="font-display font-black text-gray-800 dark:text-dark-accent text-2xl"
		>Closeby</a
	>
	<div class="flex gap-6 items-center">
		<!-- Show Logout button if  -->
		{#if session}
			<form action="/api/logout" method="get">
				<button
					class="px-3 py-2 bg-primary-light hover:bg-primary-dark transition duration-200 text-white rounded-full"
					>Log Out</button
				>
			</form>
		{/if}
		<ThemeToggle on:darkmode />
	</div>
</header>
