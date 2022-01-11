<script>
    import { playerList } from './stores.ts';

    let rules = false;
    let numCheck;

    let name;
    let valid;
    let elo = null;
    let avatar = "/minimal/minimalistTriangles.png"

    function generateAvatar() {
        let allAvatars = [];
        allAvatars = ['/minimal/avocado.png','/minimal/bunnies.png','/minimal/cats.png','/minimal/hearts.png',
                    '/minimal/lighthouse.png', '/minimal/minimalistTriangles.png', '/minimal/moon.png',
                    '/minimal/mountain.png', '/minimal/saturn.png', '/minimal/streetsign.png', '/minimal/whale.png']

        avatar = allAvatars[Math.floor(Math.random() * allAvatars.length)]
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
            avatar = avatar;
            generateAvatar();
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
    <p>Enter your name and ELO into the boxes below.
    Once you've added players, click on the symbols 
    to move them to teams, randomize, or balance by ELO. <br>--Hide--</p>

</div>
{:else}
<p id='how-to' on:click={()=> {rules = !rules}}>How to Use<br></p>
{/if}
</div>

<div class = 'template-container'>
    <div class = 'card-grid'>
        <div class='img-box' on:click={generateAvatar}>
            <img src={avatar} alt="avatar"/>
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
        <input id = "save" type="image" src="arrows-right.png" alt='randomize' disabled = {!valid} on:click={savePlayer}/>
    </div>
</div>

<style>

    .tutorial {
        display: flex;
        justify-content: center;
    }
    
    .tutorial p {
        text-justify: inter-word;
        border: solid gold;
        border-radius: 10px;
        color: gold;
        font-size: 1.5rem;
    }

    #how-to{
        width: 150px;
    }

    #rules{
        text-justify: inter-word;
    }
    
    .template-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: auto;
    }
    
    .card-grid {
        grid-column: 2;
        display: grid;
        margin: 30px auto;
        grid-template-rows: 50px 50px 50px 50px;
        grid-template-columns: 20px 80px 80px 20px;
        width: 200px;
        height: 200px;
        border-radius: 40px;
        box-shadow: 0px 0px 20px 2px darkgoldenrod;
        cursor: pointer;
        border: 2px solid gold;
    }
    
    .save-player{
        grid-column: 3;
        display: flex;
        align-self: center;
        height: 100px;
    }
    
    #save{
        height: 200px;
        border: none;
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

    .elo-error{
        color: red;
    }
</style>
