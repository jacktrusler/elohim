<script>
  import randomAdjNoun from './randomAdjNoun.ts'
  let team1 = [{}];
  let team2 = [{}];
  const team1name = randomAdjNoun();
  const team2name = randomAdjNoun();
</script>

<div><p class='team-name'>{team1name}</p>
<p class='team-name'>{team2name}  </p></div>

<style>
  .team-name {
    color: green;
  }
</style>
