<script>
    export let IsloggedIn = false;
    let name = 'Sarathi';
</script>

<div class="bg-orange-600 text-neutral-50 font-comforta px-5 sticky top-0 left-0 right-0 ">
    <div class="flex justify-between py-1  text-sarthi-1 align-middle">
        <div class="name text-4xl ">{name}</div>
        <div class="navs flex">
            <a href="/" class="nav">Home</a>
            <a href="/testimonials" class="nav">Testimonials</a>
            <a href="/about" class="nav">About</a>
            <a href="/contactus" class="nav">Contact Us</a>
            {#if IsloggedIn}
            <a href="/profile" class="nav">Profile</a>
            {:else}
            <a href="/login" class="nav">Login</a>
            {/if}
        </div>
    </div>
</div>


<style>
    .nav
    {
        @apply px-3 py-1;
    }
</style>