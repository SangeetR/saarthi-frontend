<script>
    import Top from '$lib/top2.svelte'
    import "../style.css"
    import "../app.css"
</script>

<svelte:head>
    <title>Saarthi</title>
</svelte:head>

<div>
    <Top />
    
    <main>
        <slot></slot>
    </main>
    
    <footer class="bg-sarthi-7 text-sarthi-3 mb-0 py-10 px-5">
        Designed and developed by : @rathi_sangeet    
    </footer>
</div>