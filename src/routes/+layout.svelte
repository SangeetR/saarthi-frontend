<script>
    import Head from '$lib/top.svelte'
    import "../style.css"
    import "../app.css"
</script>

<svelte:head>
    <title>Saarthi</title>
</svelte:head>

<div>
    <Head />
    
    <main>
        <slot></slot>
    </main>
    
    <footer class="bg-sarthi-2 text-neutral-50 mb-0 py-10">
        Designed and developed by : @rathi_sangeet    
    </footer>
</div>