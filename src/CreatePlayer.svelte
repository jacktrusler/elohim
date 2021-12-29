<script>
    import { getRandomAvatar } from "@fractalsoftware/random-avatar-generator";

    let name;
    let elo = 500;
    export let playerList = [];

    let valid;
    let avatar = getRandomAvatar(5);

    function generateAvatar() {
        avatar = getRandomAvatar(5);
    }

    let numCheck;

    function savePlayer() {
        numCheck = /\D/.test(elo) //if not numbers return true
        if (numCheck){
            console.log('elo must only contain numbers')
        } else {
        playerList = [...playerList, {
            selected: false,
            name: name,
            elo: elo,
            avatar: avatar
        }];
        name = "";
        elo = "";
        avatar = getRandomAvatar(5);
        }
    }

    $: {
        valid = name && !name.empty && !/\D/.test(elo) && !elo.empty;
    }
</script>

<div class="create-player">
    <p>Create a new player</p>

    <div class="inputs">

        <div>Name:</div>
        <input type="text" bind:value={name}/>

        <div>Elo:</div>
        <input 
        class:elo-error={/\D/.test(elo)} 
        class:elo={!/\D/.test(elo)}
        type="text" bind:value={elo}/>


        <img src={`data:image/svg+xml;base64,${btoa(avatar)}`}  alt="avatar"/>

        <button on:click={generateAvatar}>new avatar</button>
    </div>
    <button disabled={!valid} on:click={savePlayer}>save player</button>
</div>

<style>
    .create-player {
        border: solid;
    }

    img {
        border: solid;
        max-width: 50px;
    }

    .inputs {
        display:flex;
        justify-content: space-around;
        align-items: center;
    }

    .elo {
        max-width: 80px;
    }

    .elo-error{
        color: red;
        max-width: 80px;
    }
</style>

