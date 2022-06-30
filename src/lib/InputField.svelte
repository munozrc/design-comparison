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
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 6px;
    box-shadow: none;
    caret-color: #5a5e9a;
    color: #23263b;
    flex: 1;
    font: inherit;
    max-width: 100%;
    padding-left: 2.5rem;
    margin-right: 1rem;
  }
</style>