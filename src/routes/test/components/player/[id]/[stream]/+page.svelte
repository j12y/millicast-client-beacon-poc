<script type="ts">
    import Player from '$lib/component/player/Player.svelte';
    import StreamSelection from '$lib/component/player/StreamSelection.svelte';

    export let data;
</script>

<StreamSelection bind:account={ data.id } streams={ data.streams } stream={ data.stream }/>

<Player />