<script>
  export let items;
</script>

<table class="table-fixed border-collapse border border-black w-full md:4/5">
  <thead>
    <tr>
      <th class="w-1/3">Item</th>
      <th class="w-1/3">Quantity</th>
      <th class="w-1/3">Weight</th>
    </tr>
  </thead>
  <tbody>
    {#each items as item, i}
      <tr class={i % 2 != 0 ? '' : 'bg-gray-400'}>
        <td>
          <input bind:value={item.name} class="bg-transparent " />
        </td>
        <td>
          <input
            type="number"
            bind:value={item.quantity}
            class="w-16 bg-transparent " />
        </td>
        <td>
          <input
            type="number"
            bind:value={item.weight}
            class="w-16 bg-transparent " />
        </td>
      </tr>
    {/each}
  </tbody>
</table>
