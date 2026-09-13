export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="flex min-h-screen items-center justify-center px-6">
        <div className="mx-auto max-w-4xl text-center">

          <div className="mb-6 inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            SAFE • RELIABLE • FUN
          </div>

          <h1 className="mb-4 text-6xl font-black tracking-tight text-slate-900 md:text-8xl">
            Samesies
          </h1>

          <p className="mb-6 text-xl font-medium text-teal-600 md:text-2xl">
            The local side of shared interests.
          </p>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
            Find nearby people who share your hobbies,
            passions, interests, and wonderfully specific
            obsessions.
          </p>

          <div className="mb-16 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-xl bg-orange-500 px-8 py-4 text-lg font-bold text-white transition hover:bg-orange-600">
              Find Your People
            </button>

            <button className="rounded-xl border border-slate-300 px-8 py-4 text-lg font-semibold text-slate-700 transition hover:bg-slate-100">
              Learn More
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-6 text-left shadow-sm">
              <div className="mb-2 text-2xl">⭐</div>
              <h3 className="font-bold">Astronomy</h3>
              <p className="text-slate-600">
                Samesies! We found 12 people nearby.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6 text-left shadow-sm">
              <div className="mb-2 text-2xl">🎮</div>
              <h3 className="font-bold">Retro Gaming</h3>
              <p className="text-slate-600">
                You and RetroCollector92 have 3 Samesies.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6 text-left shadow-sm">
              <div className="mb-2 text-2xl">📷</div>
              <h3 className="font-bold">Photography</h3>
              <p className="text-slate-600">
                Turns out you're not the only one.
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
