<script>
  export let attributes;
</script>

<table
  class="text-sm md:text-2xl table-fixed border-collapse border border-black
  w-full md:w-auto">
  <thead>
    <tr>
      <th class="w-1/5 text-center">Attribute</th>
      <th class="w-1/5 text-center">Score</th>
      <th class="w-1/5 text-center">Modifier</th>
      <th class="w-1/5 text-center">Temp Score</th>
      <th class="w-1/5 text-center">Temp Modifier</th>
    </tr>
  </thead>
  <tbody>
    {#each attributes as att, i}
      <tr class={i % 2 != 0 ? '' : 'bg-gray-400'}>
        <td>{att.name}</td>
        <td>
          <input
            type="number"
            bind:value={att.score}
            on:change={() => (att.mod = Math.floor((att.score - 10) / 2))}
            class="w-16 bg-transparent rounded" />
        </td>
        <td>{att.mod}</td>
        <td>
          <input
            type="number"
            bind:value={att.tempScore}
            on:change={() => (att.tempMod = Math.floor((att.tempScore - 10) / 2))}
            class="w-16 bg-transparent rounded" />
        </td>
        <td>{att.tempMod}</td>
      </tr>
    {/each}
  </tbody>
</table>
