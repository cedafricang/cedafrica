"use client";

import { useState, useMemo } from "react";
import { posts, categories } from "@/lib/data";
import Card from "../components/knowledge/Card";
import Hero from "../components/knowledge/Hero";
import SearchFilter from "../components/knowledge/SearchFilter";
import Pagination from "../components/knowledge/Pagination";

const POSTS_PER_PAGE = 6;

export default function Page() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [page, setPage] = useState(1);

  /* ============================= */
  /* FILTER LOGIC (SAFE) */
  /* ============================= */

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const title = post.title?.toLowerCase() || "";
      const search = query.toLowerCase();

      const matchSearch = title.includes(search);

      const matchCategory =
        activeCategory === "all" ||
        post.category?.toLowerCase() === activeCategory;

      return matchSearch && matchCategory;
    });
  }, [query, activeCategory]);

  /* ============================= */
  /* PAGINATION (SAFE) */
  /* ============================= */

  const totalPages = Math.max(
    1,
    Math.ceil(filtered.length / POSTS_PER_PAGE)
  );

  const paginatedPosts = useMemo(() => {
    const start = (page - 1) * POSTS_PER_PAGE;
    return filtered.slice(start, start + POSTS_PER_PAGE);
  }, [filtered, page]);

  /* ============================= */
  /* HANDLERS */
  /* ============================= */

  const handleSearch = (value: string) => {
    setQuery(value);
    setPage(1);
  };

  const handleFilter = (slug: string) => {
    setActiveCategory(slug);
    setPage(1);
  };

  const resetFilters = () => {
    setQuery("");
    setActiveCategory("all");
    setPage(1);
  };

  return (
    <main className="bg-white text-black">

      {/* HERO */}
      <Hero />

      {/* CONTROLS */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
            Insights & Perspectives
          </h2>
          <p className="text-black/50 mt-2 max-w-xl">
            Explore our thinking around design, engineering, and audiovisual excellence.
          </p>
        </div>

        {/* Search + Filters */}
        <SearchFilter
          categories={categories}
          onSearch={handleSearch}
          onFilter={handleFilter}
        />

      </section>

      {/* GRID */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        {/* Results Info */}
        <div className="mb-8 flex justify-between items-center text-sm text-black/50">
          <span>
            Showing {paginatedPosts.length} of {filtered.length} articles
          </span>

          {activeCategory !== "all" && (
            <span className="uppercase tracking-wide">
              {activeCategory.replace("-", " ")}
            </span>
          )}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {paginatedPosts.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </div>

        {/* EMPTY STATE */}
        {paginatedPosts.length === 0 && (
          <div className="mt-20 text-center">

            <h3 className="text-xl font-medium mb-2">
              No results found
            </h3>

            <p className="text-black/50 mb-6">
              Try adjusting your search or selecting a different category.
            </p>

            <button
              onClick={resetFilters}
              className="border px-6 py-3 hover:bg-black hover:text-white transition"
            >
              Reset Filters
            </button>

          </div>
        )}

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="mt-16">
            <Pagination
              page={page}
              total={totalPages}
              setPage={setPage}
            />
          </div>
        )}

      </section>

    </main>
  );
}