<script>
    import { getRandomAvatar } from "@fractalsoftware/random-avatar-generator";
    import { playerList } from './stores.ts';

    const AVATAR_COMPLEXITY = 6;
    let rules = false;
    let numCheck;

    let name;
    let valid;
    let elo = null;
    let avatar = getRandomAvatar(AVATAR_COMPLEXITY);
    let bgGradient = 'linear-gradient(to right, rgb(169, 116, 116), rgb(87, 87, 167))'

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
            bgGradient = generateNewGradient();
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
<p on:click={()=> {rules = !rules}}>How to Use<br></p>
{/if}
</div>

<div class = 'card-grid'>
    <div class='img-box' on:click={generateAvatar}>
        <img src="/minimalistTriangles.jpg" alt="avatar"/>
    </div>

    <input placeholder="Enter Name" id='input-name' type="text" bind:value={name}/>

    <input 
    placeholder="Enter Elo"
    id='input-elo'
    class:elo-error={/\D/.test(elo)} 
    class:elo={!/\D/.test(elo)}
    type="number" bind:value={elo}/> 
    
</div>

<div class='save-player'> 
    <input id = "save" type="image" src="Save.png" alt='randomize' disabled = {!valid} on:click={savePlayer}/>
</div>

<style>

    .card-grid {
        display: grid;
        margin: 30px auto;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-template-columns: 20px 1fr 1fr 20px;
        width: 200px;
        height: 200px;
        border-radius: 40px;
        box-shadow: 5px 5px 30px 7px black, -5px -5px 30px 7px darkblue;
        cursor: pointer;
        border: 2px solid white;
    }

    .img-box{
        grid-row: 1/5;
        grid-column: 1/5;
        height: inherit;
        border-radius: 40px;
    }

    .img-box img{
        width: 100%;
        height: 100%;
        border-radius: 40px;
    }

    input{
        border-radius: 10px;
    }

    #input-name{
        display: flex;
        align-self: flex-end;
        grid-row: 1;
        grid-column: 2/4;
        width: 160px;
        z-index: 2;
    }

    #input-elo{
        display: flex;
        align-self: flex-end;
        grid-row: 4;
        grid-column: 2/4;
        width: 160px;
        z-index: 2;
    }

    .tutorial{
        display:flex;
        justify-content: center;
        text-align: justify;
        text-justify: inter-word;
        border: solid white;
        border-radius: 10px;
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


    .save-player{
        display: flex;
        width: 100%;
        justify-content: center;
        height: 100px;
    }

    #save{
        height: 70px;
        border: none;
    }

    .elo-error{
        color: red;
    }
</style>
