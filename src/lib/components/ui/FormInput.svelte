<script lang="ts">
	import type { InputType } from '$lib/types';
	export let type: InputType;
	export let placeholder = '';
</script>

<input
	class="{$$props.class} border-2 border-gray-200 p-3 rounded-md shadow-sm focus:ring-2 focus:outline-none focus:ring-primary-dark focus:ring-offset-2"
	{type}
	{placeholder}
/>
