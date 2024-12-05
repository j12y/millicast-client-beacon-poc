<script type="ts">
    import StreamSelection from '$lib/component/player/StreamSelection.svelte';

    export let data;
</script>

<StreamSelection bind:account={ data.accountId } streams={ data.streams } stream={ data.stream }/>

