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
		padding: 0.5em;
		margin: 0 auto;
	}

	:global(body) {
		background-color: #212121;
		transition: background-color 0.3s
	}
</style>