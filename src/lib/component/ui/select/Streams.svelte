<script>
   export let streams;
   export let selected = '';
</script>

<select id="streams" bind:value={ selected }>
{#each streams as stream}
  <option value={ stream }>{ stream }</option>
{/each}
</select>

