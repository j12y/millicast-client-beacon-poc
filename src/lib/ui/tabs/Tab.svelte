<script lang="ts">
    import { fade } from 'svelte/transition';

    export let label;
    export let active = false;
    export let icon;
</script>

<a href="#" on:click class="{ active ? 'bg-slate-700 text-white' : 'bg-gray-200 text-gray-500' } inline-flex items-center px-4 py-3 rounded-lg w-full" aria-current="page">
    <slot {icon} /> { label }
</a>
<div class="{ active ? "" : "hidden"} p-4 pt-2 bg-gray-50 text-medium text-gray-500 rounded-lg w-full" in:fade>
    <slot name="body" />
</div>



