"use client";

import { useState } from "react";

export default function SearchFilter({
  categories,
  onSearch,
  onFilter,
}: any) {
  const [query, setQuery] = useState("");

  return (
    <div className="flex flex-col gap-6">

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search insights..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          onSearch(e.target.value);
        }}
        className="w-full border-b border-black/20 py-4 outline-none text-lg"
      />

      {/* FILTER */}
      <div className="flex gap-4 flex-wrap">
        {categories.map((c: any) => (
          <button
            key={c.slug}
            onClick={() => onFilter(c.slug)}
            className="px-4 py-2 border border-black/20 text-sm hover:bg-black hover:text-white transition"
          >
            {c.title}
          </button>
        ))}
      </div>

    </div>
  );
}