<script lang="ts">
    import { showGuide } from '$lib/stores/globals.js';
    import ToolTipIcon from "$lib/ui/icons/ToolTipIcon.svelte";
    import ToolTipStore from '$lib/stores/ToolTipStore';

    export let selected = '';
    export let tooltip = true;

    const regions = [
      {code: 'ams-1', location: 'Amsterdam, Netherlands'},
      {code: 'iad-1', location: 'Ashburn, VA, USA'},
      {code: 'blr-1', location: 'Bangalore, India'},
      {code: 'fra-1', location: 'Frankfurt, Germany'},
      {code: 'lon-1', location: 'London, UK'},
      {code: 'phx-1', location: 'Phoenix, AZ, USA'},
      {code: 'sgp-1', location: 'Singapore'},
    ];
</script>

<label for="regions" class="flex flex-nowrap bold whitespace-nowrap block mb-2 text-sm font-medium text-gray-900 dark:text-white">Broadcast Region{#if tooltip}<ToolTipIcon on:click={() => $showGuide = !$showGuide } on:mouseover={() => {
    $ToolTipStore.title = 'Broadcast Region';
    $ToolTipStore.body = ['The location of the media servers that will receive and distribute your broadcast. A default can be set for all streams using the the account or customized per source.',
        'When Auto is selected, the server will detect and route to the region closest to the broadcaster.'
    ];
    $ToolTipStore.more = 'https://docs.dolby.io/streaming-apis/docs/multi-region-support';
}} />{/if}</label>
<select id="regions" bind:value={selected} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option value="">Auto</option>
  {#each regions as region}
    <option value={region.code}>{region.location}</option>
  {/each}
</select>
