//importing necessary dependencies

import React from 'react'
import pokemondata from './pokemonData'
import Pokemondex from './Pokedex'

let ar1 = [] //creating empty array to store pokemon data
let ar2 = [
  ...pokemondata,
] /**three dots(...) is called spread operator and is used to copy all elements of one array to this array.*/

/**Iterating over arrays until both arrays are equal*/
while (ar1.length < ar2.length) {
  let index = Math.floor(
    Math.random() * ar2.length
  ) /**Generating a random no btw array1 & array2 */
  let random = ar2.splice(index, 1) /**taking one pokemon data one at a time */
  ar1.push(random[0]) /**adding objects to the array */
}

console.log(ar1)
console.log(ar2)

/**Object.values returns values of all elements
 * reduce() method executes the expr and returned to the callback function.
 * Here t is variable and summing exp value to t; initialising t = 0
 */

let pokemon1 = Object.values(ar1).reduce((t, { exp }) => t + exp, 0)
let pokemon2 = Object.values(ar1).reduce((t, { exp }) => t + exp, 0)

/**creating data, checking if exp value of pokemon1 is greater than pokemon2 or vice
 * versa.
 * Ternary Operator ( ? : ) is used here for conditional-rendering and returning to
 * app.js
 */

const Pokemongame = () => {
  return (
    <div className='pokegame-container'>
      {pokemon1 > pokemon2 ? (
        <h1 className='winner'>WINNER</h1>
      ) : (
        <h1 className='loser'>LOSER</h1>
      )}
      <Pokemondex hand={ar1} totalExp={pokemon1} />
      {pokemon1 < pokemon2 ? (
        <h1 className='loser'>LOSER</h1>
      ) : (
        <h1 className='winner'>WINNER</h1>
      )}
      <Pokemondex hand={ar2} totalExp={pokemon2} />
    </div>
  )
}

export default Pokemongame
