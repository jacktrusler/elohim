<script>
  import randomAdjNoun from './randomAdjNoun.ts'
  import Player from './Player.svelte'
  export let playerList;
  let team1 = [];
  let team2 = [];
  const team1name = randomAdjNoun();
  const team2name = randomAdjNoun();
  
  function addTeamOne(){
    const unselectedPlayers = [];
    for (let i = 0; i<playerList.length; i++ ){
      if (playerList[i].selected === true){
        team1 = [...team1, playerList[i]];
        playerList[i].selected = false;
      } else {
        unselectedPlayers.push(playerList[i]);
      }
    }
    playerList = unselectedPlayers;
  }

  function addTeamTwo(){
    const unselectedPlayers = [];
    for (let i = 0; i<playerList.length; i++ ){
      if (playerList[i].selected === true){
        team2 = [...team2, playerList[i]];
        playerList[i].selected = false;
      } else {
        unselectedPlayers.push(playerList[i]);
      }
    }
    playerList = unselectedPlayers;
  }

  function balanceTeams(){
    console.log(p)
  }
  
</script>

<div class="button-container">
  <button class="team-button" on:click={addTeamOne}>Team One</button>
  <button class="balance" on:click={balanceTeams}>Auto Balance</button>
  <button class="team-button" on:click={addTeamTwo}>Team Two</button>
</div>
<div class="teams-container">
  
  <div class='team-name-1'>
    <p >{team1name}</p>
    {#each team1 as {selected, name,elo,avatar}}
    <div class="player">
      <Player {selected} {name} {elo} {avatar}/>
    </div>
    {/each}
  </div>

  <div class='team-name-2'>
    <p>{team2name}</p>
    {#each team2 as {selected, name,elo,avatar}}
    <div class="player">
      <Player {selected} {name} {elo} {avatar}/>
    </div>
    {/each}  
  </div>
</div>

<style>
  .button-container{
    padding-top: 1em;
    display:flex;
    justify-content: space-around;
  }
  .team-name-1 {
    color: green;
    border: solid green;
    width: 45%;
  }

  .team-name-2 {
    color: magenta;
    border: solid magenta;
    width: 45%;
  }

  .teams-container{
		display: flex;
		border: solid red;
		max-width: none;
    padding: 1em;
		align-self: flex-end;
		justify-content: space-around;
	}
</style>
