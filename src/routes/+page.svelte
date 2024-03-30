<script type="ts">
    import Cluster from '$lib/component/ui/Cluster.svelte';

    export let data;
</script>

<h1>Clusters</h1>

<Cluster clusters={ data.clusters }/>
