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
        console.log(typeof(elo))
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
    <div class='name-elo'>
        <input placeholder="Enter Name" id='input-field' type="text" bind:value={name}/>
    
        <input 
        placeholder="Enter Elo"
        id='input-field'
        class:elo-error={/\D/.test(elo)} 
        class:elo={!/\D/.test(elo)}
        type="number" bind:value={elo}/>
    </div>    

    <div class='avatar-container'>
        <div>
            <img src={`data:image/svg+xml;base64,${btoa(avatar)}`}  alt="avatar"/>
        </div>
        <div>
            <button on:click={generateAvatar}>new avatar</button>
        </div>
    </div>
</div>

<div class='save-player'> 
    <button disabled={!valid} on:click={savePlayer}>save player</button>
</div>

<style>
    .create-player {
        display: flex;
        border: solid;
        height: 18vh;
    }

    .name-elo{
        padding-top: 10px;
        height: 100%; 
        width: 50%;
    }

    #input-field{
        align-self: center;
        width: 50%;
    }

    .save-player{
        padding-top: 20px;
    }
    .avatar-container{
        padding-top: 10px;
        height: 100%;
        width: 50%;
    }

    img {
        max-width: 50px;
    }

    .elo-error{
        color: red;
    }
</style>

