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
  export let chance;

  let rollResult = null;

  onMount(() => {
    const temp = localStorage.getItem("character");
    if (temp != null) {
      character = JSON.parse(temp);
    }
  });

  const save = () => {
    localStorage.setItem("character", JSON.stringify(character));
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

  let character = {
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
    weapons: []
  };

  const getRoll = (num = 1, sides = 20, sum = true) => {
    rollResult = chance.rpg(`${num}#${sides}`, { sum });
  };
</script>

<main class="text-2xl md:text-3xl text-center p-4 flex flex-col">
  <div class="flex justify-between">
    <p>One Piece d20 Character Sheet</p>
    <button on:click={save}>Save</button>
    <div class="rounded border-2 border-black h-32 w-32">
      {#if rollResult}
        <p>{rollResult}</p>
      {/if}
    </div>
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
    <TextField bind:value={character.disadOne} fieldname={'Disadvantage #1'} />
    <TextField bind:value={character.disadTwo} fieldname={'Disadvantage #2'} />
    <TextField
      bind:value={character.disadThree}
      fieldname={'Disadvantage #3'} />
  </div>
  <div class="row">
    <NumberField bind:value={character.level} fieldname={'Level'} />
    <NumberField bind:value={character.experience} fieldname={'Experience'} />
    <NumberField
      bind:value={character.availableBeli}
      fieldname={'Available Beli'} />
  </div>
  <div class="row">
    <Attributes bind:attributes={character.attributes} />
    <Stats bind:stats={character.stats} />
    <Resistances bind:resistances={character.resistances} />
  </div>
  <div class="row">
    <Skills
      bind:primarySkills={character.primarySkills}
      bind:secondarySkills={character.secondarySkills}
      attributes={character.attributes} />
  </div>
</main>
