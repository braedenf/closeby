<script lang="ts">
	export let text = '';
</script>

<button
	class="{$$props.class} bg-primary-light focus:ring-2 focus:outline-none focus:ring-primary-dark focus:ring-offset-2 hover:bg-primary-dark text-white py-3 rounded-full w-32 shadow-md"
>
	{text}
</button>
