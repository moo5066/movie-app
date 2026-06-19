"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { CiSearch } from "react-icons/ci"

export default function SearchBar() {
  const [query, setQuery] = useState("")
  const router = useRouter()

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/search?q=${query}`)
    }
  }

  return (
    <div className="flex lg:w-[50%] w-[90%] flex-row gap-3 items-center mx-auto">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie..."
        className="w-full p-3 border border-gray-700 hover:border-red-500 rounded-lg bg-transparent"
      />
      <button onClick={handleSearch} className="flex flex-row items-center gap-2 font-semibold bg-red-600 px-5 py-3 rounded-lg">
        <CiSearch size={20} />
        <p>Search</p>
      </button>
    </div>
  )
}