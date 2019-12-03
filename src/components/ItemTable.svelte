<script>
  export let items;
</script>

<table class="table-auto border-collapse border border-black w-4/5">
  <thead>
    <tr>
      <th>Item</th>
      <th>Quantity</th>
      <th>Weight</th>
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
            class="bg-transparent " />
        </td>
        <td>
          <input
            type="number"
            bind:value={item.weight}
            class="bg-transparent " />
        </td>
      </tr>
    {/each}
  </tbody>
</table>
