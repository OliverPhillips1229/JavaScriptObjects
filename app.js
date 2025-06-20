const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
}

console.dir(pokemon, { maxArrayLength: null });

// Exercise 2
console.log(game);

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?

Solve Exercise 3 here:
*/
game.difficulty = "Med";
console.log("Exercise 3 result:", game);

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?

Solve Exercise 4 here:
*/
const starter = pokemon.find(p => p.starter === true);
game.party.push(starter);
console.log("Exercise 4 result:", game.party);

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?

Solve Exercise 5 here:
*/
const extraParty = [
  pokemon.find(p => p.name === "Gengar"),   // Ghost type, strong
  pokemon.find(p => p.name === "Lapras"),   // Water/Ice, tanky
  pokemon.find(p => p.name === "Eevee")     // Versatile
];
game.party.push(...extraParty);
console.log("Exercise 5 result:", game.party);

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.

Solve Exercise 6 here:
*/
for (let gym of game.gyms) {
  if (gym.difficulty < 3) {
    gym.completed = true;
  }
}
console.log("Exercise 6 result:", game.gyms);

/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Solve Exercise 7 here:
*/
const evolutionMap = {
  1: 2,    // Bulbasaur → Ivysaur
  4: 5,    // Charmander → Charmeleon
  7: 8,    // Squirtle → Wartortle
  25: 26   // Pikachu → Raichu
};
const evolved = pokemon.find(p => p.number === evolutionMap[starter.number]);
const starterIndex = game.party.findIndex(p => p.number === starter.number);
if (starterIndex !== -1 && evolved) {
  game.party.splice(starterIndex, 1, evolved);
}
console.log("Exercise 7 result:", game.party);

/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/
console.log("Exercise 8 result:");
game.party.forEach(p => console.log(p.name));

/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.

Solve Exercise 9 here:
*/
const starterPokemon = pokemon.filter(p => p.starter);
console.log("Exercise 9 result:");
starterPokemon.forEach(p => console.log(p.name));

/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/
game.catchPokemon = function(pokemonObj) {
  this.party.push(pokemonObj);
};
game.catchPokemon(pokemon.find(p => p.name === "Snorlax"));
console.log("Exercise 10 result:", game.party);

/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Solve Exercise 11 here:
*/
game.catchPokemon = function(pokemonObj) {
  this.party.push(pokemonObj);
  const pokeball = this.items.find(item => item.name === "pokeball");
  if (pokeball) {
    pokeball.quantity--;
  }
};
game.catchPokemon(pokemon.find(p => p.name === "Ditto"));
console.log("Exercise 11 result:", game.items);

/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/
for (let gym of game.gyms) {
  if (gym.difficulty < 6) {
    gym.completed = true;
  }
}
console.log("Exercise 12 result:", game.gyms);

/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.

Solve Exercise 13 here:
*/
game.gymStatus = function() {
  const gymTally = { completed: 0, incomplete: 0 };
  for (let gym of this.gyms) {
    if (gym.completed) {
      gymTally.completed++;
    } else {
      gymTally.incomplete++;
    }
  }
  console.log("Exercise 13 result:", gymTally);
};
game.gymStatus();

/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

Solve Exercise 14 here:
*/
game.partyCount = function() {
  return this.party.length;
};
console.log("Exercise 14 result:", game.partyCount());

/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/
for (let gym of game.gyms) {
  if (gym.difficulty < 8) {
    gym.completed = true;
  }
}
console.log("Exercise 15 result:", game.gyms);

/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.

Solve Exercise 16 here:
*/
console.log("Exercise 16 result:", game);

