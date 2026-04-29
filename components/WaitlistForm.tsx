"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Waitlist submission:", email);
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full">
      <input
        type="email"
        required
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-80 rounded-full bg-[#1C1817]/60 border border-[#3A2E2A] px-6 py-3.5 text-white placeholder-gray-500 outline-none transition focus:border-[#E96633]"
      />
      <button
        type="submit"
        className="rounded-full bg-[#B3522C] hover:bg-[#9A4625] text-white px-8 py-3.5 text-sm font-semibold transition uppercase tracking-wider flex items-center justify-center gap-2"
      >
        Join Waitlist
        <span>&rarr;</span>
      </button>
    </form>
  );
}
