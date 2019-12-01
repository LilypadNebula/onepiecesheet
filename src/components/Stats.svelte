<script>
  export let stats;
</script>

<table class="table-auto border-collapse border border-black">
  <thead>
    <tr>
      <th>Stat</th>
      <th>Total</th>
      <th>Current</th>
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
              class="w-16 bg-transparent border border-black rounded" />
          {/if}
        </td>
        <td>
          {#if stat.current != null}
            {#if typeof stat.current === 'string'}
              <input
                bind:value={stat.current}
                class="w-32 text-xl bg-transparent border border-black rounded" />
            {:else}
              <input
                type="number"
                bind:value={stat.current}
                class="w-16 bg-transparent border border-black rounded" />
            {/if}
          {/if}
        </td>
      </tr>
    {/each}
  </tbody>
</table>
