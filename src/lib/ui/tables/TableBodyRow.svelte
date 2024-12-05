<script lang="ts">

    // TODO: if selected, maintain bg color
    export let selected = false;
</script>

<tr class={`noborder hover:bg-purple-50 hover:cursor-pointer focus:bg-purple-100 active:bg-purple-100 ${selected ? 'bg-purple-100' : ''}`} on:click on:contextmenu on:dblclick>
    <slot />
</tr>
