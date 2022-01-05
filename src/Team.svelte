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
    <p class="team-heading">{teamName}</p>
    <p class='elo'>{totalElo ? `Total Elo: ${totalElo}` : "Total Elo: 0"}</p>
    <p></p>
    {#each team as {selected, name,elo,avatar}}
        <div class="player">
            <Player {selected} {name} {elo} {avatar}/>
        </div>
    {/each}

</div>

<style>
    .team-heading{
        font-size: 2rem;
    }

    .elo{
        color: black;
        margin: 3px;
        text-decoration: underline;
    }

    .team-name {
        display: flex;
        flex-direction: column;
    }
</style>
