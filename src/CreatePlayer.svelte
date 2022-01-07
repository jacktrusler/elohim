<script>
    import { getRandomAvatar } from "@fractalsoftware/random-avatar-generator";
    import { playerList } from './stores.ts';

    const AVATAR_COMPLEXITY = 3;
    let rules = false;
    let numCheck;

    let name;
    let valid;
    let elo = null;
    let avatar = getRandomAvatar(AVATAR_COMPLEXITY);

    function generateAvatar() {
        avatar = getRandomAvatar(AVATAR_COMPLEXITY);
    }

    function savePlayer() {
        numCheck = /\D/.test(elo) //if not numbers return true
        if (numCheck){
            console.log('elo must only contain numbers')
        } else {
            playerList.update(players => {
                return [
                    ...players,
                    {
                        selected: false,
                        name: name,
                        elo: elo,
                        avatar: avatar
                    }
                ]
            });
            name = "";
            elo = null;
            avatar = getRandomAvatar(AVATAR_COMPLEXITY);
        }
    }

    $: {
        valid = name && !name.empty && !/\D/.test(elo) && !elo.empty;
    }
</script>

<div class='tutorial'>
{#if rules}
<div id='rules' on:click={()=> {rules = !rules}}>
<p id='welcome'>
    Welcome to Elohim! 
</p>
    <p>The flag on the left is your avatar. Click on the symbol to change it. 
    Once you've added players, click on the symbols 
    below to move them to teams, randomize, or balance by ELO. <br>--Hide--</p>

</div>
{:else}
<p on:click={()=> {rules = !rules}}>How to Use <br> -- Show -- </p>
{/if}
</div>

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
                <input id = "save" type="image" src="Save.png" alt='randomize' disabled = {!valid} on:click={savePlayer}/>
            </div>
        </div>
    </div>

</div>

<style>
    .tutorial{
        display:flex;
        width: 100%;
        justify-content: center;
        text-align: justify;
        text-justify: inter-word;
    }

    p{
        padding-left: 40px;
        padding-right: 40px;
        color: white;
        font-family: cursive;
        font-size: 1.5rem;
    }

    #rules{
        text-justify: inter-word;
        padding-bottom: 30px;
    }

    .create-player {
        display: flex;
        height: 140px;
        justify-content: center;
    }

    .avatar-container{
        display: flex;
        width: 420px;
        height: 100px;
        min-width: 100px;
        justify-content: space-between;
    }

    .name-elo{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        border-left: solid white;
        border-right: solid white;
        height: 100px; 
        width: 160px;
    }

    #input-field{
        align-self: center;
        width: 140px;
    }

    .save-player{
        display: flex;
        padding-right: 25px;
        align-items: center;
        height: 100px;
    }

    #save{
        height: 70px;
        border: none;
    }

    .img-box{
        display: flex;
        justify-content: center;
        width: 100px;
        height: 100px;
    }

    .elo-error{
        color: red;
    }
</style>
