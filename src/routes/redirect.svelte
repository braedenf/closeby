<script lang="ts" context="module">
	export async function load({ session }) {
		return {
			status: 302,
			redirect: session ? '/' : '/signin',
			props: {
				session
			}
		};
	}
</script>

<h1 class="mx-12 font-display text-3xl text-red-500">YOU SHOULD NOT SEE ME!</h1>
