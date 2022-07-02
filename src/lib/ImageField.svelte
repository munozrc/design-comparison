<script>
  import UploadIcon from '../icons/Upload.svelte'
  import CloseIcon from '../icons/Close.svelte'

  export let label = 'Your desktop design'

  let files
  let inputRef

  const types = ['image/png', 'image/jpeg']

  function handleDragOver (event) {
    event.stopPropagation()
    event.preventDefault()
    event.dataTransfer.dropEffect = 'copy'
  }

  function handleDrop (event) {
    event.stopPropagation()
    event.preventDefault()
    const file = event.dataTransfer.files[0]
    const isTypeValid = types.includes(file.type)

    if (isTypeValid) files = event.dataTransfer.files
  }

  function resetState () {
    inputRef.value = ''
    files = undefined
  }
</script>

<section>
  {label}
  <div on:drop={handleDrop} on:dragover={handleDragOver}>
    <button class="btn-upload" on:click={() => { inputRef.click() }}>
      <UploadIcon />
    </button>
    <input type="file" accept={types.join(', ')} bind:files bind:this={inputRef} />
    <span>
      {#if files && files[0]}
      {files[0].name}
      <button class="btn-clear" on:click={resetState}>
        <CloseIcon />
      </button>
      {:else}
      or drag it here
      {/if}
    </span>
  </div>
</section>

<style>

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  input {
    display: none;
  }

  div {
    display: flex;
    height: 45px;
    border: 2px solid #E6E8EB;
    background-color: #E6E8EB;
    margin-top: 7px;
    border-radius: 6px;
  }

  .btn-upload {
    height: 100%;
    aspect-ratio: 1;
    border: none;
    background-color: #101010;
    color: #fafafa;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
    border-radius: 6px;
    transition: background-color 0.15s ease-in-out;
  }

  .btn-upload:hover {
    background-color: #383838;
  }

  span {
    width: 100%;
    position: relative;
    padding: 10px 4px 10px 18px;
    font-size: 1.1em;
    color: #757575;
  }

  .btn-clear {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    right: -6px;
    background-color: transparent;
    border: none;
    font-size: 1.05em;
    color: #101010;
    padding: 5px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: background-color 0.15s ease-in-out;
  }

  .btn-clear:hover {
    background-color: #bdbdbd;
  }
</style>