<script>
    import { getRandomAvatar } from "@fractalsoftware/random-avatar-generator";
    const AVATAR_COMPLEXITY = 3;

    export let playerList = [];

    let numCheck;

    let name;
    let valid;
    let elo = 500;
    let avatar = getRandomAvatar(AVATAR_COMPLEXITY);

    function generateAvatar() {
        avatar = getRandomAvatar(AVATAR_COMPLEXITY);
    }

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
        avatar = getRandomAvatar(AVATAR_COMPLEXITY);
        }
    }

    $: {
        valid = name && !name.empty && !/\D/.test(elo) && !elo.empty;
    }
</script>

<div class="create-player">
    <div class="player-container">
        <div class='avatar-container'>

            <div class='img-box' on:click={generateAvatar}>
                <img src={`data:image/svg+xml;base64,${btoa(avatar)}`}  alt="avatar"/>
            </div>

            <div class='name-elo'>
                <input placeholder="Enter Name" id='input-field' type="text" bind:value={name}/>
            
                <input 
                placeholder="Enter Elo"
                id='input-field'
                class:elo-error={/\D/.test(elo)} 
                class:elo={!/\D/.test(elo)}
                type="number" bind:value={elo}/>
            </div>    
            <div class='save-player'> 
                <button disabled={!valid} on:click={savePlayer}>save player</button>
            </div>
        </div>
    </div>

</div>

<style>
    .create-player {
        display: flex;
        height: 140px;
        justify-content: center;
    }

    .player-container{
        display: flex;
        justify-content: flex-start;
        height: 100px;
        width: 360px;
        border: solid;
    }

    .avatar-container{
        display: flex;
        height: 100px;
        min-width: 100px;
    }

    .name-elo{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        height: 100px; 
        width: 160px;
        border: solid peachpuff;
    }

    #input-field{
        align-self: center;
        width: 140px;
    }

    .save-player{
        display: flex;
        align-items: center;
        border: solid black;
        height: 100px;
    }

    .img-box{
        display: flex;
        justify-content: center;
        width: 100px;
        height: 100px;
        border: solid darkseagreen;
    }

    .elo-error{
        color: red;
    }
</style>
