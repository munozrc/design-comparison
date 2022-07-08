<script>
  import { clearAllDataToLocalStorage, getDataFromLocalStorage, setDataToLocalStorage } from './utils'
  import ComparisonSlider from './lib/ComparisonSlider.svelte'
  import InputField from './lib/InputField.svelte'
  import ImageField from './lib/ImageField.svelte'
  import Hero from './lib/Hero.svelte'

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

  function handleLoadImage (event) {
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
      <Hero />
      <form on:submit={handleSubmit}>
        <ImageField on:loadImage={handleLoadImage}/>
        <InputField 
          type="url"
          placeholder="http://localhost:3000"
          label="Link to your project"
          value={solutionSource}
          on:keyup={handleKeyUp}
        />
        <button>Next</button>
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
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
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
    height: 100vh;
  }

  .wrapper,
  form {
    display: flex;
    flex-direction: column;
  }

  .wrapper {
    justify-content: center;
    gap: 5rem;
    align-items: center;
    height: 100%;
  }

  form {
    width: 100%;
    max-width: 340px;
    gap: 1.5rem;
    margin-bottom: 3rem;
  }

  button {
    width: 100%;
    color: #fafafa;
    background: #101010;
    padding: 14px 26px;
    font-weight: 500;
    border-radius: 6px;
    transition: background-color 0.15s ease 0s;
    outline: none;
    user-select: none;
    text-align: center;
    border: none; 
    font-size: 1.05rem;
  }

  button:hover {
    background-color: #1b1b1b;
  }
</style>
