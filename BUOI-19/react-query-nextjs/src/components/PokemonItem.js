import { getPokemon } from '@/api/getPokemon'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

const PokemonItem = ({ id }) => {

  // Lay tung Pokemon hien thi ra cho nguoi dung bang thu vien React Query

  const { data, isLoading, isError } = useQuery({
    queryKey: ["pokemon-list", id],
    queryFn: () => getPokemon(id)
  })

  // console.log(data);
  if(isLoading == true) return <p>Loading...</p>
  if(isError == true) return <p>Data Error</p>

  return (
    <>
      <h2 className='text-[20px]'>{id}</h2>
      <h2 className='text-[30px]'>{data?.name}</h2>
    </>
  )
}

export default PokemonItem