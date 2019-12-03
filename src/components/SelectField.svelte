<script>
  export let fieldname = "";
  export let value = "";
  export let options;
</script>

<div class="flex flex-col">
  <label>
    <small>{fieldname}</small>
  </label>
  <select type="text" bind:value class="border border-black rounded p-2">
    {#each options as option}
      <option value={option}>{option.toUpperCase()}</option>
    {/each}
  </select>
</div>
