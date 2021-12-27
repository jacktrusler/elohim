<script>
    export let name;
    export let elo;
    export let imgSrc;
</script>

<div class="player">
    <img src={imgSrc} alt="noimage"/>
    <p>{name}</p>
    <p>{elo}</p>
</div>

<style>
    .player {
        border-style: solid;
        display: flex;
        justify-content: space-around;
    }
    .player p {
        text-align: left;
    }

    .player img {
        max-height: 50px;
        max-width: 50px;
        text-align: left;
        align-self: start;
    }
</style>
