<script lang="ts">
    import { Director, View } from '@millicast/sdk';

    export let accountId;
    export let streamName;

    let videoPlayer;

    async function main() {
        const tokenGenerator = () => Director.getSubscriber({
        streamName: streamName,
        streamAccountId: accountId
        });

        const millicastView = new View(streamName, tokenGenerator);
        millicastView.on('track', (event) => {
            videoPlayer.srcObject = event.streams[0];
            videoPlayer.hidden = false;
            videoPlayer.autoplay = true;
        });

        try {
            await millicastView.connect();

        } catch (e) {
            millicastView.reconnect();
        }
    }

    main();

</script>

<div>
    <video width="640" height="360" bind:this={ videoPlayer } class="vidBox" controls>
        This browser does not support video playback.
    </video>
</div>