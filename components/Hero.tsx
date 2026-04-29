import WaitlistForm from "./WaitlistForm";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center px-6 pt-16">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left side — Brand + Tagline */}
        <div className="flex flex-col justify-center">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600 text-xl font-bold text-white">
              T
            </div>
            <span className="text-3xl font-bold tracking-tight text-white">Trayini</span>
          </div>

          <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            Voice infrastructure
            <br />
            for modern business.
          </h1>

          <p className="mb-2 text-xl font-medium text-violet-400 md:text-2xl">
            Śruti-Saṃvedana-Smṛti
          </p>

          <p className="max-w-lg text-base leading-relaxed text-slate-400 md:text-lg">
            Hear every word. Understand every intent. Remember every context. 
            The complete platform for building enterprise-grade conversational voice agents 
            that scale from your first call to your millionth.
          </p>
        </div>

        {/* Right side — Waitlist */}
        <div className="flex flex-col justify-center">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-sm">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-violet-400">
              Early Access
            </p>
            <h2 className="mb-4 text-2xl font-bold text-white">
              Join the waitlist
            </h2>
            <p className="mb-6 text-slate-400">
              Be the first to deploy voice agents that your customers will actually enjoy talking to.
            </p>
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  );
}
