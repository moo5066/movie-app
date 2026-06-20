import { getMovieDetails } from "@/lib/tmdb";
import Link from "next/link";

export default async function MoviePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const movie = await getMovieDetails(id)


  return(
  <div className="bg-[#0F0F0F] text-white min-h-screen">


<div className="relative h-[400px]">
    <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
        className="w-full h-full object-cover opacity-40"
      />
      </div>


<div className="p-10 flex flex-col md:flex-row gap-10">

  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-[200px] rounded-lg" />

  <div>
    <h1 className="text-3xl font-bold">{movie.title}</h1>
    <p className="text-gray-400">{movie.release_date}</p>
    <p className="text-gray-400">{movie.runtime} minutes</p>
    <p className="text-gray-400">{movie.vote_average.toFixed(1)}</p>
    <div className="flex gap-2">
{
  movie.genres.map((g: any) => (
    <p key={g.id} className="bg-red-600 px-3 py-1 rounded-full text-sm">{g.name}</p>
  ))
}
    </div>
    <p className="text-gray-300 max-w-2xl">{movie.overview}</p>
  </div>

</div>

<Link href="/" className="text-gray-400 absolute top-0 right-0 p-5 hover:text-white mb-5 inline-block">← Back</Link>
  </div>

  )
  
  








}
 