<script type="ts">
    import Cluster from '$lib/component/ui/select/Cluster.svelte';
    import PublishTokens from '$lib/component/ui/select/PublishTokens.svelte';
    import Streams from '$lib/component/ui/select/Streams.svelte';

    export let data;
</script>

<h1>Beacon Demo</h1>

<Cluster clusters={ data.clusters }/>
<PublishTokens tokens={ data.publish_tokens }/>
<Streams streams={ data.streams }/>
