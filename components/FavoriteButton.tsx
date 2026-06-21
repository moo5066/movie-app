'use client'
import { useState } from "react";


export default function FavoriteButton({movie}:{movie:any}){
    const [saved,setSaved]=useState(false)


const handleFavorite = () => {
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
  const exists = favorites.some((f: any) => f.id === movie.id)
  if (!exists) {
    favorites.push(movie)
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }
  setSaved(true)
}

return(
<button onClick={handleFavorite} className="bg-red-600 px-4 py-2 rounded-lg font-semibold">
    {saved ? 'saved!' : 'Add to Favorites'}
</button>
)




}