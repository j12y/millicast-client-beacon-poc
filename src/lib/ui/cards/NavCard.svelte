<script lang="ts">

    export let label = '';
    export let description = '';
    export let selected = false;

</script>

<a href="#" class="flex flex-col hover:bg-purple-100 rounded shadow p-4 m-4 {selected ? 'bg-purple-200' : ''}" on:click>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ label }</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">{ description }</p>
</a>