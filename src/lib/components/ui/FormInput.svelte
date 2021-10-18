<script lang="ts">
	import type { InputType } from '$lib/types';
	export let type: InputType;
</script>

<input
	class="border-2 border-gray-200 p-3 rounded-md shadow-sm focus:ring-2 focus:outline-none focus:ring-indigo-600 focus:ring-offset-2"
	{type}
/>
