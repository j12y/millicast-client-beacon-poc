<script lang="ts">
    import CopyIcon from "$lib/ui/icons/CopyIcon.svelte";

    export let label = "";
    export let value = "";

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
    <label class="bold">{ label }</label>
    <div class="relative mb-2 flex items-center pointer-events-auto">
        <CopyIcon/>
        <textarea value="{ value }" aria-label="{ label }" rows="5" class="block text-xs pl-12 mb-4 text-gray-500 bg-gray-100 border border-gray-300 text-sm rounded-lg caret-purple-500 hover:ring-purple-500 hover:border-purple-500 focus:ring-purple-500 focus:border-purple-500 active:ring-purple-500 active:border-purple-500 block w-full p-2.5 cursor-not-allowed" on:click={ copyToClipboard } />
    </div>
</div>