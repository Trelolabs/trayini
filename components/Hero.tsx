import WaitlistForm from "./WaitlistForm";

export default function Hero() {
  return (
    <section className="flex flex-col items-center w-full px-6 pt-24 pb-16 flex-1 justify-center relative">
      
      {/* Top Label */}
      <div className="flex items-center gap-4 mb-8">
        <div className="h-[1px] w-8 bg-[#E96633]"></div>
        <span className="text-[#E96633] uppercase tracking-[0.25em] text-xs font-bold">
          Early Access
        </span>
        <div className="h-[1px] w-8 bg-[#E96633]"></div>
      </div>

      {/* Main Heading */}
      <h1 className="text-center flex flex-col font-black tracking-tight leading-[0.95] mb-8">
        <span className="text-white text-7xl md:text-8xl lg:text-[120px]">VOICE AI</span>
        <span 
          className="text-transparent text-7xl md:text-8xl lg:text-[120px]" 
          style={{ WebkitTextStroke: "1px #E96633" }}
        >
          BUILT FOR
        </span>
        <span className="text-white text-7xl md:text-8xl lg:text-[120px]">BUSINESSES.</span>
      </h1>

      {/* Subheading */}
      <p className="text-[#a1a1aa] italic tracking-[0.3em] text-sm md:text-base mb-20 font-serif font-light">
        Śruti · Saṃvedana · Smṛti
      </p>

      {/* 3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full mb-16">
        {/* Card 1 */}
        <div className="bg-[#131110]/80 border border-[#26211f] rounded-2xl p-6 hover:border-[#E96633]/30 transition-colors">
          <div className="flex justify-between items-start mb-10">
            <div className="w-10 h-10 rounded-full bg-[#E96633]/10 flex items-center justify-center text-[#E96633]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
            </div>
            <span className="text-[10px] uppercase tracking-wider text-[#E96633] font-bold bg-[#E96633]/10 px-2 py-1 rounded">Core Product</span>
          </div>
          <h3 className="text-white font-bold mb-3">End-to-End Voice Agents</h3>
          <p className="text-sm text-gray-500 leading-relaxed">Deploy intelligent AI voice agents that handle inbound and outbound calls — fully autonomous, human-grade conversations.</p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#131110]/80 border border-[#26211f] rounded-2xl p-6 hover:border-[#E96633]/30 transition-colors">
          <div className="flex justify-between items-start mb-10">
            <div className="w-10 h-10 rounded-full bg-[#E96633]/10 flex items-center justify-center text-[#E96633]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <span className="text-[10px] uppercase tracking-wider text-[#E96633] font-bold bg-[#E96633]/10 px-2 py-1 rounded">In Development</span>
          </div>
          <h3 className="text-white font-bold mb-3">Voice CRM for Business</h3>
          <p className="text-sm text-gray-500 leading-relaxed">Every call, logged. Every intent, captured. A CRM built natively around voice — not retrofitted from text.</p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#131110]/80 border border-[#26211f] rounded-2xl p-6 hover:border-[#E96633]/30 transition-colors">
          <div className="flex justify-between items-start mb-10">
            <div className="w-10 h-10 rounded-full bg-[#E96633]/10 flex items-center justify-center text-[#E96633]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>
            </div>
            <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold bg-gray-800/50 px-2 py-1 rounded">Platform</span>
          </div>
          <h3 className="text-white font-bold mb-3">Voice Agent Infrastructure</h3>
          <p className="text-sm text-gray-500 leading-relaxed">The primitives layer — telephony, speech, orchestration, and memory — so you can build voice products without rebuilding the stack.</p>
        </div>
      </div>

      {/* Waitlist Section */}
      <div className="max-w-5xl w-full flex flex-col items-start gap-4">
        <p className="text-sm text-gray-400">Join the waitlist — be first when we go live.</p>
        <WaitlistForm />
      </div>

    </section>
  );
}
