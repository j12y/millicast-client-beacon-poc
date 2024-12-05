<script lang="ts">
    import CopyIcon from "$lib/ui/icons/CopyIcon.svelte";
    import ToolTipIcon from "$lib/ui/icons/ToolTipIcon.svelte";
    import { showGuide } from '$lib/stores/globals.js';

    export let label = "";
    export let value = "";
    export let tooltip = false;

    function copyToClipboard(evt) {
        let original = evt.target.value;

        evt.target.select();
        evt.target.setSelectionRange(0,99999);
        document.execCommand("copy");
        evt.target.value = "Copied";
        setTimeout(() => {
            evt.target.value = original;
        }, 1000)
    }
</script>


<div>
    <label class="flex flex-nowrap bold whitespace-nowrap">{ label }{#if tooltip}<ToolTipIcon on:mouseover on:click={() => $showGuide = !$showGuide } />{/if}</label>
    <div class="relative mb-2 flex items-center pointer-events-auto">
        <CopyIcon />
        <input type="text" value="{ value }" aria-label="{ label }" class="pl-12 mb-4 text-gray-500 bg-gray-100 border border-gray-300 text-sm rounded-lg caret-purple-500 hover:ring-purple-500 hover:border-purple-500 focus:ring-purple-500 focus:border-purple-500 active:ring-purple-500 active:border-purple-500 block w-full p-2.5 cursor-text" on:click={ copyToClipboard }>
    </div>
</div>