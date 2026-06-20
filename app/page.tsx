
import { CiHeart } from "react-icons/ci";
import { getTrendingMovies } from "@/lib/tmdb";
import SearchBar from '@/components/SearchBar'
import Link from "next/link";

export default async function Home() {

const movies =await getTrendingMovies();





 return(
  <div className="bg-[#0F0F0F] text-white min-h-screen">
  <div className=" bg-[#49414118] p-5 border-b border-gray-500">
   <div className="flex lg:justify-around justify-between items-center">
    <h1 className="flex flex-row gap-1"><span className="bg-red-600 px-1.5  font-bold text-xl rounded-lg">M</span><span className="text-xl font-bold">MovieFlix</span></h1>
    <div className="flex flex-row items-center gap-2 font-semibold hover:bg-[#67646418] cursor-pointer p-2 rounded-lg">
<CiHeart size={25}/>
<p>Favorites</p>
    </div>
   </div>
   </div>

<div className="flex flex-col gap-2 p-5 mt-52  text-center">
  <h1 className="text-6xl font-bold">Discover Your Next Favorite Movie</h1>
  <p className="text-gray-400 text-xl">Search, explore, and save the best movies from around the world.</p>

<SearchBar/>

</div>

<div className="mt-20">
  <h1 className="text-3xl m-30 font-bold">Trending This Week</h1>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 px-10">
  {
    movies.map((movie:any)=>(
        <Link key={movie.id} href={`/movie/${movie.id}`} className="flex flex-col gap-2">
<img 
src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
alt={movie.title} className="w-full h-[300px] object-cover rounded-lg" />
<p className="font-semibold">{movie.title}</p>
<p className="text-yellow-400 text-sm">{movie.vote_average.toFixed(1)}</p>

      </Link>
    ))
  }
</div>
</div>
  </div>
 )
 
 
}



