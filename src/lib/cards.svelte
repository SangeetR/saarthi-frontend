 <script>
    export let data;
</script>

<div class="grid grid-cols-1 relative md:grid-cols-2 lg:grid-cols-4">
    {#each data as person}

        <a href="#" >

            <div class="m-3 flex py-2 px-4 rounded-md">
                <img class="h-16 w-16 rounded-full" src="https://loremflickr.com/640/360/girl?random={person.id}" alt="girls">
                <div class="flex flex-col ml-7 justify-center text-sarthi-3">
                    <p class="text-xl text-sarthi-2">First Last</p>
                    <p class="text-base">IIT-M</p>
                </div>
            </div>

        </a>

    {/each}

    <button class="absolute bottom-4 right-4 button">View More</button>
</div>

<style>
    /* .card
    {

    } */

    .button
    {
        background: #ff8e3c;
        border-radius: 999px;
        box-shadow: #ff8e3c 0 10px 20px -10px;
        box-sizing: border-box;
        color: #FFFFFF;
        cursor: pointer;
        font-family: Inter,Helvetica,"Apple Color Emoji","Segoe UI Emoji",NotoColorEmoji,"Noto Color Emoji","Segoe UI Symbol","Android Emoji",EmojiSymbols,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans",sans-serif;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        opacity: 1;
        outline: 0 solid transparent;
        padding: 8px 18px;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        width: fit-content;
        word-break: break-word;
        border: 0;
    }
</style>