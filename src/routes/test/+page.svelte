<script lang="ts">
    import { slide } from 'svelte/transition';

    import Tab from "$lib/ui/tabs/Tab.svelte";
    import CameraIcon from "$lib/ui/icons/CameraIcon.svelte";
    import PlayIcon from "$lib/ui/icons/PlayIcon.svelte";
    import GridIcon from "$lib/ui/icons/GridIcon.svelte";
    import CheckIcon from "$lib/ui/icons/CheckIcon.svelte";

    let tabs = [
        {label: 'Broadcast', icon: 'CameraIcon'},
        {label: 'Playback', icon: 'PlayIcon'},
        {label: 'Security', icon: 'CheckIcon'},
        {label: 'History', icon: 'GridIcon'},
    ]

    let activeTab = tabs[0].label;

</script>


<div id="message"></div>


<div class="md:flex">
    <div class="flex-column space-y space-y-4 text-sm font-medium text-gray-500 md:me-4 mb-4 md:mb-0">
        {#each tabs as tab}
            <Tab label={tab.label} active={tab.label === activeTab} on:click={() => activeTab = tab.label}>
                {#if tab.icon === "CameraIcon"} 
                    <CameraIcon slot="icon" active={ tab.label === activeTab } />
                {:else if tab.icon === "PlayIcon"}
                    <PlayIcon slot="icon" active={ tab.label === activeTab } />
                {:else if tab.icon === "GridIcon"}
                    <GridIcon slot="icon" active={ tab.label === activeTab } />
                {:else if tab.icon === "CheckIcon"}
                    <CheckIcon slot="icon" active={ tab.label === activeTab } />
                {/if}
                <div class="p-6 bg-gray-50 text-medium text-gray-500 rounded-lg w-full" slot="body" transition:slide={{duration: 1000, easing: linear, x: -150}}>
                    This will need to be dynamic component.
                </div>
            </Tab>
        {/each}

    </div>
</div>



