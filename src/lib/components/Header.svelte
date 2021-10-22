<script>
	import ThemeToggle from './ui/ThemeToggle.svelte';
</script>

<header class="flex items-center justify-between shadow-md w-full sticky p-4 dark:bg-dark-primary">
	<h1 class="font-display font-black text-gray-800 dark:text-dark-accent text-2xl">Closeby</h1>
	<ThemeToggle on:darkmode />
</header>
