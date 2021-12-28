<script lang="ts">
	import Players from './Players.svelte';
	import CreatePlayer from "./CreatePlayer.svelte";
	import Teams from './Teams.svelte'
	let playerList = [];
	$: {
		console.log(playerList);
	}
	
</script>

<main>
	<h1>elohim</h1>
	<p>Is it a portmanteau or the name of a music artist jack likes?</p>
	<CreatePlayer bind:playerList={playerList}/>
	<Players playerList={playerList}/>
	<Teams />

</main>

<style>
	main {
		flex-direction: column;
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>