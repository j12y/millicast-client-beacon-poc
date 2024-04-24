<script lang="ts">
    import { Director, View } from '@millicast/sdk';

    export let accountId;
    export let streamName;

    let videoPlayer;
    let miniPlayer;

    let sources = {};

    main();

    async function main() {
        const subscriber = () => Director.getSubscriber({
            streamName: streamName,
            streamAccountId: accountId
        });

        const view = new View(streamName, subscriber);
        view.on('track', handleTrackEvent);
        view.on("broadcastEvent", handleBroadcastEvent);


        try {
            await view.connect({
                events: ['active', 'inactive', 'stopped', 'layers', 'viewercount']
            });
        } catch (e) {
            view.reconnect();
        }
    }

    // Track events indicate... TODO
    async function handleTrackEvent(event) {
        videoPlayer.srcObject = event.streams[0];
        videoPlayer.hidden = false;
        videoPlayer.autoplay = true;
    }

    /**
     *  Broadcast events indicate when a stream state has changed for a broadcast source.
     *  It may be: Active, Inactive, Stopped, Vad, Layers, Migrate, or Viewercount
     * 
     *  @param event 
     * 
     *  https://docs.dolby.io/streaming-apis/docs/viewer-events
     *  https://millicast.github.io/millicast-sdk/Signaling.html#event:broadcastEvent
    */
    async function handleBroadcastEvent(event) {
        const { name, data } = event;
        console.log(name);
        switch (name) {
            case 'viewercount':
                handleViewerCountBroadcastEvent(data);
                break;
            case 'active':
                handleActiveBroadcastEvent(data);
                break;
            case 'inactive':
                handleInActiveBroadcastEvent(data);
                break;
            case 'stopped':
                handleStoppedBroadcastEvent(data);
                break;
            case 'layers':
                handleLayersBroadcastEvent(data);
                break;
            default:
                console.log("Unhandled Broadcast Event: ", event);
        }
    }

    /**
     * When a viewercount event fires, somebody has started or stopped
     * receiving the stream. The data includes the total count of 
     * viewers. You might use this to update a graphic overlay.
     * 
     * @param data
     */
    function handleViewerCountBroadcastEvent(data) {
        console.log(data);
    }

    /**
     * TODO
     * 
     * @param data
     */
    function handleLayersBroadcastEvent(data) {
        console.log(data);
    }

    /**
     * TODO
     * 
     * @param data
     */
    function handleActiveBroadcastEvent(data) {
        console.log(data);
    }

    /**
     * TODO
     * 
     * @param data
     */
    function handleInActiveBroadcastEvent(data) {
        console.log(data);
    }

    /**
     * TODO
     * 
     * @param data
     */
    function handleStoppedBroadcastEvent(data) {
        console.log(data);
    }


</script>


<div>
    <video width="640" height="360" bind:this={ videoPlayer } class="vidBox" controls>
        This browser does not support video playback.
    </video>

    <video width="320" height="180" bind:this={ miniPlayer } class="vidBox" autoplay="autoplay" controls>
        This browser does not support video playback.
    </video>
</div>