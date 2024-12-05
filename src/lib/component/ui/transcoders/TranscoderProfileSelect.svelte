<script>
    export let profiles;
    export let selected = '';
 </script>
 
 <label>Profile:</label>
 <select id="profiles" bind:value={ selected }>
 {#each profiles as profile}
   <option value={ profile.profileId }>{ profile.name }</option>
 {/each}
 </select>
 