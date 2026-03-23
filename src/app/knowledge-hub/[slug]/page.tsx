import { posts } from "@/lib/data";
import { notFound } from "next/navigation";
import ContentRenderer from "../../components/knowledge/ContentRenderer";

/* ============================= */
/* METADATA */
/* ============================= */

export async function generateMetadata({ params }: any) {
  const { slug } = await params;

  const post = posts.find(
    (p) => p.slug.toLowerCase() === slug?.toLowerCase()
  );

  return {
    title: post?.title,
    description: post?.excerpt,
  };
}

/* ============================= */
/* PAGE */
/* ============================= */

export default async function ArticlePage({ params }: any) {
  const { slug } = await params;

  if (!slug) return notFound(); // ✅ prevent crash

  const post = posts.find(
    (p) => p.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!post) return notFound();

  return (
    <main className="bg-white text-black">

      {/* HERO */}
      <section className="relative h-[85vh] flex items-end overflow-hidden">

        <img
          src={post.coverImage}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-24 text-white">

          <p className="uppercase text-xs tracking-[0.4em] text-white/50 mb-4">
            {post.category}
          </p>

          <h1 className="text-4xl text-white md:text-6xl font-light leading-tight max-w-3xl">
            {post.title}
          </h1>

          <div className="mt-6 flex gap-6 text-white/60 text-sm">
            <span>
              {new Date(post.publishedAt).toDateString()}
            </span>
            <span>{post.readTime}</span>
          </div>

        </div>
      </section>

      {/* CONTENT */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6">
          <ContentRenderer content={post.content} />
        </div>
      </section>

    </main>
  );
}