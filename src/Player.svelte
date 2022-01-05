<script>
    export let name;
    export let elo;
    export let avatar;
    export let selected;
</script>

<div class="player" on:click={()=> {selected = !selected}}
    id="{selected ? 'selected' : ''}">
    <div class='img-box'>
        <img src={`data:image/svg+xml;base64,${btoa(avatar)}`}  alt="avatar"/>
    </div>
    <div class='text-box'>
        <div>{name}</div>
        <div>{elo}</div>
    </div>
</div>

<style>
    #selected{
        color: green;
    }

    .player {
        height: 80px;
        border-style: solid;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
    }

    .img-box{
        display:flex;
        justify-content: center;
        align-items: center;
        width: 40%;
    }

    .text-box{
        display: flex;
        flex-wrap: wrap;
        width: 60%;
        justify-content: space-evenly;
    }

    .text-box div{
        border: solid;
        height: 25px;
        overflow:hidden;
    }

    .img-box img {
        max-height: 80px;
        max-width: 80px;
        min-height: 55px;
        min-width: 55px;
        border: solid;
    }
</style>
