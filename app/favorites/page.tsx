'use client'
import React from 'react'
import { useEffect, useState } from "react"
const Favorites = () => {
const [favorites,setFavorites]=useState<any[]>([])
useEffect(() => {
  const saved = JSON.parse(localStorage.getItem('favorites') || '[]')
  setFavorites(saved)
}, [])


  return (
    <div className="bg-[#0F0F0F] text-white min-h-screen p-10">
      {favorites.length === 0 && <p className="text-gray-400">No favorites yet.</p>}
    <div className='grid gap-5 m-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
{favorites.map((fav:any)=>(
<div key={fav.id}>
  <img src={`https://image.tmdb.org/t/p/w500${fav.poster_path}`} alt={fav.title} className="w-[300px] rounded-lg" />
  <p className='font-semibold text-lg'>{fav.title}</p>
  <p className='text-gray-400'>{fav.release_date}</p>
  <p className='text-yellow-500'>🌟{fav.vote_average.toFixed(1)}</p>

</div>
))}

    </div>
   
    </div>
  )
}

export default Favorites
