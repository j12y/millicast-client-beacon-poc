<script lang="ts">
    import { showGuide } from '$lib/stores/globals.js';
    import ToolTipIcon from "$lib/ui/icons/ToolTipIcon.svelte";

    export let selected = false;
    export let label = "";
    export let tooltip = false;

</script>

<label class="relative inline-flex items-center cursor-pointer" on:mouseover>
    <input type="checkbox" id="" class="sr-only peer" bind:checked={ selected } on:click>
    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
    <span class="ms-3 font-medium text-gray-900 dark:text-gray-300 flex flex-nowrap bold whitespace-nowrap">{ label }{#if tooltip}<ToolTipIcon on:mouseover on:click={() => $showGuide = !$showGuide } />{/if}</span>
</label>
