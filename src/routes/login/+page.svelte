<script>

</script>

<div class="main w-screen h-96">
    <!-- <br> -->
    <div class="bg-primary w-full h-full">
        <div class="bg-tri w-full h-full opacity-90">
            <h1 class="text-center text-neutral-50 text-5xl">Login</h1>
            <form action="" class="p-3 text-neutral-50 text-lg">
                <div class="m-5">
                    <label for="username">Username</label>
                    <input class="input-field" type="text" name="username" id="username">
                </div>
                
                <div class="m-5">
                    <label for="password">Password</label>
                    <input class="input-field" type="text" name="password" id="password">
                </div>
    
            </form>
        </div>

    </div>
    <!-- <br> -->
</div>


<style>
    .main{
        /* background-image: url(/static/bg-login.png); */
        background-image: url('/images/bg-login.png');
        background-color: aquamarine;
    }

    .input-field
    {
        @apply w-1/3 px-10 mx-auto text-neutral-900;
    }
</style>