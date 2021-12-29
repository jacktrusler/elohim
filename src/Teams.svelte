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

  function autoBalance(playerList, team1 = [], team2 = []){
    console.log(playerList, team1, team2);
    let allLads = playerList.concat(team1.concat(team2));
    let sortedArr1 = []; 
    let sortedArr2 = [];
    let arr1sum = 0;
    let arr2sum = 0;
    allLads.sort((a,b) => b.elo - a.elo); //sort

    for (let lad of allLads) {
      if (sortedArr1.length===0){
        sortedArr1.push(lad)
        arr1sum += lad.elo;
      } else if (arr2sum <= arr1sum){
        sortedArr2.push(lad)
        arr2sum += lad.elo; //lmao
      } else {
        sortedArr1.push(lad)
        arr1sum += lad.elo
      }
    }

    console.log(sortedArr1, sortedArr2)   
  }
  
</script>

<div class="button-container">
  <button class="team-button" on:click={addTeamOne}>Team One</button>
  <button class="balance" on:click={autoBalance}>Auto Balance</button>
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
