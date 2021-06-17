//importing necessary dependencies

import React from 'react'
import Pokemoncard from './Pokecard'

/**'props' is like an attribute in html and is used to fetch the data from the
 * exported jsx file.
 * 'map' is an fn used to fetch elements one by one , traversing all over the array.
 */

const Pokemondex = (props) => {
  return (
    <div className='pokemonDex'>
      {props.hand.map((pokemon) => (
        <Pokemoncard pokemon={pokemon} />
      ))}
      <div className='totalExp'>{props.totalExp}</div>
    </div>
  )
}

export default Pokemondex
