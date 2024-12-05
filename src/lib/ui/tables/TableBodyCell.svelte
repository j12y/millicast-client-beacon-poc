<script lang="ts">

</script>

<svelte:element this={$$props.onclick ? 'button' : 'td'} class="px-6 py-4 whitespace-nowrap font-small">
    <slot />
</svelte:element>

