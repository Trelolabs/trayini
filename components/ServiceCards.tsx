export default function ServiceCards() {
  const cards = [
    {
      number: "01",
      sanskrit: "Śruti",
      title: "The Ear",
      description:
        "Real-time speech recognition and voice streaming infrastructure. Connect any telephony stack — Twilio, SIP, WebRTC — with sub-500ms latency. Your agents hear every caller clearly, in any language, at any scale.",
    },
    {
      number: "02",
      sanskrit: "Saṃvedana",
      title: "The Mind",
      description:
        "Conversational intelligence powered by LLM orchestration. Intent recognition, dynamic dialogue management, tool use, and reasoning. Your agents don't just respond — they understand, negotiate, and resolve.",
    },
    {
      number: "03",
      sanskrit: "Smṛti",
      title: "The Memory",
      description:
        "Persistent context across every interaction. RAG-powered knowledge retrieval, CRM synchronization, and conversation history. Your agents remember the customer's name, their last issue, and their preferences — forever.",
    },
  ];

  return (
    <section className="px-6 pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-violet-400">
            What We Do
          </p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            The complete voice agent stack
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.number}
              className="card-glow group rounded-2xl border border-slate-800 bg-slate-900/40 p-8 transition hover:border-slate-700"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="text-4xl font-bold text-slate-800 transition group-hover:text-violet-600/30">
                  {card.number}
                </span>
                <span className="rounded-full bg-violet-600/10 px-3 py-1 text-sm font-medium text-violet-400">
                  {card.sanskrit}
                </span>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">{card.title}</h3>
              <p className="leading-relaxed text-slate-400">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
