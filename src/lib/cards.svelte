 <script>
    export let data;
</script>

<div class="grid grid-cols-1 relative md:grid-cols-2 lg:grid-cols-4">
    {#each data as person}

        <div class="m-5 flex bg-neutral-700 py-2 px-4 rounded-md text-lg opacity-95 hover:opacity-100">
            <img class="h-20 w-20 rounded-full" src="https://loremflickr.com/640/360/girl?random={person.id}" alt="girls">
            <div class="flex flex-col ml-7 justify-center text-white">
                <p>First Last</p>
                <p>IIT-M</p>
            </div>
        </div>
    
            <!-- <div class="mx-3 my-2 bg-tetra border-2 border-black text-neutral-50 hover:bg-tri rounded font-popins shadow-lg shadow-gray-600 hover:shadow-md hover:shadow-gray-500 hover:border-none group relative">
                <img class="w-full h-full opacity-100" src="https://loremflickr.com/640/360/girl?random={person.id}" alt="placeholder">
                <div class="p-2 w-full scale-0 group-hover:scale-100 absolute bottom-2 bg-tri opacity-75">
                    {person.title}
                </div>
            </div> -->

    {/each}

    <button class="bg-sarthi-2 w-56 h-10 rounded-full absolute bottom-4 right-4 border hover:bg-neutral-600 hover:text-white hover:border-black">View More</button>
</div>

<style>
    /* .card
    {

    } */
</style>