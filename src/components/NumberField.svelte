<script>
  export let fieldname = "";
  export let value = "";
</script>

<div class="flex flex-col">
  <label>
    <small>{fieldname}</small>
  </label>
  <input
    type="number"
    bind:value
    class="border border-black rounded p-2 text-xl" />
</div>
