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
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="email"
        required
        placeholder="Enter your work email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-lg bg-slate-950 border border-slate-700 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
      />
      <button
        type="submit"
        className="w-full rounded-lg bg-violet-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
      >
        Join the Waitlist
      </button>
    </form>
  );
}
