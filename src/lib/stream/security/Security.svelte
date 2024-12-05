<script type="ts">
    import SelectedSource from '$lib/stores/SelectedSource';
    import EditableSetting from "$lib/ui/forms/EditableSetting.svelte";
    import SettingCopy from "$lib/ui/forms/SettingCopy.svelte";
    import Toggle from "$lib/ui/forms/Toggle.svelte";
    import Table from "$lib/ui/tables/Table.svelte";
    import TableBody from "$lib/ui/tables/TableBody.svelte";
    import TableBodyCell from "$lib/ui/tables/TableBodyCell.svelte";
    import TableBodyRow from "$lib/ui/tables/TableBodyRow.svelte";
    import TableHead from "$lib/ui/tables/TableHead.svelte";
    import TableHeadCell from "$lib/ui/tables/TableHeadCell.svelte";

    export let data = {};

    let selectedTokenId = '';
    let tokens = {};
    data.details.tokens.forEach(token => {
        tokens[token.token] = token;
    });

    function handleSelectedSource(token) {
        $SelectedSource = token;
        selectedTokenId = token.id;
    }
</script>


<div class="grid grid-cols-10 bg-white gap-4 mb-4">
    <div class="col-span-8">

    <Table>
        <TableHead>
            <TableHeadCell>Token Type</TableHeadCell>
            <TableHeadCell>Label</TableHeadCell>
            <TableHeadCell>Created</TableHeadCell>
            <TableHeadCell>Expires</TableHeadCell>
            <TableHeadCell>Restrictions</TableHeadCell>
        </TableHead>
        <TableBody>
            {#each data.details.tokens as token}
            <TableBodyRow on:click={() => { handleSelectedSource(token) }} selected={ selectedTokenId == token.id }>
                <TableBodyCell>
                    <span class="bg-slate-500 text-gray-100 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-slate-900 dark:text-white uppercase border">{ token.type || 'Publish' }</span>
                </TableBodyCell>
                <TableBodyCell>
                    { token.label }
                </TableBodyCell>
                <TableBodyCell>
                    {token.created}
                </TableBodyCell>
                <TableBodyCell>
                    {token.expires ? token.expires : 'none'}
                </TableBodyCell>
                <TableBodyCell>
                    none
                </TableBodyCell>
            </TableBodyRow>
            {/each}
        </TableBody>
    </Table>
    </div>
    <div class="col-span-2 place-self-center mt-4">
        <!-- Search and Filtering -->
    </div>
</div>


<div class="grid grid-cols-2 gap-4">
    <div class="bg-gray-100 p-4">
        {#if selectedTokenId }

        <h2 class="mt-0 mb-2">Token Settings</h2>

        <EditableSetting label="Label" value={ $SelectedSource.label }/>
        <SettingCopy label="ID" value={ $SelectedSource.id } />
        <SettingCopy label="Token" value={$SelectedSource.token} />

            <button class="bg-red-300">Deactivate</button>
            <button class="bg-red-400">Rotate</button>
            <button class="bg-red-500">Delete</button>

        <!-- Set Expiration -->

        <h2 class="mb-4">Broadcast Restrictions</h2>


        <EditableSetting label="By Domain" placeholder="my-domain.com, *.demo.com" value={ $SelectedSource.settings.allowedOrigins } />

        <EditableSetting label="By IP Address" placeholder="170.123.145.2, 192.168.6.0/24" value={ $SelectedSource.settings.allowedIpAddresses } />

        <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer">
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">By Number of Connections</span>
        </label>

        <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer">
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">By Geography</span>
        </label>

        {/if}

    </div>
    <div class="bg-gray-100 p-4">
        <h2 class="mt-0">Broadcast Tokens</h2>

        <button>Create Publishing Token</button>

        {#if selectedTokenId }
            <h2 class="mt-4 mb-4">Playback Tokens</h2>

            <div>
                <Toggle label="Require Tokens to View Stream" selected={ $SelectedSource.settings.subscribeRequiresAuth } on:click={ () => { $SelectedSource.settings.subscribeRequiresAuth = true }} />
            </div>

            <div>
                <button>Create Subscriber Token</button>
            </div>
        {/if}

    </div>
</div>




