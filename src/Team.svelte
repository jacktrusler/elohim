<script>
    import Player from "./Player.svelte";
    import randomAdjNoun from "./randomAdjNoun";

    export let team = [];
    const teamName = randomAdjNoun();

    let totalElo = 0;
    let averageElo = 0;

    $: {
        totalElo = team.reduce((a, b) => a += b.elo, 0);
        averageElo = Math.floor(totalElo / team.length);
    }
</script>

<div class='team-name'>
    <div class="team-heading"> 
        {teamName}
    </div>
    <div class='elo'>
        {totalElo ? `${totalElo}` : "0"}
    </div>
</div>
    
<div class='player-container'>
    {#each team as {selected, name,elo,avatar}}
        <div class="player">
            <Player bind:selected = {selected} {name} {elo} {avatar}/>
        </div>
    {/each}

</div>

<style>
    .team-heading {
        display: flex;
        justify-content: center;
        font-size: 1.5em;
        padding-right: 5%;
        font-weight: bold;
    }

    .player-container {
        display: flex;
        flex-wrap: wrap;
        gap: 5%;
        justify-content: center;
    }

    .player {
        width: 100px;
    }

    .elo {
        min-height: 60px;
        font-size: 1.5em;
        overflow: hidden;
        color: lightgray;
    }

    .team-name {
        max-height: 160px;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    @media (max-width: 640px) {
        .team-heading {
            font-size: 1.25em;
            padding-bottom: 3%;
        }

        .elo {
            font-size: 1.25em;
        }

        .team-name {
            flex-direction: column;
            justify-content: center;
        }

    }
</style>
