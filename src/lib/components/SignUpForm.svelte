<script lang="ts">
	import {
		useForm,
		HintGroup,
		Hint,
		validators,
		minLength,
		required,
		email
	} from 'svelte-use-form';
	import SocialButton from './ui/SocialButton.svelte';
	import Button from './ui/Button.svelte';
	import type { SupabaseClient } from '@supabase/supabase-js';
	import { passwordMatch } from '$lib/customValidators';

	export let supabaseClient: SupabaseClient;

	async function signUp() {
		const email = $form.email.value;
		const password = $form.password.value;

		const { user, error } = await supabaseClient.auth.signUp({
			email,
			password
		});

		console.log(user, error);
	}

	async function signInWithGoogle() {
		const { user, session, error } = await supabaseClient.auth.signIn({
			provider: 'google'
		});
	}

	const form = useForm();
</script>

<!-- Title -->
<div class="mx-2 sm:mx-12 dark:bg-dark-primary">
	<h2 class="font-display text-gray-800 dark:text-dark-accent font-bold text-2xl mt-4 mb-6">
		Sign Up
	</h2>

	<!-- Form Inputs -->
	<form on:submit|preventDefault use:form class="flex flex-col gap-6 mb-12">
		<!-- Email -->
		<div class="flex flex-col gap-2">
			<label
				class="font-body text-gray-800 font-semibold text-sm dark:text-dark-accent"
				for="EmailInput">Email</label
			>
			<input
				class="form-input font-body"
				type="email"
				name="email"
				placeholder="Enter Email"
				use:validators={[required, email]}
			/>
			<HintGroup for="email">
				<Hint on="required" class="ml-2 text-red-400 font-body text-sm">This field is required</Hint
				>
				<Hint on="email" hideWhenRequired class="ml-2 text-red-400 font-body text-sm"
					>Email is not valid</Hint
				>
			</HintGroup>
		</div>

		<!-- Password -->
		<div class="flex flex-col gap-2">
			<label
				class="font-body text-gray-800 font-semibold text-sm dark:text-dark-accent"
				for="password">Password</label
			>
			<input
				class="font-body form-input"
				type="password"
				name="password"
				placeholder="Enter Password"
				use:validators={[required, minLength(6)]}
			/>
			<HintGroup for="password">
				<Hint on="required" class="ml-2 text-red-400 font-body text-sm">This field is required</Hint
				>
				<Hint class="ml-2 text-red-400 font-body text-sm" on="minLength" hideWhenRequired let:value
					>This field must have at least {value} characters</Hint
				>
			</HintGroup>
		</div>

		<!-- Form Confirmation -->
		<div class="flex flex-col gap-2">
			<label
				class="font-body text-gray-800 font-semibold text-sm dark:text-dark-accent"
				for="passwordConfirmation">Password Confirmation</label
			>
			<input
				class="font-body form-input"
				type="password"
				name="passwordConfirmation"
				placeholder="Enter Password"
				use:validators={[required, passwordMatch]}
			/>
			<HintGroup for="passwordConfirmation">
				<Hint on="required" class="ml-2 text-red-400 font-body text-sm">This field is required</Hint
				>
				<Hint on="passwordMatch" hideWhenRequired class="ml-2 text-red-400 font-body text-sm"
					>Passwords do not match</Hint
				>
			</HintGroup>
		</div>

		<!-- SignUp Submit CTA -->
		<div class="flex flex-col sm:flex-row sm:items-center justify-center gap-4">
			<Button
				disabled={!$form.valid}
				type="submit"
				on:click={signUp}
				class="font-body font-medium"
				text="Sign Up"
			/>
		</div>
		<p class="font-body text-xs text-center font-medium dark:text-dark-accent">
			By signing up you agree to Terms of Service & Privacy Policy.
		</p>
	</form>

	<!-- Sign in with a social provider -->
	<div class="flex flex-col gap-2 justify-center items-center mb-6">
		<label
			class="font-body text-xs text-center font-semibold dark:text-dark-accent"
			for="SocialButtons">Or sign up using:</label
		>
		<SocialButton on:click={signInWithGoogle} text="Sign up with Google">
			<!-- Google Icon -->
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="inline w-4 h-4 mr-3 text-gray-900 fill-current"
				viewBox="0 0 48 48"
				width="48px"
				height="48px"
				><path
					fill="#fbc02d"
					d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
				/><path
					fill="#e53935"
					d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
				/><path
					fill="#4caf50"
					d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
				/><path
					fill="#1565c0"
					d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
				/></svg
			>
		</SocialButton>
	</div>
</div>
