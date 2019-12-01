<script>
  export let resistances;
</script>

<table class="table-fixed border-collapse border border-black">
  <thead>
    <tr>
      <th>Resistance</th>
      <th>Total</th>
    </tr>
  </thead>
  <tbody>
    {#each resistances as stat, i}
      <tr class={i % 2 != 0 ? '' : 'bg-gray-400'}>
        <td>{stat.name}</td>
        <td>
          <input
            type="number"
            bind:value={stat.total}
            class="w-16 bg-transparent border border-black rounded" />
        </td>
      </tr>
    {/each}
  </tbody>
</table>
