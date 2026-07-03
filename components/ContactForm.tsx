"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Your name"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full bg-transparent border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
      />
      <input
        type="email"
        name="email"
        placeholder="Your email"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full bg-transparent border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
      />
      <textarea
        name="message"
        placeholder="Your message"
        value={form.message}
        onChange={handleChange}
        required
        rows={4}
        className="w-full bg-transparent border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-white text-black font-medium px-6 py-3 rounded-md hover:bg-gray-200 transition-colors disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
      {status === "sent" && <p className="text-green-400 text-sm text-center">Message sent!</p>}
      {status === "error" && <p className="text-red-400 text-sm text-center">Something went wrong.</p>}
    </form>
  );
}