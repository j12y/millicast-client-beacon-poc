<script lang="ts">
    import NavCard from "$lib/ui/cards/NavCard.svelte";
    import EditableSetting from "$lib/ui/forms/EditableSetting.svelte";

    export let active = false;
    
    let createType = '';
    let label = '';
</script>

<div id="create-source-modal" tabindex="-1" aria-hidden="true" class="{ active ? 'backdrop-brightness-50' : 'hidden'} border overflow-y-auto overflow-x-hidden grid h-screen place-items-center fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-2xl max-h-full">
        <div class="relative bg-white rounded-lg shadow border border-black border-0 shadow-black">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t-lg bg-purple-600 border border-black border-1">
                <h3 class="text-xl font-semibold text-white dark:text-white">
                    Add Broadcast Source
                </h3>
                <button type="button" class="text-gray-800 shadow-none bg-gray-200 hover:bg-gray-300 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="create-source-modal" on:click={() => active = false }>
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only bg-gray-300">Close</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-4 md:p-5 space-y-4">
                <div class="grid grid-cols-3 mr-4">
                    <NavCard label="WebRTC" description="WebRTC-HTTP Ingest Protocol (WHIP)" on:click={() => createType = 'whip' } selected={ createType == 'whip'} />
                    <NavCard label="SRT" description="Secure Reliable Transport" on:click={() => createType = 'srt' } selected={ createType == 'srt' }/>
                    <NavCard label="RTMP" description="Real-time Messaging Protocol" on:click={() => createType = 'rtmp' } selected={ createType == 'rtmp' } />
                </div>
                {#if createType}
                    {#if createType == 'whip'}
                    <p>WebRTC enables broadcasting from web browsers (Chrome, Safari, Firefox, etc.) or many software and hardware encoders. Encoders that support WHIP include vMix, OBS, Osprey Talon, FlowCaster, GStreamer, etc.</p>
                    <p>Read more</p>
                    {:else if createType == 'rtmp'}
                    <p>RTMP provides support for software and hardware encoders such as LiveU, FFmpeg, etc.</p>
                    {:else if createType == 'srt'}
                    <p>SRT enables broadcasting with software and hardware encoders such as vMix, Osprey, Teradek, Videon, Haivision, etc.</p>
                    {/if}
                    <div class="grid grid-cols-2 m-8 gap-4">
                        <EditableSetting label="Label" value={ label } />
                        <button class="m-4">Create</button>
                    </div>
                {/if}
            </div>
        </div>
    </div>
</div>