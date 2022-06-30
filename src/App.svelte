<script>
  import ComparisonSlider from './lib/ComparisonSlider.svelte'
  import FieldDropImage from './lib/FieldDropImage.svelte'
  import InputField from './lib/InputField.svelte'

  let solution = window.localStorage.getItem('solutionURL') ?? ''
  let design = window.localStorage.getItem('designURL') ?? ''
  let show = solution !== '' || design !== ''

  function handleSubmit (event) {
    event.preventDefault()
    if (solution !== '' || design !== '') {
      window.localStorage.setItem('solutionURL', solution)
      window.localStorage.setItem('designURL', design)
      show = true
    }
  }

  function handleKeyUp (event) {
    const value = event.target.value
    solution = value
  }

  function handleFile (event) {
    const file = event.detail.data
    design = file
  }

  function reset () {
    window.localStorage.removeItem('solutionURL')
    window.localStorage.removeItem('designURL')
    solution = ''
    design = ''
    show = false
  }
</script>

<main>
  {#if (!show)}
    <form on:submit={handleSubmit}>
      <FieldDropImage on:file={handleFile}/>
      <InputField 
        type="url"
        placeholder="http://localhost:300"
        label="Ingresa URL de tu proyecto"
        value={solution}
        on:keyup={handleKeyUp}
      />
      <button>Comparar</button>
    </form>
  {:else}
    <ComparisonSlider {solution} {design} />
    <button on:click={reset}>Atras</button>
  {/if}
</main>

<style>
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  }

  :global(html, body, #app) {
    width: 100%;
    height: 100vh;
    font-size: 16px;
    background-color: rgb(250, 250, 250);
  }

  main {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
  }
</style>
