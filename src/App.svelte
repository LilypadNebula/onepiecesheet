<script>
	import {fade} from 'svelte/transition'
	export let chance
	const flavors = [
		'Turkey dinner with all the trimmings',
		'Stale bread',
		'Sauteed onions',
		'Fudge. So. Much. Fudge.',
		'Cupcakes flavored with orange and lemon zest topped with a light cream cheese frosting',
		'A sword that was left out in the rain',
		'Habanero peppers',
		'Spicy milk',
		'Sea water',
		'That taste when you wake up in the morning after a long night',
		'Shag carpet',
		'Petrified wood',
		'Cloth',
		'Cinammon tea sweetened with honey',
		'Grease',
		'Sweaty fur',
		'Rose water',
		'Cucumber salad',
		'Shoe, baked to perfection, served with a mint jelly',
		'The best bowl of ice cream you\'ve ever had',
		'Lightly spiced, warm apple cider',
		'Tomato sauce, the good kind',
		'Pickled eggs',
		'Beet stew',
		'Corn shell tacos',
		'Spaghetti topped with a sprinkling of parmesan cheese and oregano, in a light ham sauce',
		'Well-toasted toast',
		'Soggy toast',
		'Peanut butter & chocolate',
		'Pancakes',
		'Dog food',
		'Leaves',
		'Buttermilk',
		'Dish soap',
		'Apple',
		'Strawberry',
		'Blueberry',
		'Vanilla',
		'Chocolate',
		'Grape',
		'Peppermint',
		'Caramel',
		'Butterscotch ',
		'Cinnamon',
		'Butterscotch-Cinnamon',
		'Neapolitan ice cream',
		'Watermelon',
		'Cheesecake',
		'Yellow cake with chocolate frosting',
		'Lemonade',
		'Lime'
	]

	let selectedFlavor = ""
	let visible = false

	const getFlavor = async () => {
		visible = false
		await setTimeout(() => {
			const index = chance.integer({min: 0, max: flavors.length - 1})
			selectedFlavor = flavors[index]
			visible = true
		}, 500)
		
	}
</script>

<main class="text-2xl md:text-4xl text-center p-4 flex flex-col">
<p>Welcome to the Mystery Fizz Flavor Generator 5000!</p>
<p>Simply press the button below and see what flavor graces your senses!</p>
<button class="p-2 bg-red-500 text-white border-black rounded mb-8" on:click={getFlavor}>I Would Like A Flavor, Please!</button>
{#if visible}<p transition:fade>{selectedFlavor}</p>{/if}
</main>