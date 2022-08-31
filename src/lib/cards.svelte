 <script>
    export let data;
</script>

<div class="grid grid-cols-4 relative">
    {#each data as person}
            <div class="mx-3 my-2 bg-tetra border-2 border-black text-neutral-50 hover:bg-tri rounded font-popins shadow-lg shadow-gray-600 hover:shadow-md hover:shadow-gray-500 hover:border-none group relative">
                <img class="w-full h-full opacity-100" src="https://loremflickr.com/640/360/girl?random={person.id}" alt="placeholder">
                <div class="p-2 w-full scale-0 group-hover:scale-100 absolute bottom-2 bg-tri opacity-75">
                    {person.title}
                </div>
            </div>
    {/each}

    <button class="bg-penta w-56 h-10 rounded-full absolute bottom-4 right-4">View More</button>
</div>

<style>
    /* .card
    {

    } */
</style>