<script>
  import TextField from "./TextField.svelte";

  export let item;
</script>

<div class="border border-black rounded shadow flex flex-col mx-2 my-1 p-4">
  <TextField
    bind:value={item.name}
    fieldname={item.category === 'weapon' ? 'Weapon Name' : 'Accessory Name'} />
  {#if item.category === 'weapon'}
    <TextField bind:value={item.damage} fieldname={'Damage'} />
  {:else}
    <TextField bind:value={item.bonus} fieldname={'Bonus'} />
  {/if}
  <TextField bind:value={item.type} fieldname={'Type'} />
  <TextField bind:value={item.range} fieldname={'Range'} />
  <TextField bind:value={item.critInfo} fieldname={'Crit Info'} />
</div>
