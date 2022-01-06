<script>
    const login = async () => {
        console.log('click')
        const res = await fetch('api/login', {
            method: "POST",
            body: JSON.stringify({
                username: 'lucas',
                password: 'dev123'
            })
        })
        const data = await res.json()
        console.log(data)

    }
</script>

<h1>login page</h1>

<button on:click={login}>Login</button>