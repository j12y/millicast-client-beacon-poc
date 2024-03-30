<script>
    export let tokens;
    export let selected = '';
</script>

<label>Tokens:</label>
<select id="tokens" bind:value={ selected }>
{#each tokens as token}
    <option value={ token.id }>{ token.label }</option>
{/each}
</select>