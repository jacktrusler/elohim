<script lang="ts">
	import Player from './Player.svelte';
</script>

<main>
	<h1>elohim</h1>
	<p>Is it a portmanteau or the name of a music artist jack likes?</p>
	<div class="players">
		<Player imgSrc="../memerson.jpg" name="emerson" elo="1000"/>
		<Player imgSrc="../memerson.jpg" name="emerson" elo="1000"/>
		<Player imgSrc="../memerson.jpg" name="emerson" elo="1000"/>
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	.players {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
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