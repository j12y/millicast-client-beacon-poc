<script lang="ts">
    import SettingCopy from "$lib/ui/forms/SettingCopy.svelte";
    import TextAreaCopy from "$lib/ui/forms/TextAreaCopy.svelte";
    import EditableSetting from "$lib/ui/forms/EditableSetting.svelte";
    import Toggle from "$lib/ui/forms/Toggle.svelte";
    import ToolTipStore from '$lib/stores/ToolTipStore';

    export let online = false;

    export let url = '';
    export let width = 480;
    export let height = 320;
    export let autoplay = true;

    let muted = true;
    let play = true;
    let volume = true;
    let fullscreen = true;
    let pip = true;
    let badge = true;
    let count = true;
    let settings = true;
    let multiview = true;
    let cast = true;
    let labels = false;
    let offlineImageUrl = '';

    $: viewerUrl = url 
        + (autoplay ? '&autoplay=true' : '&autoplay=false') 
        + (muted ? '&muted=true' : '')
        + (play ? '' : '&play=false')
        + (volume ? '' : '&volume=false')
        + (fullscreen ? '' : '&fullscreen=false')
        + (pip ? '' : '&pip=false')
        + (badge ? '' : '&liveBadge=false')
        + (count ? '' : '&userCount=false')
        + (settings ? '' : '&disableSettings=true')
        + (multiview ? '' : '&multiview=false')
        + (cast ? '' : '&cast=false')
        + (labels ? '' : '&showLabels=false')
        + (offlineImageUrl ? `&image=${offlineImageUrl}` : '')
        ;

    $: embedCode = `<iframe title="Embedded Player" src="${viewerUrl}" allowfullscreen width="${width}" height="${height}"></iframe>`

    let view = false;

</script>

<div class="grid grid-cols-7 p-2 ml-4 mt-4 bg-gray-100 rounded gap-4">
    <div class="col-span-3">
        <h3>Settings</h3>
        <SettingCopy label="Viewer URL" value={ viewerUrl } tooltip={true} on:mouseover={() => {
            $ToolTipStore.title = 'Viewer URL';
            $ToolTipStore.body = ['This URL can be used as a standalone app to open in a new window or tab with any web browser.',
                'It is common to use this URL as an in-page player within an embedded <iframe> element.'
            ];
            $ToolTipStore.more = '';
        }} />

        {#if view}
        <TextAreaCopy label="Embed Code" value={embedCode} />
        {/if}

    </div>
    <div class="col-span-4">
        <h3>Customize</h3>
        <div class="grid grid-cols-2 gap-4 ml-2">
            <div>
                <EditableSetting label="Width" bind:value={ width } tooltip={true} on:mouseover={() => {
                    $ToolTipStore.title = 'Width x Height';
                    $ToolTipStore.body = ['Choose a width and height for the resolution and size you want the embedded iframe to be within a page.',
                        'For example, for 480p resolution a 4:3 aspect ratio of 640x480 is common.'
                    ];
                    $ToolTipStore.more = '';
                }}/>
            </div>
            <div>
                <EditableSetting label="Height" bind:value={ height } tooltip={true} on:mouseover={() => {
                    $ToolTipStore.title = 'Width x Height';
                    $ToolTipStore.body = ['Choose a width and height for the resolution and size you want the embedded iframe to be within a page.',
                        'For example, for 480p resolution a 4:3 aspect ratio of 640x480 is common.'
                    ];
                    $ToolTipStore.more = '';
                }}/>
            </div>
        </div>
        <div class="grid grid-cols-3 p-2 text-xs">
            <div>
            <Toggle label="Play Button" selected={ play } on:click={ () => play = !play } on:mouseover={() => {
                $ToolTipStore.title = 'Play Button';
                $ToolTipStore.body = ['When enabled will give viewer control to play or pause the stream.',
                ];
                $ToolTipStore.more = '';
            }} />
            <Toggle label="Autoplay" selected={ autoplay } on:click={ () => autoplay = !autoplay } on:mouseover={() => {
                $ToolTipStore.title = 'Autoplay';
                $ToolTipStore.body = ['When enabled will begin the stream as soon as the video player loads.',
                    'This may be restricted by certain browsers and devices. For example, on a mobile device using Safari autoplay is not available until a user interacts with the widget.'
                ];
                $ToolTipStore.more = '';
            }} />
            <Toggle label="Muted" selected={ muted } on:click={ () => muted = !muted } on:mouseover={() => {
                $ToolTipStore.title = 'Muted';
                $ToolTipStore.body = ['When enabled will begin the stream with audio disabled.',
                    'This may be helpful for mobile devices that will not allow autoplay when there is audio.'
                ];
                $ToolTipStore.more = '';
            }} />
            <Toggle label="Volume Control" selected={ volume } on:click={ () => volume = !volume } on:mouseover={() => {
                $ToolTipStore.title = 'Volume Control';
                $ToolTipStore.body = ['When enabled will give viewer control to modify the volume of the stream and mute or unmute the audio.',
                ];
                $ToolTipStore.more = '';
            }} />
            </div>
           <div>
            <Toggle label="Settings" selected={ settings } on:click={ () => settings = !settings } on:mouseover={() => {
                    $ToolTipStore.title = 'Player Settings';
                    $ToolTipStore.body = ['When enabled will show a gear cog icon that can be selected to modify playback settings.',
                        'This includes things such as layer selection and media stats.'
                    ];
                    $ToolTipStore.more = '';
            }} />
            <Toggle label="Google Cast" selected={ cast } on:click={ () => cast = !cast } on:mouseover={() => {
                    $ToolTipStore.title = 'Google Cast';
                    $ToolTipStore.body = ['Google cast enables sharing a stream from Chrome with a Google enabled display device.',
                    ];
                    $ToolTipStore.more = '';
            }} />
            <Toggle label="Fullscreen" selected={ fullscreen } on:click={ () => fullscreen = !fullscreen } on:mouseover={() => {
                    $ToolTipStore.title = 'Fullscreen';
                    $ToolTipStore.body = ['Display a control to make the video full screen.',
                    ];
                    $ToolTipStore.more = '';
            }} />
            <Toggle label="Picture-in-Picture" selected={ pip } on:click={ () => pip = !pip } on:mouseover={() => {
                    $ToolTipStore.title = 'Picture-in-Picture';
                    $ToolTipStore.body = ['When enabled will provide a control to shrink the video player into a small frame.',
                    ];
                    $ToolTipStore.more = '';
            }} />
            </div>
            <div>
            <Toggle label="Live Badge" selected={ badge } on:click={ () => badge = !badge } on:mouseover={() => {
                $ToolTipStore.title = 'Live Badge';
                $ToolTipStore.body = ['When enabled will display a badge in the upper right corner to indicate if the stream is live or offline.',
                    'You can disable this option to hide the badge.'
                ];
                $ToolTipStore.more = '';
            }} />
            <Toggle label="User Count" selected={ count } on:click={ () => count = !count } on:mouseover={() => {
                $ToolTipStore.title = 'User Count';
                $ToolTipStore.body = ['When enabled will display the number of viewers who are watching the live stream in real-time.',
                ];
                $ToolTipStore.more = '';
            }} /> 
            <Toggle label="Multiview" selected={ multiview } on:click={ () => multiview = !multiview } on:mouseover={() => {
                $ToolTipStore.title = 'Multiview';
                $ToolTipStore.body = ['When enabled will give viewer control to switch between multiple sources being broadcast to the same stream. Typically this is used to provide an interactive experience where there are multiple camera feeds.',
                    'When disabled, a view of only a single Main stream will be displayed.'
                ];
                $ToolTipStore.more = 'https://docs.dolby.io/streaming-apis/docs/multisource-streams';
            }} /> 
            </div>

        </div>
        <div class="p-0 text-xs">
            <div>
                <EditableSetting label="Offline Image" bind:value={ offlineImageUrl } placeholder="https://www.dolby.com/siteassets/homepage/dolby.io-1080-square-graphic.jpg" tooltip={true} on:mouseover={() => {
                    $ToolTipStore.title = 'Offline Image';
                    $ToolTipStore.body = ['This poster image will be shown whenever the stream is offline in place of the default video element behavior.',
                        'This should be a public url that serves a static jpg or png image and typically will be used to communicate the broadcast will begin soon.'
                    ];
                    $ToolTipStore.more = '';
                }}/>
            </div>
                {#if view }
                    <button class="m-0 items-center" on:click={ () => view = false }>Close</button>
                {:else}
                    <button class="m-0 items-center" on:click={ () => view = true }>Preview</button>
                {/if}

            <button on:click={ () => { muted = false; play = false; volume = false; settings = false; fullscreen = false; pip = false; cast = false; badge = false; count = false; multiview = false; } }>Hide All Controls</button>
        </div>

    </div>
</div>
<div class="grid grid-cols-1 bg-gray-100 ml-4 mt-0 mb-0">
    {#if view}
        <div class="flex mb-4 place-content-center">
                {@html embedCode}
        </div>
        <div class="flex mb-4 place-content-center">
        {#if !online}
            <p class="mb-4 italic">Begin a broadcast to preview this stream.</p>
        {/if}
        </div>
    {/if}
</div>