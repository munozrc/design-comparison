<script>
  import { onMount } from 'svelte'
  
  export let solution
  export let design

  let width = 0
  let offsetLeft = 0
  let isDown = false

  let solutionEle
  let designEle
  let wrapperEle

  onMount(updateSize)

  function handleMouseDown (event) {
    width = wrapperEle.offsetWidth
    offsetLeft = wrapperEle.offsetLeft
    isDown = true
    updateDragger(event)
  }

  function updateSize () {
    const { width, height, naturalWidth, naturalHeight } = designEle
  
    const scaleX = width / naturalWidth
    const scaleY = height / naturalHeight

    solutionEle.style.transform = `scale(${scaleX}, ${scaleY})`
    solutionEle.style.width = naturalWidth + 'px'
    solutionEle.style.height = naturalHeight + 'px'
  }

  function updateDragger (event) {
    if (
      isDown &&
      event.pageX >= offsetLeft &&
      event.pageX <= offsetLeft + width
    ) {
      const value = ((event.pageX - offsetLeft - 3) / width) * 100
      wrapperEle.style.setProperty('--percent', value + '%')
    }
  }
</script>

<svelte:window
  on:mouseup={() => (isDown = false)}
  on:mousemove={updateDragger}
  on:resize={updateSize}
/>

<div class="wrapper" bind:this={wrapperEle} on:mousedown={handleMouseDown}>
  <iframe src={solution} bind:this={solutionEle} title="solution" on:load={updateSize}/>
  <div class="separator" />
  <img src={design} bind:this={designEle} alt="design" />
</div>

<style>
  .wrapper {
    width: 100%;
    position: relative;
    overflow: hidden;
    user-select: none;
    --percent: 50%;
  }

  iframe {
    position: absolute;
    display: block;
    border: none;
    pointer-events: none;
    transform-origin: 0 0;
    background-color: #fff;
    clip-path: inset(0 calc(100% - var(--percent)) 0 0);
  }

  img {
    width: 100%;
    display: block;
    pointer-events: none;
  }

  .separator {
    top: 0;
    border: 2px solid white;
    position: absolute;
    height: 100%;
    left: var(--percent);
    z-index: 3;
    cursor: e-resize;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }

  .separator::after {
    content: "◀ ▶";
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: rgb(237, 44, 73);
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 12px;
    color: white;
  }
</style>
