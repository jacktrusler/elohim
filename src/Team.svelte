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
        {totalElo ? `ELO: ${totalElo}` : "ELO: 0"}
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
    .team-heading{
        display: flex;
        justify-content: center;
        font-size: 2rem;
        width: 50%
    }

    .player-container{
        display: flex;
        flex-wrap: wrap;
        gap: 10%;
        justify-content: center;
    }
    .player{
        width: 100px;
    }

    .elo{
        min-height: 60px;
        font-size: 1.5rem;
        overflow: hidden;
        text-decoration: underline;
    }

    .team-name {
        max-height: 160px;
        min-height: 160px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 640px) {
        .team-heading {
            font-size: 1.6rem;
        }

        .elo {
            font-size: 1.2rem;
        }

    }
</style>
