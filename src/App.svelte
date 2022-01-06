<script lang="ts">
	import Players from './Players.svelte';
	import CreatePlayer from "./CreatePlayer.svelte";
	import Teams from './Teams.svelte'
	let playerList = [];
</script>

<main>
	<CreatePlayer bind:playerList={playerList}/>
	<Players playerList={playerList}/>
	<Teams bind:playerList={playerList}/>
</main>

<style>
	main {
		flex-direction: column;
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
</style>