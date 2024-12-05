<script lang="ts">
    import Toggle from '$lib/ui/forms/Toggle.svelte';
    import EditableSetting from '$lib/ui/forms/EditableSetting.svelte';
    import SelectedSource from '$lib/stores/SelectedSource';
    import ClusterRegion from "$lib/stream/broadcast/ClusterRegion.svelte";
    import ToolTipStore from '$lib/stores/ToolTipStore';
    
</script>

<EditableSetting label="Label" bind:value={ $SelectedSource.label } tooltip={ true }  on:mouseover={() => {
    $ToolTipStore.title = 'Label';
    $ToolTipStore.body = ['The label is a string to help you remember the purpose of this stream source.',
        'Choose a naming convention to help you remember the location, hardware, or other distinct details.'
    ];
    $ToolTipStore.more = '';
    }}/>
<ClusterRegion selected={ $SelectedSource.settings?.originCluster }/>
<div class="grid grid-cols-2 mt-3">
    <Toggle label="Allow Recordings" selected={ $SelectedSource.settings?.record } on:click={ () => { $SelectedSource.settings.record = !$SelectedSource.settings.record }}  on:mouseover={() => {
        $ToolTipStore.title = 'Allow Recordings';
        $ToolTipStore.body = ['Enable to allow recordings to captured for this particular stream source.',
        'If disabled, will generate an error with the record function of the SDK or will hide the record button from the broadcast sample applications.'];
        $ToolTipStore.more = 'https://docs.dolby.io/streaming-apis/docs/recordings';
    }} />
    <Toggle label="Generate Thumbnails" selected={ $SelectedSource.settings?.enableThumbnails } on:click={ () => { $SelectedSource.settings.enableThumbnails = !$SelectedSource.settings.enableThumbnails }} on:mouseover={() => {
        $ToolTipStore.title = 'Generate Thumbnails';
        $ToolTipStore.body = ['When enabled will generate a thumbnail image every 30 seconds.',
            'You must subscribe to the thumbnail webhook and store and serve the thumbnails from your own cloud storage.'];
        $ToolTipStore.more = 'https://docs.dolby.io/streaming-apis/docs/thumbnail-webhooks';
    }} />
</div>
