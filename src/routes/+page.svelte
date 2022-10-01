<script>
    import Cards from "$lib/cards.svelte";
    
    export let data;
    data = data.data;
    console.log(data)
</script>

<section class="hero px-5 relative">
    <p class="font-comforta text-5xl py-10 text-sarthi-6  ">Hi,</p>
    <p class="font-popins text-sarthi-3 text-2xl pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, officia voluptas. Asperiores dolore alias nisi. Quod facere quidem obcaecati cum hic, sit consectetur commodi possimus unde explicabo distinctio, illum recusandae.</p>
    <!-- <img class="absolute right-3 h-80 bottom-10" src="https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt=""> -->
</section>

<section class="discipline bg-sarthi-1 px-5 py-3">
    <p class="font-comforta text-sarthi-2 text-3xl ">Planning for engineering</p>
    <p class="font-popins text-sarthi-3 text-xl ">You are at right place</p>
    <Cards {data} />
</section>

<section class="discipline bg-sarthi-1 px-5 py-3">
    <p class="font-comforta text-sarthi-2 text-3xl ">Interested in medical field</p>
    <p class="font-popins text-sarthi-3 text-xl ">We are here to help</p>
    <Cards {data} />
</section>




<style>
    .hero
    {
        @apply bg-sarthi-7;
    }

    .banner {
        @apply w-auto text-neutral-50 font-comforta p-3;
    }

</style>