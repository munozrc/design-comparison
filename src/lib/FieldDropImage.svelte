<script>
  import UploadIcon from '../icons/Upload.svelte'

  function handleDrop (event) {
    event.stopPropagation()
    event.preventDefault()

    const fileList = event.dataTransfer.files
    console.log({ fileList })
  }

  function handleDragOver (event) {
    event.stopPropagation()
    event.preventDefault()
    event.dataTransfer.dropEffect = 'copy'
  }

  function handleChange (event) {
    const fileList = event.target.files
    console.log(fileList)
  }
</script>

<div class="wrapper" on:drop={handleDrop} on:dragover={handleDragOver}>
  <div class="container">
    <UploadIcon size="62px" color="#92b0e7"/>
    <input type="file" id="file" on:change={handleChange} accept="image/*"/>
    <label for="file">
      <strong>Choose a file</strong>
      <span> or drag it here</span>
    </label>
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
    padding: 100px 20px;
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