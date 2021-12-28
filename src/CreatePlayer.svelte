<script>
    import { getRandomAvatar } from "@fractalsoftware/random-avatar-generator";

    let name;
    let elo;
    export let playerList = [];

    let valid = false;

    let avatar = getRandomAvatar(5);
    function generateAvatar() {
        avatar = getRandomAvatar(5);
    }

    function savePlayer() {
        playerList = [...playerList, {
            name: name,
            elo: elo,
            avatar: avatar
        }];
        name = "";
        elo = "";
        avatar = getRandomAvatar(5);
    }

    $: {
        valid = name && !name.empty && elo && !elo.empty;
    }
</script>

<div>
    <p>Create a new player</p>
    <div>Name</div> <input type="text" bind:value={name}/>
    <div>Elo</div> <input type="text" bind:value={elo}/>
    <div>image</div><img src={`data:image/svg+xml;base64,${btoa(avatar)}`}  alt="avatar"/>
    <button on:click={generateAvatar}>new avatar</button>
    <button disabled={!valid} on:click={savePlayer}>save player</button>
</div>

<style>
    img {
        border: solid;
    }

</style>

