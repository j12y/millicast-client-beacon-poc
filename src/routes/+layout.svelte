<script>
  import "../app.css";
</script>

<svelte:head>
    <title>Dolby Millicast</title>
</svelte:head>

<div class="container mx-auto px-8 mt-6">
  <div class="flex inline-block align-top">
    <div class="align-bottom mt-2"><a href="/"><img alt="dolby.io" class="max-w-xs" width="150" src="https://d21buns5ku92am.cloudfront.net/68644/images/338663-2019_Dolby_Corporate_Blk-ae8fe9-medium-1574541724.png"/></a></div>
    <h1 class="my-auto"> | Millicast Real-time Streaming</h1>
  </div>
  <slot/>
</div>

