<script>
  import { clearAllDataToLocalStorage, getDataFromLocalStorage, setDataToLocalStorage } from './utils'
  import ComparisonSlider from './lib/ComparisonSlider.svelte'
  import FieldDropImage from './lib/FieldDropImage.svelte'
  import InputField from './lib/InputField.svelte'

  let solutionSource = getDataFromLocalStorage('solution', '')
  let designSource = getDataFromLocalStorage('design', '')
  let view = getDataFromLocalStorage('view', 'CONFIG_VIEW')

  function handleSubmit (event) {
    event.preventDefault()
    if (solutionSource !== '' && designSource !== '') {
      view = setDataToLocalStorage('view', 'COMPARISON_VIEW')
    }
  }

  function handleKeyUp (event) {
    const value = event.target.value.trim()
    solutionSource = setDataToLocalStorage('solution', value)
  }

  function handleFile (event) {
    const file = event.detail.data
    designSource = setDataToLocalStorage('design', file)
  }

  function reset () {
    clearAllDataToLocalStorage()
    solutionSource = ''
    designSource = ''
    view = 'CONFIG_VIEW'
  }
</script>

<main>
  {#if (view === 'CONFIG_VIEW')}
    <form on:submit={handleSubmit}>
      <FieldDropImage on:file={handleFile}/>
      <InputField 
        type="url"
        placeholder="http://localhost:3000"
        label="Ingresa URL de tu proyecto"
        value={solutionSource}
        on:keyup={handleKeyUp}
      />
      <button>Comparar</button>
    </form>
  {:else}
    <ComparisonSlider {solutionSource} {designSource} />
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
