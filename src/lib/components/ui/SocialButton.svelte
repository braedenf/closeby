<script lang="ts">
	export let text = '';
</script>

<button
	on:click
	class="px-8 py-3 mb-4 border-2 bg-white border-gray-500 hover:border-primary-light outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark rounded-md
transition duration-200"
>
	<span class="flex items-center">
		<slot />
		<label class="font-body font-bold cursor-pointer" for="googleButton"> {text} </label>
	</span>
</button>
