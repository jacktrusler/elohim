<script>
    import Player from "./Player.svelte";
    //{name: 'puds', elo: 500, avatar: something, selected: false}
    export let playerList = [];
</script>

<div class="players">
    {#each playerList as player}
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
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .player {
        width: 45%;
    }
</style>
