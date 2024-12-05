<script>
    export let transcoders;
    export let selected = '';
 </script>
 
 <label>Transcoders:</label>
 <select id="transcoders" bind:value={ selected }>
 {#each Object.values(transcoders) as transcoder}
   <option value={ transcoder.transcoderId }>{ transcoder.name }</option>
 {/each}
 </select>
 