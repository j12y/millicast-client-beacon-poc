<script lang="ts">
    import SettingCopy from "$lib/ui/forms/SettingCopy.svelte";
    import ToolTipStore from '$lib/stores/ToolTipStore';

    export let whepUrl = '';
</script>

<div class="grid grid-cols-2 p-4 ml-4 mt-4 bg-gray-100 rounded gap-4">
    <div>
        <SettingCopy label="WHEP Endpoint" value={ whepUrl } tooltip={true} on:mouseover={() => {
            $ToolTipStore.title = 'WHEP Endpoint';
            $ToolTipStore.body = ['This URL can be used to take the media stream distributed from Dolby.io as input with other third-party broadcast and playback tools that receive an incoming WHIP stream.',
            ];
            $ToolTipStore.more = '';
        }} />
    </div>
</div>
