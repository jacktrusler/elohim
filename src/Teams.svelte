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
    console.log("balance teams")
  }
  
</script>

<div class="button-container">
  <button class="team-button" on:click={addTeamOne}>Team One</button>
  <button class="balance" on:click={balanceTeams}>Auto Balance</button>
  <button class="team-button" on:click={addTeamTwo}>Team Two</button>
</div>

<div class="teams-container">
  <div class="team team-1">
    <Team bind:team={team1}/>
  </div>
  <div class="team team-2">
    <Team bind:team={team2}/>
  </div>
</div>

<style>
  .button-container{
    padding-top: 1em;
    display:flex;
    justify-content: space-around;
  }

  .team {
    width: 50%;
  }

  .team-1 {
    border: solid red;
  }

  .team-2 {
    border: solid blue;
  }

  .teams-container{
	display: flex;
	border: solid peachpuff;
	max-width: none;
    padding: 1em;
	align-self: flex-end;
	justify-content: space-around;
  }
</style>
