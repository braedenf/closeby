<script lang="ts" context="module">
	export async function load({ session }) {
		if (!session) {
			return {
				status: 302,
				redirect: '/signin'
			};
		}
		return {};
	}
</script>

<script lang="ts">
</script>

<main class="h-screen pt-20 flex justify-center">
	<h1 class="font-display font-black text-4xl text-gray-800 dark:text-dark-accent">Welcome</h1>
</main>
