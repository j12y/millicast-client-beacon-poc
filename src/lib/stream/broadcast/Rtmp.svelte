<script type="ts">
    import SelectedSource from '$lib/stores/SelectedSource';

    import SettingCopy from "$lib/ui/forms/SettingCopy.svelte";
    import EditableSetting from "$lib/ui/forms/EditableSetting.svelte";
    import ClusterRegion from "$lib/stream/broadcast/ClusterRegion.svelte";
    import Toggle from "$lib/ui/forms/Toggle.svelte";

    export let token = "";
    export let name = "";
    export let label = "";
    export let settings = {};

</script>

<div>
    <h3>Customize</h3>
    <slot/>

    <div class="grid grid-cols-2 mt-3">
        <Toggle label="Secure RTMP" selected={ $SelectedSource.protocol === 'RTMPS' } on:click={ () => { $SelectedSource.protocol = $SelectedSource.protocol === 'RTMP' ? 'RTMPS' : 'RTMP' } } />
        <Toggle label="Low Latency RTMP" selected={ settings.settings.lowLatencyRtmp } />
    </div>
    <div class="grid grid-cols-1 mt-3">
        <Toggle label="Multi-bitrate Contribution" selected={ $SelectedSource.multibitrate } on:click={ () => { $SelectedSource.multibitrate = !$SelectedSource.multibitrate }} />
    </div>
</div>
<div>
    <h3>Settings</h3>

    <SettingCopy label="RTMP Endpoint" value={ `${$SelectedSource.protocol == 'RTMPS' ? 'rtmps' : 'rtmp'}://rtmp-auto.millicast.com:1935/v2/pub` } />
    {#if $SelectedSource.multibitrate}
        <SettingCopy label="Stream Key (High)" value={ `${name}?token=${token}&sourceId=1&simulcastId` } />
        <SettingCopy label="Stream Key (Medium)" value={ `${name}?token=${token}&sourceId=2&simulcastId&videoOnly}` } />
        <SettingCopy label="Stream Key (Low)" value={ `${name}?token=${token}&sourceId=3&simulcastId&videoOnly}` } />
    {:else}
        <SettingCopy label="Stream Key" value={ `${name}?token=${token}&sourceId=${label}` } />
    {/if}
</div>





