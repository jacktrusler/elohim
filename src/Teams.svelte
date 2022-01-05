<script>
  import Team from './Team.svelte';
  export let playerList;
  import elohim from './elohim';

  let team1 = [];
  let team2 = [];
  let newPlayerList = [];
  function auto() {
    if (team1.length > 0 || team2.length > 0){
      newPlayerList = [...playerList,...team1,...team2];
      [team1, team2] = elohim(newPlayerList);
      playerList = [];
    } else {
      [team1, team2] = elohim(playerList);
      playerList = [];
      console.log(team1,team2); 
    }
  }

  function randomize() {
    let array = [];
    if (playerList.length !== 0) {
      array = playerList;
    } else {
      array = team1.concat(team2);
      team1 = [];
      team2 = [];
    }
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      if (team1.length < team2.length) {
        team1 = [...team1, ...array.slice(array.length/2)];
        team2 = [...team2, ...array.slice(0, array.length/2)];
      } else {
        team1 = [...team1, ...array.slice(0, array.length/2)];
        team2 = [...team2, ...array.slice(array.length/2)];
      }
    playerList = [];
  }

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
  
</script>

<div class="button-container">
  <button class="team-button" on:click={addTeamOne}>Team One</button>
  <button class="balance" on:click={auto}>Auto Balance</button>
  <button class="randomize" on:click={randomize}>Randomize</button>
  <button class="team-button" on:click={addTeamTwo}>Team Two</button>
</div>

<div class="teams-container">
  <div class="team team-1" id="team-1">
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
    width: 45%;
  }

  #team-1 {
    color: rgb(163, 22, 22);
    font-size: 1.3rem;
  }

  .team-2 {
    color: rgb(14, 14, 121);
    font-size: 1.3rem;
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
