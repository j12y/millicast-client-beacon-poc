<script lang="ts">
    import ToolTipStore from '$lib/stores/ToolTipStore';

    export let active = false;
</script>


 
<!-- drawer component -->
{#if active}

<div id="drawer-bottom-example" class="{ active ? '' : 'hidden'} border-t-2 fixed bottom-0 left-0 right-0 z-40 w-full p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800 transform-none" tabindex="-1" aria-labelledby="drawer-bottom-label">
    <h5 id="drawer-bottom-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
      <svg class="w-4 h-4 me-2.5" aria-hidden="false" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
         <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
      </svg> { $ToolTipStore.title || 'Dashboard Guide' }
    </h5>

    <div class="grid grid-cols-4 gap-8">
      <div class="col-span-3">
         {#each $ToolTipStore.body as body}
         <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">{ body }</p>
         {/each}
      </div>
      <div class="col-start-4">
         <div class="flex items-center h-full">
            {#if $ToolTipStore.more }
               <a href="{ $ToolTipStore.more }" target="_blank" class="px-4 py-2 me-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Learn more</a>
            {/if}
         </div>
      </div>
    </div>

    <button  on:click={() => {active = false; }} type="button" data-drawer-hide="drawer-bottom-example" aria-controls="drawer-bottom-example" class="text-gray-400 bg-transparent shadow-gray-300 hover:bg-gray-200 hover:shadow-gray-400 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center" >
      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
      <span class="sr-only">Close menu</span>
   </button>


</div>
{/if}

