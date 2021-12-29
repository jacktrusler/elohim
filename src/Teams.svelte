<script>
  import Team from './Team.svelte';
  export let playerList;

  let team1 = [];
  let team2 = [];

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
  <Team bind:team={team1}/>
  <Team bind:team={team2}/>
</div>

<style>
  .button-container{
    padding-top: 1em;
    display:flex;
    justify-content: space-around;
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
