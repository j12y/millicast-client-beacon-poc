<script lang="ts">
    export let data

    import Broadcast from "$lib/broadcast/broadcast.svelte";
    import Playback from "$lib/playback/playback.svelte";

    let broadcast;
    let playback;


    const accountID = data.accountId;
    const streamName = data.name;
    let hostedViewerUrl = `https://viewer.millicast.com?streamId=${data.accountId}/${data.name}&autoPlay=false`;


    function handleBack(evt) { 
            window.location.assign('/');
    }

    function copyToClipboard(evt) {
        let original = evt.target.value;

        evt.target.select();
        evt.target.setSelectionRange(0,99999);
        document.execCommand("copy");
        evt.target.value = "Copied";
        setTimeout(() => {
            evt.target.value = original;
        }, 1000)
    }


    function togglePlayer(evt) {
        let obj = document.getElementById("accordion-collapse-body-player")
        if (obj?.classList.contains("hidden")) {
            obj?.classList.remove("hidden");
        } else {
            obj?.classList.add("hidden");
        }
    }

    function toggleWHEP(evt) {
        let obj = document.getElementById("accordion-collapse-body-whep")
        if (obj?.classList.contains("hidden")) {
            obj?.classList.remove("hidden");
        } else {
            obj?.classList.add("hidden");
        }
    }

    function toggleSDK(evt) {
        let obj = document.getElementById("accordion-collapse-body-sdk")
        if (obj?.classList.contains("hidden")) {
            obj?.classList.remove("hidden");
        } else {
            obj?.classList.add("hidden");
        }
    }

    function handleTab(evt) {
        evt.preventDefault();

        console.log(evt);
        console.log(`playback=${ playback.visible() }`)
        console.log(`broadcast=${ broadcast.visible() }`)
        console.log(val);


    }
</script>

<svelte:head>
    <title>{ data.name } | Details | Dolby Millicast</title>
</svelte:head>

<div id="message"></div>



<div class="grid grid-cols-5">
    <div class="col-span-1">
        <div>
            <button on:click={ handleBack }>← All Streams</button>
        </div>
        <br/>

    </div>
    <div class="col-span-4">
        <h2>{ data.name } </h2>

        <div>

        {#if data.details.live}
        <span class="bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-white uppercase border">Live</span>
        {/if}

        {#if data.public}
        <span class="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-white uppercase border">Public</span>
        {/if}

        {#if data.multisource}
        <span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-white uppercase border">Multi-source</span>
        {/if}

        </div>

    </div>
</div>

<div class="md:flex">
    <ul class="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
        <li>
            <a href="/" on:click={ handleTab } class="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-200 hover:bg-gray-300 w-full dark:bg-gray-200 dark:hover:bg-gray-300 dark:hover:text-white">
                <svg class="w-4 h-4 me-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 12.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/>
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 3h-2l-.447-.894A2 2 0 0 0 12.764 1H7.236a2 2 0 0 0-1.789 1.106L5 3H3a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V5a2 2 0 0 0-2-2Z"/>
                </svg>
                Broadcast
            </a>
        </li>
        <li>
            <a href="/" on:click={ handleTab } class="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-200 hover:bg-gray-300 w-full dark:bg-gray-200 dark:hover:bg-gray-300 dark:hover:text-white">
                <svg class="w-4 h-4 me-2 text-gray-500 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill="currentColor" d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z"/>
                    <path fill="#fff" d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z"/>
                </svg>
                Security
            </a>
        </li>
        <li>
            <a href="/" on:click={ handleTab } class="inline-flex items-center px-4 py-3 text-white bg-slate-700 rounded-lg w-full dark:bg-grey-400" aria-current="page">
                <svg class="w-4 h-4 me-2 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
                    <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z"/>
                </svg>
                Playback
            </a>
        </li>
        <li>
            <a href="/" on:click={ handleTab } class="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-200 hover:bg-gray-300 w-full dark:bg-gray-200 dark:hover:bg-gray-300 dark:hover:text-white">
                <svg class="w-4 h-4 me-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18"><path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/></svg>
                History
            </a>
        </li>
    </ul>

    <Playback bind:this={ playback }/>
    <Broadcast bind:this={ broadcast }/>


    <div class="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-500 rounded-lg w-full">
        <h1 class="mt-2">Playback</h1>
        <p class="mb-2">Provide a real-time view of the stream.</p>
            
        <h2>Embedded Player</h2>
        <p>Customize and embed the Dolby Millicast player into your own web application.</p>
        <div id="accordion-collapse" data-accordion="collapse">
            <h4 id="accordion-collapse-heading-player">
            <button on:click={ togglePlayer } class="flex items-center justify-between w-full p-2 font-medium rtl:text-right text-gray-500 bg-gray-100 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 shadow-gray-100 hover:shadow-gray-200" data-accordion-target="#accordion-collapse-body-player" aria-expanded="true" aria-controls="accordion-collapse-body-player">
                <span>Hosted Player</span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                </svg>
            </button>
            </h4>
            <div id="accordion-collapse-body-player" class="hidden" aria-labelledby="accordion-collapse-heading-player">
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    <div class="ml-8">
                        {#if data.details.live }
                        <p>Press play to see this broadcast live.</p>
                        <iframe title="Hosted Player" src={ hostedViewerUrl } allowfullscreen width="640" height="480"></iframe>
                        {:else}
                        <p class="mb-4">You must begin broadcasting before you can view this stream.</p>
                        {/if}
                    </div>

                    <div class="ml-8">
                        <div class="grid grid-cols-1">
                            <div>
                                <label>Viewer URL</label>
                                <div class="relative mb-2 flex items-center pointer-events-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute left-2 mb-4 mt-auto">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6" />
                                    </svg>
                                <input type="text" value="{ hostedViewerUrl }" aria-label="WHEP URL" class="pl-12 mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 cursor-not-allowed" on:click={ copyToClipboard }>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <h2 class="mt-4 mb-2">WHEP</h2>
        <p>The WebRTC-HTTP Egress Protocol (WHEP) standard provides compatibility with a number of players.</p>
        <div id="accordion-collapse" data-accordion="collapse">
            <h4 id="accordion-collapse-heading-whep">
            <button on:click={ toggleWHEP } class="flex items-center justify-between w-full p-2 font-medium rtl:text-right text-gray-500 bg-gray-100 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 shadow-gray-100 hover:shadow-gray-200" data-accordion-target="#accordion-collapse-body-whep" aria-expanded="true" aria-controls="accordion-collapse-body-whep">
                <span>WHEP Endpoint</span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                </svg>
            </button>
            </h4>
            <div id="accordion-collapse-body-whep" class="hidden" aria-labelledby="accordion-collapse-heading-whep">
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    <div class="ml-8">
                        <div class="grid grid-cols-1">
                            <div>
                                <label>URL</label>
                                <div class="relative mb-2 flex items-center pointer-events-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute left-2 mb-4 mt-auto">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6" />
                                    </svg>
                                <input type="text" value="https://director.millicast.com/api/whep/{ data.accountId }/{ data.name }" aria-label="WHEP URL" class="pl-12 mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 cursor-not-allowed" on:click={ copyToClipboard }>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <h2 class="mt-4 mb-2">Build Your Own Player</h2>
        <p>Build your own player using a Client SDK.</p>
        <div id="accordion-collapse" data-accordion="collapse">
            <h4 id="accordion-collapse-heading-sdk">
            <button on:click={ toggleSDK } class="flex items-center justify-between w-full p-2 font-medium rtl:text-right text-gray-500 bg-gray-100 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 shadow-gray-100 hover:shadow-gray-200" data-accordion-target="#accordion-collapse-body-sdk" aria-expanded="true" aria-controls="accordion-collapse-body-sdk">
                <span>SDK Credentials</span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                </svg>
            </button>
            </h4>
            <div id="accordion-collapse-body-sdk" class="hidden" aria-labelledby="accordion-collapse-heading-sdk">
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    <div class="ml-8">
                        <div class="grid grid-cols-2">
                            <div>
                                <label>Account ID</label>
                                <div class="relative mb-2 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute left-2 mb-4 mt-auto">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6" />
                                    </svg>
                                    <input type="text" value="{ data.accountId }" aria-label="Account ID" class="pl-12 mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 cursor-not-allowed" on:click={ copyToClipboard }>
                                </div>
                            </div>
                            <div>
                                <label>Stream Name</label>
                                <div class="relative mb-2 flex items-center pointer-events-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute left-2 mb-4 mt-auto">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6" />
                                    </svg>
                                    <input type="text" value="{ data.name }" aria-label="Stream Name" class="pl-12 mb-6 mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg caret-purple-500 hover:ring-purple-500 hover:border-purple-500 focus:ring-purple-500 focus:border-purple-500 active:ring-purple-500 active:border-purple-500 block w-full p-2.5 cursor-not-allowed" on:click={ copyToClipboard }>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-4">
            <div class="gap-4 place-items-center"><button class="text-sm bg-gray-200 shadow-slate-300 text-gray-500 hover:text-gray-50"><a href="https://docs.dolby.io/streaming-apis/docs/web" target="_blank">JavaScript SDK</a></button></div>
            <div class="gap-4 place-items-center"><button class="text-sm bg-gray-200 shadow-slate-300 text-gray-500 hover:text-gray-50"><a href="https://docs.dolby.io/streaming-apis/docs/android" target="_blank">Android SDK</a></button></div>
            <div class="gap-4 place-items-center"><button class="text-sm bg-gray-200 shadow-slate-300 text-gray-500 hover:text-gray-50"><a href="https://docs.dolby.io/streaming-apis/docs/ios" target="_blank">iOS SDK</a></button></div>
            <div class="gap-4 place-items-center"><button class="text-sm bg-gray-200 shadow-slate-300 text-gray-500 hover:text-gray-50"><a href="https://docs.dolby.io/streaming-apis/docs/client-sdks" target="_blank">more...</a></button></div>
        </div>

        <h2 class="mt-4 mb-2">Monitoring Apps</h2>
        <p>Apps for monitoring a stream starting with a sample application.</p>
        <div class="grid grid-cols-4 text-sm">
            <div class="gap-4 place-items-center"><button class="bg-gray-200 shadow-slate-300 text-gray-500 hover:text-gray-50"><a href="https://github.com/dolbyio-samples/rts-app-react-publisher-viewer" target="_blank">React Sample</a></button></div>
            <div class="gap-4 place-items-center"><button class="bg-gray-200 shadow-slate-300 text-gray-500 hover:text-gray-50"><a href="https://apps.apple.com/us/app/dolby-io-stream-monitor/id1668249838?itsct=apps_box_link&itscg=30200" target="_blank">Android TV</a></button></div>
            <div class="gap-4 place-items-center"><button class="bg-gray-200 shadow-slate-300 text-gray-500 hover:text-gray-50"><a href="https://apps.apple.com/us/app/dolby-io-stream-monitor/id1660826970?itscg=30200&itsct=apps_box_appicon" target="_blank">tvOS</a></button></div>
            <div class="gap-4 place-items-center"><button class="bg-gray-200 shadow-slate-300 text-gray-500 hover:text-gray-50"><a href="https://dolby.io/project-gallery/?_project_gallery_product=real-time-streaming" target="_blank">more...</a></button></div>
        </div>






    </div>
</div>


                <!-- 
                person

                <svg class="w-4 h-4 me-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                </svg>

                headset

                <svg class="w-4 h-4 me-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M7.824 5.937a1 1 0 0 0 .726-.312 2.042 2.042 0 0 1 2.835-.065 1 1 0 0 0 1.388-1.441 3.994 3.994 0 0 0-5.674.13 1 1 0 0 0 .725 1.688Z"/>
                    <path d="M17 7A7 7 0 1 0 3 7a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V7a5 5 0 1 1 10 0v7.083A2.92 2.92 0 0 1 12.083 17H12a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a1.993 1.993 0 0 0 1.722-1h.361a4.92 4.92 0 0 0 4.824-4H17a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3Z"/>
                </svg>

                gear

                <svg class="w-4 h-4 me-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z"/>
                </svg>

                history button

                <li>
                    <a class="inline-flex items-center px-4 py-3 text-gray-400 rounded-lg cursor-not-allowed bg-gray-50 w-full dark:bg-gray-800 dark:text-gray-500">
                        <svg class="w-4 h-4 me-2 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>
                        </svg>
                    History</a>
                </li>
                -->






