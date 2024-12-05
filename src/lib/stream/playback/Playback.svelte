<script lang="ts">
    import NavCard from "$lib/ui/cards/NavCard.svelte";
    import HostedPlayer from "$lib/stream/playback/HostedPlayer.svelte";
    import BuildPlayer from "./BuildPlayer.svelte";
    import WhepIntegration from "./WhepIntegration.svelte";

    export let whepUrl = "";
    export let accountId = "";
    export let streamName = "";
    export let viewerUrl = "";
    export let live = "";

    let activePlayer = "";
</script>

<div class="p-2 text-gray-800 w-full">

    <div class="grid grid-cols-3">
        <NavCard label="Hosted Player" description="Customize and embed a Dolby Millicast player into your own web projects." on:click={() => activePlayer = 'hosted' } selected={ activePlayer == 'hosted' } />
        <NavCard label="Build a Player" description="Download sample apps or use Client SDKs for popular development platforms to code your own custom player." on:click={() => activePlayer = 'byo' } selected={ activePlayer == 'byo' } />
        <NavCard label="WHEP Integration" description="The WebRTC-HTTP Egress Protocol (WHEP) standard provides compatibility with third-party players and broadcast tools." on:click={() => activePlayer = 'integration' } selected={ activePlayer == 'integration' } />
    </div>

    {#if activePlayer == "hosted"}
        <HostedPlayer url={ viewerUrl } online={ live } />
    {:else if activePlayer == "byo"}
        <BuildPlayer {accountId} {streamName} />
    {:else if activePlayer == "integration"}
        <WhepIntegration {whepUrl} />
    {/if}

 

</div>
