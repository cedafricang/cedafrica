"use client";

export default function Pagination({ page, total, setPage }: any) {
  return (
    <div className="flex justify-center gap-4 mt-16">

      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Prev
      </button>

      <span>{page}</span>

      <button
        disabled={page === total}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>

    </div>
  );
}