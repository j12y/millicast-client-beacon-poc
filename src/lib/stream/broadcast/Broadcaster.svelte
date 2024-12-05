<script lang="ts">

    export let token = '';
    export let name = '';

    async function broadcast(evt) {

        const startStreaming = async () => {
            const mediaStream = await navigator.mediaDevices.getUserMedia({
                audio: true,
                video: true
            });

            const videoNode = document.getElementById('streaming-video-placeholder');
            videoNode.srcObject = mediaStream;
            videoNode.hidden = false;
            videoNode.autoplay = true;

            const broadcastOptions = {
                mediaStream: mediaStream,
            };
  
            try {
                await publisher.connect(broadcastOptions);
                console.log('Broadcast has begun.');
            } catch (e) {
                console.error('Failed to begin broadcast', e);
            }
        }

        const tokenGenerator = () => millicast.Director.getPublisher({
            token: token, 
            streamName: name,
        });

        const publisher = new millicast.Publish(name, tokenGenerator)
        await startStreaming();
    }
</script>

<video width="640" height="480" id="streaming-video-placeholder" class="place-self-center" controls>
    This browser does not support video playback.
</video>

<button on:click={ broadcast }>Go Live</button>


