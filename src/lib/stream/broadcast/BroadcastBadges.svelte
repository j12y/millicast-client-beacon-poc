<script lang="ts">

    export let live = false;
    export let multi = false;
    export let restricted = false;
    export let temporary = false;

</script>

{#if live}
<span class="bg-red-400 text-white text-xs me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-white uppercase">Live</span>
{:else}
<span class="bg-red-50 text-gray-400 text-xs me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-white uppercase">Offline</span>
{/if}

{#if multi}
<span class="bg-blue-100 text-blue-800 text-xs me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-white uppercase">Multi-source</span>
{/if}

{#if temporary}
<span class="bg-yellow-100 text-yellow-800 text-xs me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-white uppercase">Temporary</span>
{/if}

{#if restricted}
<span class="bg-yellow-100 text-yellow-800 text-xs me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-white uppercase border">Restricted</span>
{/if}
