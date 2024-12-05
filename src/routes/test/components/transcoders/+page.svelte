<script type="ts">
    import Transcoders from '$lib/component/ui/transcoders/TranscoderSelect.svelte';
    import FormTranscoderSettings from '$lib/component/ui/transcoders/TranscoderForm.svelte';

    export let data;

    let selectedTranscoderId;
</script>

<Transcoders transcoders={ data.transcoders } bind:selected={ selectedTranscoderId } />
<FormTranscoderSettings 
    name={ data.transcoders[selectedTranscoderId]?.name }
    dnsName={ data.transcoders[selectedTranscoderId]?.dnsName }
    status={ data.transcoders[selectedTranscoderId]?.status }
    createdOn={ data.transcoders[selectedTranscoderId]?.createdOn }
    endedOn={ data.transcoders[selectedTranscoderId]?.endedOn }
    clusters={ data.clusters }
    selectedCluster={ data.transcoders[selectedTranscoderId]?.cluster }
    profiles={ data.profiles }
    selectedProfile={ data.transcoders[selectedTranscoderId]?.profile.profileId }
    srtUrl={ data.transcoders[selectedTranscoderId]?.publishUrls.srt }
    rtmpUrl={ data.transcoders[selectedTranscoderId]?.publishUrls.rtmp }
    rtmpsUrl={ data.transcoders[selectedTranscoderId]?.publishUrls.rtmps }
/>


{#each Object.values(data.transcoders) as transcoder }
    <p><b>{ transcoder.name }</b></p>
    <p>
        { JSON.stringify(transcoder) } 
    </p>
{/each}




