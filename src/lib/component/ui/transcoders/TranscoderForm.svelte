<script>
    import TranscoderProfiles from '$lib/component/ui/transcoders/TranscoderProfileSelect.svelte';
    import Clusters from '$lib/component/ui/select/Clusters.svelte';

    export let name;
    export let dnsName;
    export let createdOn;
    export let endedOn;
    export let status;
    export let clusters;
    export let selectedCluster;
    export let profiles;
    export let selectedProfile;
    export let rtmpUrl;
    export let srtUrl;
    export let rtmpsUrl;
 </script>

 <div>
    <label>Name:</label>
    <input type="text" bind:value={ name }>
 </div>

<TranscoderProfiles profiles={ profiles } selected={ selectedProfile } />
<Clusters clusters={ clusters } selected={ selectedCluster } />

<p>Status: { status }</p>

<p>DNS: { dnsName }</p>
<p>RTMP: { rtmpUrl }</p>
<p>RTMPS: { rtmpsUrl }</p>
<p>SRT: { srtUrl }</p>

<p>Created on: { createdOn }</p>
<p>Ended on: { endedOn }</p>


