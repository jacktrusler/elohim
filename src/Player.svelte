<script>
    export let name;
    export let elo;
    export let avatar;
    export let selected;

</script>

<div class="player">
    <input type = "checkbox" bind:checked = {selected}/>
    <img src={`data:image/svg+xml;base64,${btoa(avatar)}`}  alt="avatar"/>
    <p>{name}</p>
</div>
<div>Elo: {elo}</div>

<style>
    .player:hover{
        color: purple;
    }

    .player {
        border-style: solid;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .player p {
        text-align: left;
    }

    .player img {
        max-height: 50px;
        max-width: 50px;
        text-align: left;
        align-self: center;
        border: solid;
    }
</style>
