<script>
  import TextField from "./TextField.svelte";
  export let armor;
  export let location;
</script>

<div class="border border-black rounded shadow p-4 w-full md:w-1/3 my-2 md:m-2">
  <strong class="capitalize">{location} Armor</strong>
  <TextField bind:value={armor.defense} fieldname={'Defense'} />
  <TextField bind:value={armor.bonuses} fieldname={'Bonuses'} />
  <TextField bind:value={armor.type} fieldname={'Type'} />
</div>
