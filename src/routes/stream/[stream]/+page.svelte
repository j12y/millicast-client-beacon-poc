<script lang="ts">
    export let data

    import { showGuide } from "$lib/stores/globals.js";
    import Tab from "$lib/ui/tabs/Tab.svelte";
    import CameraIcon from "$lib/ui/icons/CameraIcon.svelte";
    import PlayIcon from "$lib/ui/icons/PlayIcon.svelte";
    import GridIcon from "$lib/ui/icons/GridIcon.svelte";
    import CheckIcon from "$lib/ui/icons/CheckIcon.svelte";

    import Playback from "$lib/stream/playback/Playback.svelte";
    import Broadcast from "$lib/stream/broadcast/Broadcast.svelte";
    import Security from "$lib/stream/security/Security.svelte";
    import History from "$lib/stream/history/History.svelte";
    import BroadcastBadges from "$lib/stream/broadcast/BroadcastBadges.svelte";
    import PlaybackBadges from "$lib/stream/playback/PlaybackBadges.svelte";
    import DashboardGuide from "$lib/stream/DashboardGuide.svelte";

    let tabs = [
        {label: 'Broadcast', icon: 'CameraIcon'},
        {label: 'Playback', icon: 'PlayIcon'},
        {label: 'Security', icon: 'CheckIcon'},
        {label: 'History', icon: 'GridIcon'},
    ]

    let activeTab = "";

    const accountID = data.accountId;
    const streamName = data.name;
    let viewerUrl = `https://viewer.millicast.com?streamId=${data.accountId}/${data.name}`;
    let whepUrl = `https://director.millicast.com/api/whep/${data.accountId}/${data.name}`;


    function handleBack(evt) { 
            window.location.assign('/');
    }

</script>

<svelte:head>
    <title>{ data.name } | Details | Dolby Millicast</title>
</svelte:head>

<div id="message"></div>



<div class="grid grid-cols-5">
    <div class="col-span-1">
        <div>
            <button on:click={ handleBack }>← All Streams</button>
        </div>
        <br/>
    </div>
    <div class="col-span-4">
        <h2>{ data.name } </h2>
            <BroadcastBadges live={ data.details.live } multi={ data.sources > 1 } temporary={ data.details.expires } restricted={ data.details.restricted } />
            <PlaybackBadges open={ data.details.public } />
    </div>
</div>


<div class="grid grid-cols-1 w-full">
    <div class="flex-column space-y space-y-4 text-sm font-medium text-gray-500 md:me-4 mb-4 md:mb-0">
        {#each tabs as tab}
            <Tab label={tab.label} active={tab.label === activeTab} on:click={() => activeTab = (tab.label === activeTab) ? 'undefined' : tab.label } icon={tab.icon}>
                {#if tab.icon === "CameraIcon"} 
                    <CameraIcon slot="icon" active={ tab.label === activeTab } />
                {:else if tab.icon === "PlayIcon"}
                    <PlayIcon slot="icon" active={ tab.label === activeTab } />
                {:else if tab.icon === "GridIcon"}
                    <GridIcon slot="icon" active={ tab.label === activeTab } />
                {:else if tab.icon === "CheckIcon"}
                    <CheckIcon slot="icon" active={ tab.label === activeTab } />
                {/if}
                <div class="p-2 bg-gray-50 text-medium text-gray-500 rounded-lg w-full" slot="body">
                    {#if tab.label === "Broadcast"}
                        <Broadcast data={ data }/>
                    {:else if tab.label === "Playback"}
                        <Playback accountId={ data.accountId } streamName={ streamName } whepUrl={ whepUrl } viewerUrl={ viewerUrl } live={ data.details.live } />
                    {:else if tab.label === "Security"}
                        <Security data={ data }/>
                    {:else if tab.label === "History"}
                        <History />
                    {/if}
                    <DashboardGuide bind:active={ $showGuide }/>
                </div>
            </Tab>
        {/each}
    </div>
</div>



