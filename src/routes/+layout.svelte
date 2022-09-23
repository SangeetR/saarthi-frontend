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
    
    <footer class=" text-neutral-50 mb-0 py-10">
        Designed and developed by : @rathi_sangeet    
    </footer>
</div>