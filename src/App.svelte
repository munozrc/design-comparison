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
    <div class="wrapper">
      <header>
        <h1>
          <span>Design</span>
          <span>Comparison</span>
        </h1>
        <p>It allows you to compare your relationship with the designs in desktop and mobile view.</p>
      </header>
      <form on:submit={handleSubmit}>
        <FieldDropImage on:file={handleFile}/>
        <InputField 
          type="url"
          placeholder="http://localhost:3000"
          label="Ingresa URL de tu proyecto"
          value={solutionSource}
          on:keyup={handleKeyUp}
        />
        <button>Siguiente</button>
      </form>
    </div>
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

  .wrapper,
  header,
  h1 {
    display: flex;
    flex-direction: column;
  }

  .wrapper {
    justify-content: center;
    gap: 50px;
    margin-top: 50px;
  }

  header {
    gap: 20px;
  }

  h1 {
    font-size: 5em;
  }

  span {
    line-height: 0.9;
  }

  p {
    max-width: 60%;
    font-size: 1.5em;
  }

  button {
    color: #fafafa;
    background: rgb(0, 143, 253);
    padding: 14px 26px;
    font-size: 16px;
    font-weight: 500;
    border-radius: 32px;
    transition: background-color 0.15s ease 0s, box-shadow 0.15s ease 0s;
    box-shadow: rgb(12 20 66 / 10%) 0px 2px 4px, rgb(12 20 66 / 6%) 0px 10px 40px, rgb(12 20 66 / 10%) 0px -1px 2px inset;
    outline: none;
    user-select: none;
    text-align: center;
    border: none;
  }

  button:hover {
    background: rgb(35, 159, 253);
  }
</style>
