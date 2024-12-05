<script type="ts">
    import SettingCopy from "$lib/ui/forms/SettingCopy.svelte";
    import ToolTipStore from '$lib/stores/ToolTipStore';

    export let token = "";
    export let name = "";
    export let label = "";

</script>

<div>
    <h3>Customize</h3>
    <slot/>
</div>
<div>
    <h3>Settings</h3>
    <SettingCopy label="WHIP Endpoint" value={ `https://director.millicast.com/api/whip/${name}?sourceId=${label}` } tooltip={true} on:mouseover={() => {
        $ToolTipStore.title = 'WHIP Endpoint';
        $ToolTipStore.body = ['The target URL for the Dolby.io WebRTC ingestion service.',
        ];
        $ToolTipStore.more = '';
    }} />
    <SettingCopy label="Publish / Bearer Token" value={ token } tooltip={true} on:mouseover={() => {
        $ToolTipStore.title = 'Publish Token';
        $ToolTipStore.body = ['The publish (or bearer) token is used to authorize a broadcast source.',
            'This value should be kept private and not used in client-side code where it can be intercepted.'
        ];
        $ToolTipStore.more = '';
    }} />
    <SettingCopy label="Stream Name" value={ name } tooltip={true} on:mouseover={() => {
        $ToolTipStore.title = 'Stream Name';
        $ToolTipStore.body = ['The unique name that identifies this streaming content',
            'It can be any alpha-numeric text string. The name appears in URLs so any special characters will be encoded.'
        ];
        $ToolTipStore.more = '';
    }} />
</div>





