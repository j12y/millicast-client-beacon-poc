<script lang="ts">
    export let data

    import SelectedStream from "$lib/stores/SelectedStream.js";

    import Table from "$lib/ui/tables/Table.svelte";
    import TableBody from "$lib/ui/tables/TableBody.svelte";
    import TableBodyRow from "$lib/ui/tables/TableBodyRow.svelte";
    import TableBodyCell from "$lib/ui/tables/TableBodyCell.svelte";
    import TableHead from "$lib/ui/tables/TableHead.svelte";
    import TableHeadCell from "$lib/ui/tables/TableHeadCell.svelte";
    import BroadcastBadges from "$lib/stream/broadcast/BroadcastBadges.svelte";
    import PlaybackBadges from "$lib/stream/playback/PlaybackBadges.svelte";

    let streams = Object.entries(data)

    function handleStreamSelection(name, details) {
        $SelectedStream = {
            name: name,
        }
        const streamName = encodeURI(name);
        window.location.assign(`/stream/${streamName}`)
    }

    function handleStreamCreate(evt) {
        console.log("create stream");
    }

</script>

<svelte:head>
    <title>Streams | Dolby Millicast</title>
</svelte:head>

<p>Select a stream to configure settings and view details or create a new one.</p>
<div id="message"></div>

<div class="grid grid-cols-5 gap-4">
    <div class="col-span-4">
        <div class="flex flex-wrap m-4 w-full bg-white rounded shadow p-4">
            <Table>
            <TableHead>
                <TableHeadCell>Stream</TableHeadCell>
                <TableHeadCell>Broadcast</TableHeadCell>
                <TableHeadCell>Playback</TableHeadCell>
            </TableHead>
            <TableBody>
                {#each streams as [name, details]}
                <TableBodyRow on:click={() => { handleStreamSelection(name, details); } }>
                    <TableBodyCell>
                        <span class="text-base">{ name }</span>
                    </TableBodyCell>
                    <TableBodyCell>
                        <BroadcastBadges live={ details.live } multi={ details.tokens.length > 1} temporary={ details.expires } restricted={ details.restricted } />
                    </TableBodyCell>
                    <TableBodyCell>
                        <PlaybackBadges open={ details.public } />
                    </TableBodyCell>
                </TableBodyRow>
                {/each}
            </TableBody>
            </Table>
        </div>
    </div>
    <div class="col-span-1 ml-4">
        <button on:click={ handleStreamCreate } class="mt-8">+ Add New Stream</button>
    </div>
</div>






