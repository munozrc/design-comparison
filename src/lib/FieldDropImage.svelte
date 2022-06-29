<script>
  import { createEventDispatcher } from 'svelte'
  import UploadIcon from '../icons/Upload.svelte'

  let file

  const dispatch = createEventDispatcher()
  const reader = new FileReader()

  function handleDragOver (event) {
    event.stopPropagation()
    event.preventDefault()
    event.dataTransfer.dropEffect = 'copy'
  }

  function handleDrop (event) {
    event.stopPropagation()
    event.preventDefault()

    const fileList = event.dataTransfer.files
    handleGetFile(fileList[0])
  }

  function handleChange (event) {
    const fileList = event.target.files
    handleGetFile(fileList[0])
  }

  function handleGetFile (data) {
    if (!data.type.match('image.*')) {
      file = undefined
      return
    }

    file = data.name
  
    reader.readAsDataURL(data)
    reader.onload = e => dispatch('file', { data: e.target.result })
  }
</script>

<div class="wrapper" on:drop={handleDrop} on:dragover={handleDragOver}>
  <div class="container">
    <UploadIcon size="62px" color="#92b0e7"/>
    {#if (typeof file === 'undefined')}
      <input type="file" id="file" on:change={handleChange} accept="image/*"/>
      <label for="file">
        <strong>Choose a file</strong>
        <span> or drag it here</span>
      </label>
    {:else}
      <strong>{file}</strong>
    {/if}
  </div>
</div>

<style>
  .wrapper {
    width: 100%;
    max-width: 300px;
    display: grid;
    place-items: center;
    outline: 2px dashed #6997eb;
    outline-offset: -10px;
    padding: 100px 0px;
    border-radius: 4px;
    background-color: #eee;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  input {
    display: none;
  }

  strong {
    color: #3072ee;
    transition: color 0.2s ease-in;
  }

  strong:hover {
    color: #0355ee;
  }

  span {
    color: #535353;
  }

</style>