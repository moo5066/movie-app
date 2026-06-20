import { searchMovies } from "@/lib/tmdb"
import Link from "next/link"
export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q: string }> }) {
    
  const { q: query } = await searchParams

  if (!query) {
    return <div className="p-10 bg-[#0F0F0F] text-white min-h-screen">Please enter a search term.</div>
  }

  const movies = await searchMovies(query)

  return (
    <div className="p-10 bg-[#0F0F0F] text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-5">Results for "{query}"</h1>
      {movies.length === 0 && <p className="text-gray-400">No results found for "{query}"</p>}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {movies.map((movie: any) => (
          <Link key={movie.id} href={`/movie/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full object-cover rounded-lg"
            />
            <p className="font-semibold mt-3">{movie.title}</p>
            <p className="text-yellow-400">{movie.vote_average.toFixed(1)}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}