<script lang="ts">
	export let text = '';
	export let type = 'button';
	export let disabled: boolean = false;
</script>

<button
	{type}
	{disabled}
	on:click
	on:submit|preventDefault
	class="{$$props.class} {disabled
		? 'bg-gray-300 text-gray-800 cursor-not-allowed'
		: 'bg-primary-light text-white focus:ring-primary-dark focus:ring-offset-2 hover:bg-primary-dark'} focus:ring-2 focus:outline-none   py-3 rounded-full w-32 shadow-md transition duration-200"
>
	{text}
</button>
