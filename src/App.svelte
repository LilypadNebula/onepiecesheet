<script>
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import TextField from "./components/TextField.svelte";
  import SelectField from "./components/SelectField.svelte";
  import NumberField from "./components/NumberField.svelte";
  import Skills from "./components/Skills.svelte";
  import Attributes from "./components/Attributes.svelte";
  import Stats from "./components/Stats.svelte";
  import Resistances from "./components/Resistances.svelte";
  import ItemCard from "./components/ItemCard.svelte";
  import Feat from "./components/Feat.svelte";
  import ArmorCard from "./components/ArmorCard.svelte";
  import ItemTable from "./components/ItemTable.svelte";
  export let chance;

  let rollResult = null;

  onMount(() => {
    const temp = localStorage.getItem("character");
    if (temp != null) {
      let values = JSON.parse(temp);
      character = { ...values };
    } else {
      character = { ...blankCharacter };
    }
  });

  const save = () => {
    localStorage.setItem("character", JSON.stringify(character));
  };

  const deleteChar = () => {
    localStorage.removeItem("character");
  };

  const newItem = {
    name: "",
    damage: "",
    bonus: "",
    type: "",
    range: "",
    critInfo: ""
  };

  const sizeOptions = [
    "small",
    "medium",
    "large",
    "huge",
    "gargantuan",
    "colossal"
  ];

  const attributes = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];

  let character = null;

  let blankCharacter = {
    name: "",
    alignment: "",
    race: "",
    class: "",
    career: "",
    prestige: "",
    devil_fruit: "",
    size: "",
    disadOne: "",
    disadTwo: "",
    disadThree: "",
    level: 1,
    experience: 0,
    availableBeli: 0,
    primarySkills: [
      {
        name: "Weapon Attack",
        favored: false,
        baseAtt: "STR",
        rank: 0,
        attMod: 0,
        bonus: 0,
        total: 0
      },
      {
        name: "Unarmed Strike",
        favored: false,
        baseAtt: "",
        rank: 0,
        attMod: 0,
        bonus: 0,
        total: 0
      },
      {
        name: "Ranged Shot",
        favored: false,
        baseAtt: "",
        rank: 0,
        attMod: 0,
        bonus: 0,
        total: 0
      },
      {
        name: "Defense",
        favored: false,
        baseAtt: "",
        rank: 0,
        attMod: 0,
        bonus: 0,
        total: 0
      },
      {
        name: "Initiative",
        favored: false,
        baseAtt: "",
        rank: 0,
        attMod: 0,
        bonus: 0,
        total: 0
      },
      {
        name: "Fortitude Save",
        favored: false,
        baseAtt: "CON",
        rank: 0,
        attMod: 0,
        bonus: 0,
        total: 0
      },
      {
        name: "Reflex Save",
        favored: false,
        baseAtt: "DEX",
        rank: 0,
        attMod: 0,
        bonus: 0,
        total: 0
      },
      {
        name: "Will Save",
        favored: false,
        baseAtt: "WIS",
        rank: 0,
        attMod: 0,
        bonus: 0,
        total: 0
      }
    ],
    secondarySkills: [],
    attributes: [
      {
        name: "STR",
        score: 0,
        mod: 0,
        tempScore: 0,
        tempMod: 0
      },
      {
        name: "DEX",
        score: 0,
        mod: 0,
        tempScore: 0,
        tempMod: 0
      },
      {
        name: "CON",
        score: 0,
        mod: 0,
        tempScore: 0,
        tempMod: 0
      },
      {
        name: "INT",
        score: 0,
        mod: 0,
        tempScore: 0,
        tempMod: 0
      },
      {
        name: "WIS",
        score: 0,
        mod: 0,
        tempScore: 0,
        tempMod: 0
      },
      {
        name: "CHA",
        score: 0,
        mod: 0,
        tempScore: 0,
        tempMod: 0
      }
    ],
    stats: [
      {
        name: "HP",
        total: 0,
        current: 0
      },
      {
        name: "Non-Lethal HP",
        total: 0,
        current: 0
      },
      {
        name: "Damage Reduction",
        total: 0,
        current: 0
      },
      {
        name: "Land Speed",
        current: 0
      },
      {
        name: "Water Speed",
        current: 0
      },
      {
        name: "Current Stance",
        current: ""
      }
    ],
    resistances: [
      {
        name: "Cold",
        total: 0
      },
      {
        name: "Corrosive",
        total: 0
      },
      {
        name: "Electric",
        total: 0
      },
      {
        name: "Energy",
        total: 0
      },
      {
        name: "Heat",
        total: 0
      },
      {
        name: "Sonic",
        total: 0
      }
    ],
    items: [],
    feats: [{ name: "", description: "" }],
    armor: {
      head: { defense: "", bonuses: "", type: "" },
      hand: { defense: "", bonuses: "", type: "" },
      body: { defense: "", bonuses: "", type: "" },
      leg: { defense: "", bonuses: "", type: "" },
      foot: { defense: "", bonuses: "", type: "" },
      other: { defense: "", bonuses: "", type: "" }
    },
    items: []
  };

  const getRoll = (num = 1, sides = 20, sum = true) => {
    rollResult = chance.rpg(`${num}#${sides}`, { sum });
  };
</script>

<main class="text-xl md:text-2xl text-center p-4 flex flex-col">
  {#if character}
    <div class="row">
      <p>One Piece d20 Character Sheet</p>
      <button on:click={save}>Save</button>
      <button on:click={deleteChar}>Delete</button>
      <!-- <div class="rounded border-2 border-black h-32 w-32">
      {#if rollResult}
        <p>{rollResult}</p>
      {/if}
    </div> -->
    </div>
    <div class="row">
      <TextField bind:value={character.name} fieldname={'Name'} />
      <TextField bind:value={character.alignment} fieldname={'Alignment'} />
      <TextField bind:value={character.race} fieldname={'Race'} />
      <TextField bind:value={character.class} fieldname={'Class'} />
      <TextField bind:value={character.career} fieldname={'Career'} />
    </div>
    <div class="row">
      <SelectField
        bind:value={character.size}
        fieldname={'Size'}
        options={sizeOptions} />
      <TextField
        bind:value={character.disadOne}
        fieldname={'Disadvantage #1'} />
      <TextField
        bind:value={character.disadTwo}
        fieldname={'Disadvantage #2'} />
      <TextField
        bind:value={character.disadThree}
        fieldname={'Disadvantage #3'} />
    </div>
    <div class="row items-center">
      <NumberField bind:value={character.level} fieldname={'Level'} />
      <NumberField bind:value={character.experience} fieldname={'Experience'} />
      <NumberField
        bind:value={character.availableBeli}
        fieldname={'Available Beli'} />
    </div>
    <div class="row items-center">
      <div class="flex flex-col w-2/3">
        <label>Notes</label>
        <textarea
          bind:value={character.notes}
          class="border border-black rounded" />
      </div>
    </div>
    <div class="row items-center">
      <Attributes bind:attributes={character.attributes} />
      <Stats bind:stats={character.stats} />
      <Resistances bind:resistances={character.resistances} />
    </div>
    <div class="row justify-start items-start">
      <Skills
        bind:primarySkills={character.primarySkills}
        bind:secondarySkills={character.secondarySkills}
        attributes={character.attributes} />
      <div class="flex flex-col w-full md:w-1/3">
        <div class="flex w-full text-center justify-between">
          <button
            class="w-1/2"
            on:click={() => (character.items = [...character.items, { ...newItem, category: 'weapon' }])}>
            New Weapon
          </button>
          <button
            class="w-1/2"
            on:click={() => (character.items = [...character.items, { ...newItem, category: 'accessory' }])}>
            New Accessory
          </button>
        </div>
        <div class="flex flex-wrap justify-center">
          {#each character.items as item}
            <ItemCard {item} />
          {/each}
        </div>
      </div>
    </div>
    <button
      on:click={() => (character.feats = [...character.feats, { name: '', description: '' }])}>
      New Feat
    </button>
    <div class="row flex-wrap items-center justify-center">
      {#each character.feats as feat}
        <Feat {feat} />
      {/each}
    </div>
    <div class="row flex-wrap items-center justify-center">
      <ArmorCard armor={character.armor.head} location={'Head'} />
      <ArmorCard armor={character.armor.hand} location={'Hand'} />
      <ArmorCard armor={character.armor.body} location={'Body'} />
      <ArmorCard armor={character.armor.foot} location={'Foot'} />
      <ArmorCard armor={character.armor.leg} location={'Leg'} />
      <ArmorCard armor={character.armor.other} location={'Other'} />
    </div>
    <button
      class="w-auto"
      on:click={() => (character.items = [...character.items, { name: '', quantity: 0, weight: 0 }])}>
      New Item
    </button>
    <div class="row">
      <ItemTable items={character.items} />
    </div>
  {:else}Loading!{/if}
</main>
