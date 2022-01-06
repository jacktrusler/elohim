<script lang="ts">
	import { team1, team2, playerList } from "./stores";

	import Players from './Players.svelte';
	import CreatePlayer from "./CreatePlayer.svelte";
	import Teams from './Teams.svelte'

	function clear() {
		$playerList = [];
		team1.update(() => [] );
		team2.update(() => [] );
	}
</script>

<main>
	<CreatePlayer />
	<Players />
	<Teams />
	<button on:click={clear}>clear</button>
</main>

<style>
	main {
		flex-direction: column;
		text-align: center;
		padding: 0.5em;
		margin: 0 auto;
	}

	:global(body) {
		background-color: #35363a;
	}
</style>