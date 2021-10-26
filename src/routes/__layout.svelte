<script lang="ts" context="module">
	export async function load({ session }) {
		return {
			props: {
				session
			}
		};
	}
</script>

<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import { supabaseClient } from '$lib/supabaseClient';
	import { browser } from '$app/env';

	export let session;
	export let darkModeEnabled;

	function handleDarkMode(e) {
		darkModeEnabled = e.detail.darkModeEnabled;
	}

	if (browser) {
		supabaseClient.auth.onAuthStateChange((event, _session) => {
			if (_session) {
				fetch('/api/googleauth', {
					method: 'post',
					body: JSON.stringify({ event, _session })
				}).then((res) => {
					if (res.ok) window.location.href = '/';
					else alert(res.text());
				});
			}
		});
	}
</script>

<div class={darkModeEnabled ? 'dark' : ''}>
	<div class="dark:bg-dark-secondary">
		<Header {session} on:darkmode={handleDarkMode} />
		<slot />
	</div>
</div>
