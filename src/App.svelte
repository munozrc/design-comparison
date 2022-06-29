<script>
  import ComparisonSlider from './lib/ComparisonSlider.svelte'

  const solution = window.localStorage.getItem('solutionURL') ?? ''
  const design = window.localStorage.getItem('designURL') ?? ''
</script>

<main>
  <ComparisonSlider {solution} {design} />
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
