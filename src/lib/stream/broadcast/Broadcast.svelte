<script lang="ts">
    import SelectedSource from '$lib/stores/SelectedSource';

    import Whip from "$lib/stream/broadcast/Whip.svelte";
    import Rtmp from "$lib/stream/broadcast/Rtmp.svelte";
    import Srt from "$lib/stream/broadcast/Srt.svelte";
    import Broadcaster from "$lib/stream/broadcast/Broadcaster.svelte";
    import CreateSourceModal from "$lib/stream/broadcast/CreateSourceModal.svelte";
    import DistributionSettings from "$lib/stream/broadcast/DistributionSettings.svelte";

    import Table from "$lib/ui/tables/Table.svelte";
    import TableBody from "$lib/ui/tables/TableBody.svelte";
    import TableBodyCell from "$lib/ui/tables/TableBodyCell.svelte";
    import TableBodyRow from "$lib/ui/tables/TableBodyRow.svelte";
    import TableHead from "$lib/ui/tables/TableHead.svelte";
    import TableHeadCell from "$lib/ui/tables/TableHeadCell.svelte";

    let selectedSourceId = "";

    export let data = {};

    let createSourceModal = false;

    let broadcaster = false;
    let width = 480;
    let height = 320;

    function handleSelectedSource(token) {
        $SelectedSource = token;
        selectedSourceId = token.id;
    }

</script>


<div class="p-2 text-gray-800 w-full">
    <h1 class="mt-0">Sources</h1>
    <p class="mb-2">Configure broadcast sources that may publish to the real-time stream.</p>

    <div class="grid grid-cols-10 bg-white gap-4 p-2">
        <div class="col-span-8">
            <Table>
                <TableHead>
                    <TableHeadCell>Protocol</TableHeadCell>
                    <TableHeadCell>Label</TableHeadCell>
                    <TableHeadCell>Region</TableHeadCell>
                    <TableHeadCell>Recording</TableHeadCell>
                </TableHead>
                <TableBody>
                    {#each data.details.tokens as token}
                    <TableBodyRow on:click={() => {handleSelectedSource(token) }} selected={ selectedSourceId == token.id }>
                        <TableBodyCell>
                            <span class="bg-slate-500 text-gray-100 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-slate-900 dark:text-white uppercase border">{ token.id == selectedSourceId ? $SelectedSource.protocol : token.protocol }</span>
                        </TableBodyCell>
                        <TableBodyCell>
                            {token.id == selectedSourceId ? $SelectedSource.label : token.label}
                        </TableBodyCell>
                        <TableBodyCell>
                            {(token.id == selectedSourceId ? $SelectedSource.settings.originCluster : token.settings.originCluster) || 'Auto'}
                        </TableBodyCell>
                        <TableBodyCell>
                            {#if token.id == selectedSourceId ? $SelectedSource.settings?.record : token.settings.record }
                                Allowed
                            {:else}
                                None
                            {/if} 
                        </TableBodyCell>
                    </TableBodyRow>
                    {/each}
                </TableBody>
            </Table>
            <p class="mt-2">{ data.sources } source{ data.sources > 1 ? 's' : ''}</p>
        </div>
        <div class="col-span-2 place-self-center">
            <button class="p-2" data-modal-target="create-source-modal" data-modal-toggle="create-source-modal" on:click={() => createSourceModal = true }>Add New Source</button>
            <CreateSourceModal bind:active={ createSourceModal } />
        </div>
    </div>

    {#each data.details.tokens as token}
        <div class={token.id === selectedSourceId ? '' : 'hidden'}>
            <div class="grid grid-cols-2 p-4 ml-4 mt-4 bg-gray-100 rounded gap-4 border">
                {#if token.protocol == "WHIP"}
                    <Whip token={ token.token } name={ data.name } label={ $SelectedSource.label }>
                        <DistributionSettings />
                    </Whip>
                    <div class="col-span-2">
                        <div class="items-center justify-center place-self-center">
                        {#if broadcaster}
                            <Broadcaster token={ token.token }  name={ data.name } />
                            <button class="m-0 items-center" on:click={ () => broadcaster = false }>Close</button>
                        {:else}
                            <button class="m-0 items-center" on:click={ () => broadcaster = true }>Broadcast</button>
                        {/if}
                        </div>
                    </div>
                {:else if token.protocol.startsWith("RTMP") }
                    <Rtmp name={ data.name } token={ token.token } label={ $SelectedSource.label } settings={token}>
                        <DistributionSettings />
                    </Rtmp>
                {:else if token.protocol == "SRT"}
                    <Srt name={ data.name } token={ token.token } settings={ token }>
                        <DistributionSettings />
                    </Srt>
                {:else}
                    <p>Unrecognized protocol, legacy token.</p>
                {/if}
            </div>

        </div>
    {/each}
</div>


