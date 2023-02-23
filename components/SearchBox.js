"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex px-5 max-w-6xl mx-auto justify-between items-center"
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Keywords..."
        className=" flex-1 w-full h-14 rounded-sm placeholder-gray-500 outline-none 
      bg-transparent"
      />
      <button
        type="submit"
        disabled={!search}
        className="text-amber-600 disabled:text-gray-400 "
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
