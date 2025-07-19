"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/mode-toggle";
import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import {
  TerminalSquare,
  Globe,
  BookOpen,
  Rocket,
  ChevronRight,
} from "lucide-react";

export default function Home() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-background text-foreground">
      {/* Top-right theme toggle */}
      <div className="absolute top-4 right-4 z-10">
        <ModeToggle />
      </div>

      {/* Main card */}
      <div className="w-full  bg-card rounded-2xl shadow-lg p-8 space-y-8">
        {/* Header */}
        <header className="text-center space-y-3">
          <h1 className="text-4xl font-bold tracking-tight leading-snug">
            🚀 Tauri + Next.js + Tailwind + Shadcn + Bun
          </h1>
          <p className="text-muted-foreground text-sm">
            A lightning-fast cross-platform starter powered by modern tech.
          </p>
        </header>

        {/* Stack */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Rocket className="w-5 h-5" />
            Tech Stack
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-muted-foreground text-sm">
            <li className="flex items-center gap-2">
              <TerminalSquare className="w-4 h-4" />
              Tauri
            </li>
            <li className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              Next.js
            </li>
            <li className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Shadcn UI
            </li>
            <li className="flex items-center gap-2">
              <TerminalSquare className="w-4 h-4" />
              Tailwind CSS
            </li>
            <li className="flex items-center gap-2">
              <Rocket className="w-4 h-4" />
              Bun Runtime
            </li>
          </ul>
        </section>
        <div className="flex justify-center items-center gap-4 text-muted-foreground text-sm">
          <span className="flex items-center gap-2 text-2xl">🍎 macOS</span>
          <span className="flex items-center gap-2 text-2xl">🪟 Windows</span>
          <span className="flex items-center gap-2 text-2xl">🐧 Linux</span>
        </div>

        {/* Input form */}
        <section>
          <form
            className="flex flex-col sm:flex-row gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              greet();
            }}
          >
            <Input
              id="greet-input"
              placeholder="Enter a name..."
              className="flex-grow text-base"
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <Button type="submit" className="text-base">
              Greet
            </Button>
          </form>

          {greetMsg && (
            <p className="mt-4 text-center text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/20 p-3 rounded-md text-lg font-medium">
              {greetMsg}
            </p>
          )}
        </section>

        {/* Footer / Docs */}
        <footer className="text-center pt-4 border-t border-border">
          <a
            href="https://github.com/nomandhoni-cs/tauri-nextjs-shadcn-boilerplate"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition"
          >
            <BookOpen className="w-4 h-4 mr-1" />
            Read the Docs
            <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        </footer>
      </div>
    </main>
  );
}
