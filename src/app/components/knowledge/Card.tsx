"use client";

import Image from "next/image";
import { Post } from "@/lib/data";

export default function Card({
  post,
  onReadMore,
}: {
  post: Post;
  onReadMore: () => void;
}) {
  return (
    <div
      onClick={onReadMore}
      className="group block h-full cursor-pointer"
    >
      <div className="h-full flex flex-col border border-black/10 bg-white overflow-hidden transition-all duration-300 hover:shadow-xl">

        {/* IMAGE */}
        <div className="relative h-[200px]">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col flex-grow p-5">

          {/* CATEGORY */}
          <p className="text-xs text-black/40 uppercase tracking-wide">
            {post.category}
          </p>

          {/* TITLE */}
          <h3 className="mt-2 text-black font-medium text-lg leading-snug line-clamp-2">
            {post.title}
          </h3>

          {/* EXCERPT */}
          <p className="text-sm text-black/60 mt-2 line-clamp-3">
            {post.excerpt}
          </p>

          {/* META */}
          <div className="mt-auto pt-6 text-xs text-black/40 flex justify-between">
            <span>
              {new Date(post.publishedAt).toDateString()}
            </span>
            <span>{post.readTime}</span>
          </div>

          {/* CTA */}
          <div className="mt-4 text-[11px] tracking-[0.3em] uppercase flex items-center gap-3">
            Read Article
            <span className="w-6 h-[1px] bg-black group-hover:w-10 transition-all" />
          </div>

        </div>

      </div>
    </div>
  );
}