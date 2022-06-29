<script>
  import UploadIcon from '../icons/Upload.svelte'

  function handleDrop (event) {
    event.preventDefault()
    console.log({ event })
  }

  function handleDragOver (event) {
    event.preventDefault()
  }
</script>

<div class="wrapper" on:drop={handleDrop} on:dragover={handleDragOver}>
  <div class="container">
    <UploadIcon size="62px" color="#92b0e7"/>
    <input type="file" id="file" />
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
    color: #101010;
  }

  span {
    color: #535353;
  }

</style>