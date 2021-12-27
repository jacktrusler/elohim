<script>
    import Player from "./Player.svelte";
</script>

<div class="players">
    <Player imgSrc="../memerson.jpg" name="jack" elo="500"/>
    <Player imgSrc="../memerson.jpg" name="emerson" elo="10000"/>
    <Player imgSrc="../memerson.jpg" name="sven" elo="100"/>
</div>

<style>
    .players {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
</style>
