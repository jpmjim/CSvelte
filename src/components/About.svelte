<script>
  let someText = `Frontend Developer at Platzi`;
  
  // Contador
  let count = 0;
  function handleClick() {
    count ++;
  }

  //Dark mode
  let styles = { darkMode: false }
  function toggle() {
    styles.darkMode = !styles.darkMode;
    window.document.body.classList.toggle("dark-mode");
  }
</script>

<style>
  p {
    color: var(--theme-color);
  }
  span {
    color: var(--darkmode-color);
  }
</style>

<div class="About">
  <!-- Condicional si mostrar o no el texto -->
  {#if !styles.darkMode}
    <p>{someText}</p>
  {:else}
    <p>
      <span>Hello DarkMode</span>
    </p>
  {/if}
  <button on:click={handleClick}>Click {count === 0 ? '' : count}</button>
  <button on:click={toggle}>DarkMode</button>
</div>