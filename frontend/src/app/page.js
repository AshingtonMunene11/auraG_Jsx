"use client";

import { useEffect } from "react";
import { initGA } from "../utils/analytics";

export default function HomePage() {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <main className="min-h-screen">
      <h1 className="text-3xl font-bold">Welcome to Aura Gardens</h1>
      <p className="mt-4 text-gray-600">
        This is the Next.js homepage without React Router.
      </p>
    </main>
  );
}
