<script>
    export let name;
    export let elo;
    $: {
        console.log(name);
        console.log(elo);
    }

</script>

<div>
    <p>Create a new player</p>
    <div>Name</div> <input type="text" bind:value={name}/>
    <div>Elo</div> <input type="text" bind:value={elo}/>
    <div>Image</div> <input type="text" bind:value={elo}/>
</div>

<style>

</style>

