<script>
  import Team from './Team.svelte';
  import {team1, team2, playerList} from './stores.ts';
  import elohim from './elohim';

  let newPlayerList = [];

  function auto() {
    if ($team1.length > 0 || $team2.length > 0){
      newPlayerList = [...$playerList,...$team1,...$team2];
      [$team1, $team2] = elohim(newPlayerList);
      $playerList = [];
    } else {
      [$team1, $team2] = elohim($playerList);
      $playerList = [];
    }
  }

  function randomize() {
    let array = $playerList.concat($team1).concat($team2);
    $playerList = [];
    $team1 = [];
    $team2 = [];
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    $team1 = [...$team1, ...array.slice(0, array.length/2)];
    $team2 = [...$team2, ...array.slice(array.length/2)];
  }

  function addTeamOne(){
    const unselectedPlayers = [];
    for (let i = 0; i<$playerList.length; i++ ){
      if ($playerList[i].selected === true){
        $team1 = [...$team1, $playerList[i]];
        $playerList[i].selected = false;
      } else {
        unselectedPlayers.push($playerList[i]);
      }
    }

    $team2.forEach(obj => {
      if (obj.selected) {
        $team1.push(obj)
      }
    })
    $team2 = $team2.filter(obj => !obj.selected)
    $team1 = $team1.map(obj => {
      if (obj.selected) {
        obj.selected = false
      }
      return obj;
    });

    $playerList = unselectedPlayers;
  }

  function addTeamTwo(){
    const unselectedPlayers = [];
    for (let i = 0; i<$playerList.length; i++ ){
      if ($playerList[i].selected === true){
        $team2 = [...$team2, $playerList[i]];
        $playerList[i].selected = false;
      } else {
        unselectedPlayers.push($playerList[i]);
      }
    }
    $team1.forEach(obj => {
      if (obj.selected) {
        $team2.push(obj)
      }
    })
    $team1 = $team1.filter(obj => !obj.selected)
    $team2 = $team2.map(obj => {
      if (obj.selected) {
        obj.selected = false
      }
      return obj;
    });

    $playerList = unselectedPlayers;
  }

</script>

<div class="button-container">
  <input class = "arrow" type="image" src="Team1.png" alt='randomize' on:click={addTeamOne}/>
  <input class = "arrow" type="image" src="Randomize.png" alt='randomize' on:click={randomize}/>
  <input id='scale' type="image" src="Balance.png" alt='auto-balance' on:click={auto}/>
  <input class = "arrow" type="image" src="Team2.png" alt='randomize' on:click={addTeamTwo}/>
</div>

<div class="teams-container">
  <div class="team team-1" id="team-1">
    <Team bind:team={$team1}/>
  </div>
  <div class="team team-2">
    <Team bind:team={$team2}/>
  </div>
</div>

<style>
  .button-container{
    padding-top: 1em;
    display:flex;
    justify-content: space-around;
  }

  #scale{
    display: flex;
    border: none;
    height: 70px;
    margin-bottom: 15px;
  }

  .arrow{
   display:flex;
   border:none;
   height: 50px;
   margin-top: 20px;
  }
  .team {
    width: 45%;
  }

  #team-1 {
    color: skyblue;
    font-size: 1.3rem;
  }

  .team-2 {
    color: pink;
    font-size: 1.3rem;
  }

  .teams-container{
	display: flex;
	border-top: solid white;
	max-width: none;
  padding: 1em;
	align-self: flex-end;
	justify-content: space-around;
  }
</style>
