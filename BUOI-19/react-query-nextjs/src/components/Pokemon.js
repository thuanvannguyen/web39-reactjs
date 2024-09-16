"use client";

import React, { useState } from 'react'
import PokemonItem from './PokemonItem'

const Pokemon = () => {
  const [id, setId] = useState(1);

  return (
    <div className='p-5'>
      <button className='bg-black text-white px-10 py-4 mr-4' onClick={() => setId(id !== 1 ? id - 1 : 250)}>Prev</button>
      <button className='bg-black text-white px-10 py-4 mr-4' onClick={()=>setId(id !== 250 ? id + 1 : 1)}>Next</button>

      <PokemonItem id={id} />
    </div>
  )
}

export default Pokemon