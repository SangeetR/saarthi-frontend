<script>
    import Cards from "$lib/cards.svelte";
    
    export let data;
    data = data.data;
    console.log(data)
</script>

<section class="bg-neutral-400">
    
    <div class="medical h-screen">
        <h2 class="banner">Our Medical Team</h2>
        <Cards {data} />
    </div>
    
    <div class="engineering">
        <h2 class="banner">Our Engineering Team</h2>
        <p class="font-popins">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum recusandae quo sit tenetur. Cum beatae eaque fugit sequi sunt deserunt doloribus odio eveniet eius dignissimos rerum provident, atque eum maiores?
            <!-- <Cards {data} />    -->
        </p>
    </div>

</section>




<style>
    .banner {
        @apply w-auto bg-sarthi-1 text-neutral-50 font-comforta p-3;
    }

</style>