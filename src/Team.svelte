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
        {totalElo ? `Total: ${totalElo}` : "Total: 0"}
    </div>
</div>
    
<div>
    {#each team as {selected, name,elo,avatar}}
        <div class="player">
            <Player bind:selected = {selected} {name} {elo} {avatar}/>
        </div>
    {/each}

</div>

<style>
    .team-heading{
        min-height: 80px;
        font-size: 2rem;
    }

    .elo{
        min-height: 60px;
        font-size: 1.3rem;
        overflow: hidden;
        text-decoration: underline;
    }

    .team-name {
        max-height: 160px;
        min-height: 160px;
        display: flex;
        flex-direction: column;
    }
</style>
