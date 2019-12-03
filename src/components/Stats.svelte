<script>
  export let stats;
</script>

<table
  class="text-sm md:text-2xl table-fixed border-collapse border border-black
  w-full md:w-auto my-2 ">
  <thead>
    <tr>
      <th class="w-1/3 text-center">Stat</th>
      <th class="w-1/3 text-center">Total</th>
      <th class="w-1/3 text-center">Current</th>
    </tr>
  </thead>
  <tbody>
    {#each stats as stat, i}
      <tr class={i % 2 != 0 ? '' : 'bg-gray-400'}>
        <td>{stat.name}</td>
        <td>
          {#if stat.total != null}
            <input
              type="number"
              bind:value={stat.total}
              class="w-16 bg-transparent rounded" />
          {/if}
        </td>
        <td>
          {#if stat.current != null}
            {#if typeof stat.current === 'string'}
              <input
                bind:value={stat.current}
                class="w-32 text-xl bg-transparent rounded" />
            {:else}
              <input
                type="number"
                bind:value={stat.current}
                class="w-16 bg-transparent rounded" />
            {/if}
          {/if}
        </td>
      </tr>
    {/each}
  </tbody>
</table>
