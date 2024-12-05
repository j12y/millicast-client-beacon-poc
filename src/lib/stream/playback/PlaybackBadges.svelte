<script lang="ts">

export let open = true;

</script>


{#if open}
<span class="bg-green-100 text-green-800 text-xs me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-white uppercase border">Public</span>
{:else }
<span class="bg-green-50 text-gray-400 text-xs me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-white uppercase border">Private</span>
{/if}