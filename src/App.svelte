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
	<div class='gradient'>
		<div class='castle'>
			<div class='title'>
				ELOHIM
			</div>
		</div>
		
		<CreatePlayer />
		<Players />
		<Teams />
		<button on:click={clear}>clear</button>
</div>

</main>

<style>
	.gradient{
		background: linear-gradient(black 10%, rgb(40, 18, 90) 50%, black 100%);
		height: 100vh;
	}
	.castle {
		margin-bottom: 50px;
		display: flex;
		flex-grow: 1;
		height: 30vh;
		width: 100%;
		background:
			linear-gradient(darkblue 50%, rgb(16, 13, 17) 100%),
			url('/castle-on-hill-flipped-cropped.png');
		background-color: #35363a;
		background-blend-mode:difference;
		justify-content: center;
}

	.title{
		display: flex;
		align-items: flex-end;
		font-size: 4rem;
		font: bold;
		width: 100%;
		color: white;
	}

	main {
		flex-direction: column;
		text-align: center;
		padding: 0.5em;
		margin: 0 auto;
	}

	:global(body) {
		background-color: black; 
		transition: background-color 0.3s;
	}
</style>