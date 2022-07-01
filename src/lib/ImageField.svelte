<script>
  import UploadIcon from '../icons/Upload.svelte'

  export let label = 'Your desktop design'
</script>

<label for="file">
  {label}
  <div>
    <button>
      <UploadIcon />
    </button>
    <input type="file" id="file" accept="image/*"/>
    <span>or drag it here</span>
  </div>
</label>

<style>

  label {
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

  button {
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
  }

  span {
    display: inline-block;
    padding: 10px 24px;
    font-size: 1.1em;
    line-height: normal;
    text-align: start;
    color: #757575;
  }
</style>