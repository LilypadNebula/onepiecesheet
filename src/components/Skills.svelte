<script>
  export let primarySkills;
  export let secondarySkills;
  export let attributes;

  const addSkill = () => {
    const blankSkill = {
      name: "New Skill",
      favored: false,
      baseAtt: "",
      rank: 0,
      bonus: 0
    };
    secondarySkills = [...secondarySkills, blankSkill];
  };

  const getAttMod = baseAtt => {
    if (baseAtt !== "") {
      return attributes.find(attribute => attribute.name === baseAtt).mod;
    } else return 0;
  };
</script>

<table
  class="text-sm md:text-2xl table-fixed border-collapse border border-black
  w-full md:w-2/3">
  <thead>
    <tr>
      <th style="width:17.28%">Skill Name</th>
      <th style="width:17.28%">F</th>
      <th style="width:17.28%">Base Att</th>
      <th style="width:17.28%">Rank</th>
      <th style="width:17.28%">Att. Mod</th>
      <th style="width:17.28%">Bonus</th>
      <th style="width:17.28%">Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="7">Primary Skills</th>
    </tr>
    {#each primarySkills as skill, i}
      <tr class={i % 2 != 0 ? '' : 'bg-gray-400'}>
        <td>{skill.name}</td>
        <td>
          <input type="checkbox" bind:checked={skill.favored} />
        </td>
        <td>
          <select bind:value={skill.baseAtt} class="bg-transparent">
            {#each attributes as att}
              <option value={att}>{att.name}</option>
            {/each}
            <option value="" />
          </select>
        </td>
        <td>
          <input
            type="number"
            bind:value={skill.rank}
            class="w-16 bg-transparent rounded" />
        </td>
        <td>{getAttMod(skill.baseAtt)}</td>
        <td>
          <input
            type="number"
            bind:value={skill.bonus}
            class="w-16 bg-transparent rounded" />
        </td>
        <td>{skill.rank + skill.bonus + getAttMod(skill.baseAtt)}</td>
      </tr>
    {/each}
    <tr>
      <th colspan="4">Secondary Skills</th>
      <th colspan="3">
        <button class="flex justify-center items-center" on:click={addSkill}>
          Add Skill
        </button>
      </th>
    </tr>
    {#each secondarySkills as skill, i}
      <tr class={i % 2 != 0 ? '' : 'bg-gray-400'}>
        <td>
          <input bind:value={skill.name} class="bg-transparent w-64" />
        </td>
        <td>
          <input type="checkbox" bind:checked={skill.favored} />
        </td>
        <td>
          <select bind:value={skill.baseAtt} class="bg-transparent">
            {#each attributes as att}
              <option value={att.name}>{att.name}</option>
            {/each}
            <option value="" />
          </select>
        </td>
        <td>
          <input
            type="number"
            bind:value={skill.rank}
            class="w-16 bg-transparent border border-black rounded" />
        </td>
        <td>{getAttMod(skill.baseAtt)}</td>
        <td>
          <input
            type="number"
            bind:value={skill.bonus}
            class="w-16 bg-transparent border border-black rounded" />
        </td>
        <td>{skill.rank + skill.bonus + getAttMod(skill.baseAtt)}</td>
      </tr>
    {/each}
  </tbody>
</table>
