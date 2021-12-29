<script>
    import Player from "./Player.svelte";
    import randomAdjNoun from "./randomAdjNoun";

    export let team = [];
    const teamName = randomAdjNoun();
</script>

<div class='team-name'>
    <h4 class="team-heading">{teamName}</h4>
    <p>Team Elo</p>
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

    .team-name {
        color: green;
        border: solid green;
        width: 45%;
    }
</style>
