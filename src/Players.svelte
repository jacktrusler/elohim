<script>
    export let playerList = [];
    import Player from "./Player.svelte";

</script>

<div class="players">
    {#each playerList as player}
    <Player name={player.name} elo={player.elo} avatar={player.avatar}/>
        {/each}
</div>

<style>
    .players {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
</style>
