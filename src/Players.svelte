<script>
    import Player from "./Player.svelte";
    import { playerList } from "./stores";
</script>

<div class="players">
    {#each $playerList as player}
        <div class="player">
            <Player 
                bind:selected={player.selected} 
                name={player.name} 
                elo={player.elo} 
                avatar={player.avatar}
            />
        </div>
    {/each}
</div>

<style>
    .players {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        flex-wrap: wrap;
        border: solid;
    }

    .player {
        width: 160px;
    }
</style>
