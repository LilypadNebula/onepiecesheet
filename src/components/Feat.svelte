<script>
  import TextField from "./TextField.svelte";
  export let feat;
</script>

<div class="border border-black rounded shadow my-1 p-4">
  <TextField bind:value={feat.name} fieldname={'Name'} />
  <textarea
    bind:value={feat.description}
    class="border border-black mt-2 rounded" />
</div>
