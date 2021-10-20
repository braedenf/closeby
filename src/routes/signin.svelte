<script>
	import { supabaseClient } from '$lib/supabaseClient';
	import Auth from '$lib/components/Auth.svelte';
	import SignInForm from '$lib/components/SignInForm.svelte';
</script>

<main class="flex h-screen">
	<Auth>
		<SignInForm {supabaseClient} />
	</Auth>
</main>
