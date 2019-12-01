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
    console.log(character.secondarySkills);
  };

  const getAttMod = baseAtt => {
    if (baseAtt !== "") {
      return attributes.find(attribute => attribute.name === baseAtt).mod;
    } else return 0;
  };
</script>

<table class="table-fixed border-collapse border border-black">
  <thead>
    <tr>
      <th>Skill Name</th>
      <th>F</th>
      <th>Base Att</th>
      <th>Rank</th>
      <th>Att. Mod</th>
      <th>Bonus</th>
      <th>Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Primary Skills</th>
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
    <tr>
      <th>Secondary Skills</th>
      <button class="border border-black rounded" on:click={addSkill}>+</button>
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
              <option value={att}>{att.name}</option>
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
