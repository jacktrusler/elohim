<script lang="ts">
	import Players from './Players.svelte';
	import CreatePlayer from "./CreatePlayer.svelte";
	import Teams from './Teams.svelte'
	import HowTo from "./HowTo.svelte";
</script>

<main>
	<div class='gradient'>
		<div class='castle'>
			<div class='title'>
				Elohim
			</div>
		</div>
		<div class='motherload'>
			<div class='daughterload'>
				<HowTo />
				<CreatePlayer />
				<Players />
				<Teams />
			</div>
		</div>
	</div>
</main>

<style>
	.gradient{
		background: linear-gradient(black 10%, #212121 50%, black 100%);

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
		background-blend-mode: difference;
		justify-content: center;
		overflow: hidden;
	}

	.title {
		display: flex;
		justify-content: flex-end;
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
		display: flex;
		flex-direction: column;
		text-align: center;
		font-family: Georgia, 'Times New Roman', Times, serif;
		width: 100%;
	}

	.motherload {
		display: flex;
		padding: 20px;
		justify-content: center;
	}

	.daughterload {
		max-width: 1100px;
		width: 100%;
	}


	:global(body) {
		padding: 0;
		background-color: black;
		transition: background-color 0.3s;
	}
</style>