<script>
  export let attributes;
</script>

<table class="table-auto border-collapse border border-black">
  <thead>
    <tr>
      <th>Attribute</th>
      <th>Score</th>
      <th>Modifier</th>
      <th>Temp Score</th>
      <th>Temp Modifier</th>
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
            class="w-16 bg-transparent border border-black rounded" />
        </td>
        <td>{att.mod}</td>
        <td>
          <input
            type="number"
            bind:value={att.tempScore}
            on:change={() => (att.tempMod = Math.floor((att.tempScore - 10) / 2))}
            class="w-16 bg-transparent border border-black rounded" />
        </td>
        <td>{att.tempMod}</td>
      </tr>
    {/each}
  </tbody>
</table>
