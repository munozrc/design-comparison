<script>
  export let placeholder
  export let value
  export let type
  export let label
</script>

<label>
  {label}
  <input {type} {value} {placeholder} on:keyup />
</label>

<style>
  label {
    display: flex;
    flex-direction: column;
  }

  input {
    appearance: none;
    background-color: #E6E8EB;
    border: 2px solid #E6E8EB;
    border-radius: 6px;
    box-shadow: none;
    caret-color: rgb(0, 143, 253);
    color: #23263b;
    max-width: 100%;
    padding: 10px 24px;
    font-size: 1.1em;
    outline: none;
    margin-top: 7px;
  }
</style>