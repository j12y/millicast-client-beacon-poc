<script lang="ts">
    import SettingCopy from "$lib/ui/forms/SettingCopy.svelte";
    import ToolTipStore from '$lib/stores/ToolTipStore';

    export let accountId = '';
    export let streamName = '';


</script>

<div class="grid grid-cols-2 p-4 ml-4 mt-4 bg-gray-100 rounded gap-4">
    <div>
        <h3>SDK Credentials</h3>
        <SettingCopy label="Account ID" value={ accountId } tooltip={true} on:mouseover={() => {
            $ToolTipStore.title = 'Account ID';
            $ToolTipStore.body = ['This ID is unique to your account and is used by the SDK and in stream URLs.',
            ];
            $ToolTipStore.more = '';
        }} />
        <SettingCopy label="Stream Name" value={ streamName } tooltip={true} on:mouseover={() => {
            $ToolTipStore.title = 'Stream Name';
            $ToolTipStore.body = ['Each stream has a unique name and should be provided as a variable to the SDK for use in stream URLs.',
            ];
            $ToolTipStore.more = '';
        }} />
    </div>
    <div>
        <h3>SDK Docs</h3>
        <button class="text-sm bg-gray-200 shadow-slate-300 text-gray-500 hover:text-gray-50"><a href="https://docs.dolby.io/streaming-apis/docs/web" target="_blank">JavaScript SDK</a></button>
        <button class="text-sm bg-gray-200 shadow-slate-300 text-gray-500 hover:text-gray-50"><a href="https://docs.dolby.io/streaming-apis/docs/android" target="_blank">Android SDK</a></button>
        <button class="text-sm bg-gray-200 shadow-slate-300 text-gray-500 hover:text-gray-50"><a href="https://docs.dolby.io/streaming-apis/docs/ios" target="_blank">iOS SDK</a></button>
        <button class="text-sm bg-gray-200 shadow-slate-300 text-gray-500 hover:text-gray-50"><a href="https://docs.dolby.io/streaming-apis/docs/client-sdks" target="_blank">more...</a></button>
        <h3 class="mt-4">Monitoring & Sample Apps</h3>
        <div class="grid grid-cols-4 text-sm">
            <button class="bg-gray-200 shadow-slate-300 text-gray-500 hover:text-gray-50"><a href="https://github.com/dolbyio-samples/rts-app-react-publisher-viewer" target="_blank">React</a></button>
            <button class="bg-gray-200 shadow-slate-300 text-gray-500 hover:text-gray-50"><a href="https://apps.apple.com/us/app/dolby-io-stream-monitor/id1668249838?itsct=apps_box_link&itscg=30200" target="_blank">Android TV</a></button>
            <button class="bg-gray-200 shadow-slate-300 text-gray-500 hover:text-gray-50"><a href="https://apps.apple.com/us/app/dolby-io-stream-monitor/id1660826970?itscg=30200&itsct=apps_box_appicon" target="_blank">tvOS</a></button>
            <button class="bg-gray-200 shadow-slate-300 text-gray-500 hover:text-gray-50"><a href="https://dolby.io/project-gallery/?_project_gallery_product=real-time-streaming" target="_blank">more...</a></button>
        </div>
    </div>
</div>