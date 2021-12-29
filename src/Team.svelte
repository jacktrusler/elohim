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
    <h4 class="team-heading">{teamName}</h4>
    <p>{averageElo}, {totalElo}</p>
    <p>(average, total)</p>

    {#each team as {selected, name,elo,avatar}}
        <div class="player">
            <Player {selected} {name} {elo} {avatar}/>
        </div>
    {/each}

</div>

<style>
    .team-heading {
        color: #333333;
    }

    .team-name p {
        margin: 3px;
    }

    .team-name {
        display: flex;
        flex-direction: column;
    }
</style>
