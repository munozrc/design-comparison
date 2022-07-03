<script>
  import { clearAllDataToLocalStorage, getDataFromLocalStorage, setDataToLocalStorage } from './utils'
  import ComparisonSlider from './lib/ComparisonSlider.svelte'
  // import FieldDropImage from './lib/FieldDropImage.svelte'
  import InputField from './lib/InputField.svelte'
  import ImageField from './lib/ImageField.svelte'

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
      <header>
        <a href="https://github.com/munozrc" target="_blank">by <strong>@munozrc</strong></a>
        <h1>Design Comparison</h1>
        <p>It allows you to compare your relationship with the designs in desktop and mobile view.</p>
      </header>
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
  header,
  form,
  h1 {
    display: flex;
    flex-direction: column;
  }

  .wrapper {
    justify-content: center;
    gap: 50px;
    align-items: center;
    height: 100%;
  }

  form {
    width: 100%;
    max-width: 340px;
    gap: 1.5em;
    margin-bottom: 40px;
  }

  a {
    text-decoration: none;
    background-color: #fafafa;
    padding: 10px 24px;
    border-radius: 40px;
    color: #383838;
    font-size: 0.85em;
    border: 2px solid #E6E8EB;
    transition: box-shadow 0.3s ease-in-out;
  }

  a:hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  header {
    align-items: center;
    gap: 20px;
  }

  h1 {
    font-size: 5em;
    background: linear-gradient(90deg,#80d0f2,#5c82ff,#c480ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    text-align: center;
    max-width: 60%;
    font-size: 1.5em;
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
    font-size: 1.05em;
  }

  button:hover {
    background-color: #1b1b1b;
  }
</style>
