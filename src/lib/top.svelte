<script>
    export let account = false;
</script>


<div class="bg-sarthi-2 text-neutral-50 px-7 py-3 font-comforta">
    <div class="head flex justify-between">
        {#if account}
        <h1 class="text-6xl mt-10 ml-10">Saarthi</h1>
        <div>
            <img class="w-20 h-24 my-6 mr-6" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Girl">
            <a class="p-2 hover:bg-secondary rounded-full" href="/login">Login</a>
        </div>
        {:else}
        <h1 class="text-6xl my-7 mx-auto">Saarthi</h1>
        {/if}
    </div>
    <div class="flex justify-between">
        <div>
            <a href="/">Home</a>
            <a href="/testimonials">Testimonials</a>
        </div>
        <div class="left white-text">
            <a href="/about">About</a>
            <a href="/contactus">Contact Us</a>
        </div>
    </div>
</div>

<style>
    a{
        @apply p-2 hover:bg-secondary rounded-sm;
    }
</style>