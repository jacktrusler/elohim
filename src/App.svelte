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
				Elovate
			</div>
		</div>
		<div class='motherload'>
			<div class='daughterload'>
				<CreatePlayer />
				<Players />
				<Teams />
				<button on:click={clear}>clear</button>
			</div>
		</div>
	</div>
</main>

<style>
	.gradient{
		background: linear-gradient(black 10%, rgb(40, 18, 90) 50%, black 100%);

	}
	.castle {
		display: flex;
		align-items: stretch;
		height: 200px;
		width: 100%;
		background:
			no-repeat url('/castle-on-hill-flipped-cropped.png'),
			linear-gradient(darkblue 10%, rgb(16, 13, 17) 100%);
		background-color: #35363a;
		background-size:cover;
		/* background-blend-mode: difference; */
		justify-content: center;
		border-bottom: 15px solid black;
		overflow: hidden;
	}

	.title{
		display: flex;
		justify-content: flex-start;
		padding-right: 30px;
		align-items: flex-end;
		font-size: 7rem;
		font-family: cursive; 
		width: 100%;
		text-shadow: gold 3px 0 20px;
		color: white ;
		-webkit-text-stroke: 2.5px black;
	}

	main {
		flex-direction: column;
		text-align: center;
		padding: 0.5em;
		margin: 0 auto;
	}

	.motherload {
		display: flex;
		justify-content: center;
	}

	.daughterload {
		max-width: 1100px;
		width: 100%;
	}

	:global(body) {
		background-color: black; 
		transition: background-color 0.3s;
	}
</style>