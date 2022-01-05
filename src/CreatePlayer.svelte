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
            <button on:click={generateAvatar}>new avatar</button>
        </div>
        <div class='img-box' on:click={generateAvatar}>
            <img src={`data:image/svg+xml;base64,${btoa(avatar)}`}  alt="avatar"/>
        </div>
    </div>
    <div class='save-player'> 
        <button disabled={!valid} on:click={savePlayer}>save player</button>
    </div>
</div>

<style>
    .create-player {
        display: flex;
        border: solid;
        height: 150px;
        justify-content: center;
    }

    .name-elo{
        display: flex;
        flex-flow: wrap;
        justify-content: space-around;
        height: 100%; 
        width: 40%;
        border: solid black
    }

    #input-field{
        align-self: center;
        width: 140px;
    }

    .avatar-container{
        display: flex;
        flex-flow: column wrap;
        height: 100%;
        width: 40%;
        border: solid black
    }

    .save-player{
        display: flex;
        align-items: center;
        border: solid black;
        width: 20%;
        height: 100%;
    }

    .img-box{
        display: flex;
        align-self: center;
        justify-content: center;
        width: 100px;
        height: 100px;
        border: solid green;
    }

    img {
        max-width: 80px;
    }

    .elo-error{
        color: red;
    }
</style>

