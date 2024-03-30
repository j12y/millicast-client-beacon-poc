<script>
   export let clusters;
   export let selected = 'auto';
</script>

<select id="regions" bind:value={ selected }>
{#each clusters as cluster}
  <option value={ cluster.id }>{ cluster.name }</option>
{/each}
</select>

