<script lang="ts">
    export let data

    let streams = Object.entries(data)

    function handleStreamSelection(evt) {
        const streamName = encodeURI(evt.target.name);
        window.location.assign(`/stream/${streamName}`)
    }

    function handleStreamCreate(evt) {
        console.log("create stream");
    }

</script>

<svelte:head>
    <title>Streams | Dolby Millicast</title>
</svelte:head>

<p>Select a stream to configure settings and view details or create a new one.</p>
<div id="message"></div>
<div class="flex flex-wrap m-4">
    <button on:click={ handleStreamCreate }>+ Add New Stream</button>
    {#each streams as [name, details]}
        <button name={ name } on:click={ handleStreamSelection } class="bg-white text-purple-700 text-black hover:text-white shadow-gray-300">
            {name} 
            {#if details.live}
            <span class="bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-white uppercase">Live</span>
            {:else}
            <span class="bg-red-100 text-gray-400 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-white uppercase">Offline</span>
            {/if}
            {#if details.public}
            <span class="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-white uppercase border">Public</span>
            {:else}
            <span class="bg-green-100 text-gray-400 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-white uppercase border">Private</span>
            {/if}
            {#if details.tokens.length > 1}
            <span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-white uppercase">Multi-source</span>
            {/if}
            {#if details.expires }
            <span class="bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-white uppercase">Temporary</span>
            {/if}
        </button>
    {/each}
</div>

