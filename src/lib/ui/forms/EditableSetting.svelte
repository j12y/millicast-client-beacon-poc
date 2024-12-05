<script lang="ts">
    import { showGuide } from '$lib/stores/globals.js';
    import ToolTipIcon from "$lib/ui/icons/ToolTipIcon.svelte";

    export let label = "";
    export let value = "";
    export let placeholder = "";
    export let tooltip = false;
</script>

<div>
    <label class="flex flex-nowrap bold whitespace-nowrap">{ label }{#if tooltip}<ToolTipIcon on:mouseover on:click={() => $showGuide = !$showGuide } />{/if}</label>
    <div class="relative mb-2 flex items-center pointer-events-auto">
        <input type="text" bind:value="{ value }" {placeholder} aria-label="{ label }" class="pl-4 text-gray-500 bg-white border border-gray-300 text-sm rounded-lg caret-purple-500 hover:ring-purple-500 hover:border-purple-500 focus:ring-purple-500 focus:border-purple-500 active:ring-purple-500 active:border-purple-500 block w-full p-2.5">
    </div>
</div>