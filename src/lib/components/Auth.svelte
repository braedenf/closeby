<script lang="ts">
	import FormInput from './ui/FormInput.svelte';

	import Button from './ui/Button.svelte';

	import { supabase } from '$lib/supabaseClient';

	let loading = false;
	let email: string;
</script>

<form
	class="flex flex-col min-w-[20rem] mx-2 sm:mx-auto sm:max-w-md rounded-2xl justify-center
  shadow-lg dark:bg-dark-primary"
>
	<div class="mx-2 sm:mx-12 my-6">
		<h2 class="font-display text-gray-800 dark:text-dark-accent font-bold text-2xl mt-4 mb-6">
			Sign in
		</h2>
		<div class="flex flex-col gap-6 mb-6">
			<div class="flex flex-col gap-2">
				<label
					class="font-body text-gray-800 font-semibold text-sm dark:text-dark-accent"
					for="EmailInput">Username or email</label
				>
				<FormInput type="email" />
			</div>
			<div class="flex flex-col gap-2">
				<label
					class="font-body text-gray-800 font-semibold text-sm dark:text-dark-accent"
					for="PasswordInput">Password</label
				>
				<FormInput class="font-body" type="password" />
			</div>
			<div class="flex flex-col sm:flex-row sm:items-center justify-center gap-4">
				<Button class="font-body" text="Sign in" />
				<a href="/" class="text-center text-sm font-semibold dark:text-dark-accent"
					>Forgot your password?</a
				>
			</div>
		</div>
		<div class="flex flex-col text-center font-body">
			<a class="font-semibold dark:text-dark-accent" href="/">Don't have an account?</a>
			<a class="font-semibold underline dark:text-dark-accent" href="/">Sign up</a>
		</div>
	</div>
</form>
