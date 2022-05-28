<script>
  import { onMount } from "svelte";

  let characters = [];


  onMount(async () => {
    console.log("onMount");
    const response = await fetch("https://rickandmortyapi.com/api/character?_limit=50");
    characters = await response.json();
    characters = characters.results;
  });
 
</script>

<style>
  .Photos {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 8px;
  }

  figure {
    margin: 0;
    padding: 10px;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  img {
    width: 100%;
    height: auto;
  }

</style>

<div class="Photos">
  {#each characters as character} 
    <figure>
      <img src={character.image} alt={character.title}>
      <figcaption>{character.name}</figcaption>
    </figure>
    {:else}
      <p>Loading...</p>
  {/each}
</div>

