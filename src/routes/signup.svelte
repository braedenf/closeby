<script>
	import { supabaseClient } from '$lib/supabaseClient';
	import Auth from '$lib/components/Auth.svelte';
	import SignUpForm from '$lib/components/SignUpForm.svelte';
</script>

<main class="flex h-screen">
	<Auth>
		<SignUpForm {supabaseClient} />
	</Auth>
</main>
