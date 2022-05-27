<script>
  // importaciones
  import Button from './Button.svelte';

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

  <Button 
  text="Click" 
  {count} 
  on:click={handleClick} 
  />
  <Button 
  text="DarkMode"
  on:click={toggle}
  />
  <button on:click={handleClick}>Click {count === 0 ? '' : count}</button>
  <button on:click={toggle}>DarkMode{styles.darkMode ? '🌘' : '🌞'}</button>
</div>