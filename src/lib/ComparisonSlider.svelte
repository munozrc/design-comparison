<script>
  import { onMount } from 'svelte'
  
  export let solutionSource
  export let designSource

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

<div class="container" bind:this={wrapperEle}>
  <span class="left">SOLUTION</span>
  <span class="right">DESIGN</span>
  <div class="wrapper" on:mousedown={handleMouseDown}>
    <iframe src={solutionSource} bind:this={solutionEle} title="solution" on:load={updateSize}/>
    <div class="separator" />
    <img src={designSource} bind:this={designEle} alt="design" />
  </div>
</div>

<style>
  .container {
    display: block;
    width: 100%;
    position: relative;
    --percent: 50%;
    text-align: center;
  }

  .left,
  .right {
    position: relative;
    display: inline-block;
    width: 5rem;
    position: relative;
    margin-bottom: 25px;
    font-size: 0.8rem;
  }

  .left {
    margin-right: 5rem;
  }

  .right {
    margin-left: 5rem;
  }

  .left::before,
  .right::before {
    background-color: rgb(28, 32, 34);
    content: "";
    height: 1px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 5rem;
  }

  .left::before {
    left: calc(100% + 0.6rem);
    width: 4.65rem;
  }

  .left::after {
    background-color: rgb(28, 32, 34);
    content: "";
    height: 2rem;
    position: absolute;
    right: -5.35rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
  }

  .right::before {
    right: 100%;
  }

  .wrapper {
    width: 100%;
    position: relative;
    user-select: none;
    overflow: hidden;
    z-index: 1;
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
    z-index: 1;
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

  @media (min-width: 1280px) {

    .left,
    .right {
      display: inline-block;
      letter-spacing: 1px;
      position: absolute;
      top: 2rem;
      font-size: 0.8rem;
      font-weight: 500;
      width: auto;
      color: rgb(28, 32, 34);
      margin: 0;
    }

    .left {
      right: calc(100% + 2.4rem);
    }

    .right {
      left: calc(100% + 2.4rem);
    }

    .left::before,
    .right::before {
      background-color: rgb(28, 32, 34);
      content: "";
      height: 1px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 3rem;
    }

    .left::before {
      left: calc(100% + 0.6rem);
    }

    .right::before {
      right: calc(100% + 0.6rem);
    }
  }
</style>
