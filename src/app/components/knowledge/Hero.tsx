export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-end">

      <img
        src="/images/hero/avimage.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 text-white">

        <p className="uppercase tracking-[0.4em] text-xs text-white/60 mb-4">
          CED Africa
        </p>

        <h1 className="text-5xl text-white md:text-7xl font-light leading-tight max-w-3xl">
          Knowledge Hub
        </h1>

        <p className="mt-6 text-white/70 max-w-xl">
          Insights, strategies, and technical perspectives shaping
          audiovisual excellence across Africa.
        </p>

      </div>
    </section>
  );
}