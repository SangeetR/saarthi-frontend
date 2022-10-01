<script>
    import {fade} from 'svelte/transition'

    let text = 'Sign Up';

    function banner()
    {
        text = 'Sign In' == text ? 'Sign Up' : 'Sign In'
    }

    setInterval(banner, 2500)
</script>

<div class="main w-screen bg-sarthi-1 p-20 ">
        <div class="p-10 m-auto rounded-md">
            <center>

                <p trasition:fade class="font-comforta text-sarthi-7 text-3xl">{text}</p>
                <!-- <div class="flex space-x-0 text-black rounded-3xl bg-sarthi-1 w-fit">
                    <p class="bg-sarthi-6 rounded-3xl px-5 py-2 w-48">Sign In</p>
                    <p class="bg-sarthi-1 rounded-3xl px-5 py-2 w-48">Sign Up</p>
                </div> -->

            </center>
            <!-- <h1 class="font-comforta text-center text-sarthi-6 text-5xl">Login</h1> -->
            <form action="" class="m-10 p-3 text-lg w-auto">
                <div class="m-5 font-popins text-sarthi-5">
                    <label for="mobile">Enter your mobile number</label>
                    <br>
                    <input class="input-field" type="text" name="username" id="username">
                </div>
                
                <!-- <div class="m-5">
                    <label for="password">Password</label>
                    <input class="input-field" type="text" name="password" id="password">
                </div>
     -->
                <input class="button" type="button" value="submit">
            </form>
        </div>
</div>


<style>
    .input-field
    {
        @apply w-auto px-10 mx-auto text-neutral-900;
    }

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