<script type="ts">
    import SettingCopy from "$lib/ui/forms/SettingCopy.svelte";

    export let token = "";
    export let name = "";
    export let settings = {};

    const srtEndpoint = "srt://srt-auto.millicast.com:10000";
    const srtName = `${name}?t=${token}`;
    const srtPath = `${srtEndpoint}?streamId=` + encodeURI(srtName);
</script>

<div>
    <h3>Customize</h3>
    <slot/>

    <p>Passphrase</p>
</div>
<div>
    <h3>Settings</h3>
    <SettingCopy label="SRT Endpoint" value={ srtEndpoint  } />
    <SettingCopy label="Stream Name" value={ srtName } />
    <SettingCopy label="Publish Path" value={ srtPath } />
</div>





