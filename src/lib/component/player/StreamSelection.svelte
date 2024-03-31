<script type="ts">
    import Streams from '$lib/component/ui/select/Streams.svelte';
    import { page } from '$app/stores';

    export let account;
    export let streams;
    export let stream;

    function handlePlayerOpen(evt) {
        let route = $page.url.pathname;
        route = route.replace(/player(.*)/, `player/${account}/${stream}`)
        window.location.assign(route);
    }
</script>


<label>
    Account ID:
    <input type="text" bind:value={ account }/>
</label>

<Streams streams={ streams } bind:selected={ stream } />

<button on:click={ handlePlayerOpen }>Open Player</button>
