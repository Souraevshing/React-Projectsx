//importing necessary dependencies

import React from 'react'

/**importing pokemon image from github api.
 * props is used inside link to change the pokemon value on every
 * page re-fresh.
 */

const Pokemoncard = (props) => {
  const pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemon.id}.png`
  return (
    <div className='pokemonCard'>
      <h2>{props.pokemon.name}</h2>
      <img src={pokemonImg} alt='pokemon' />
      <div>
        <p>
          <strong>Type : </strong> {props.pokemon.type}
        </p>
        <p>
          <strong>XP : </strong> {props.pokemon.exp}
        </p>
      </div>
    </div>
  )
}

export default Pokemoncard
