"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { useRouter } from "next/navigation";
import { complete, run, type Effect, type Line, type Session, type Tone } from "./commands";

const toneClass: Record<Tone, string> = {
  plain: "text-neutral-300",
  ok: "text-[#4fda8e]",
  warn: "text-[#ffa600]",
  dim: "text-neutral-500",
  cmd: "text-neutral-100",
  err: "text-red-400",
};

const PROMPT = "gavindu@portfolio:~$";

const intro: Line[] = [
  { text: "interactive shell. type help, or try: scan", tone: "dim" },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function SiteShell() {
  const router = useRouter();
  const [lines, setLines] = useState<Line[]>(intro);
  const [value, setValue] = useState("");
  const history = useRef<string[]>([]);
  const cursor = useRef(-1);
  const session = useRef<Session>({ runs: 0, startedAt: 0 });
  const scroller = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    session.current.startedAt = Date.now();
  }, []);

  useEffect(() => {
    const el = scroller.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines]);

  const apply = (effect: Effect | undefined) => {
    if (!effect) return;
    switch (effect.type) {
      case "scroll":
        scrollToSection(effect.id);
        break;
      case "navigate":
        router.push(effect.href);
        break;
      case "external":
        window.open(effect.href, "_blank", "noopener,noreferrer");
        break;
      case "clear":
        setLines([]);
        break;
    }
  };

  const submit = () => {
    const text = value.trim();
    setValue("");
    cursor.current = -1;
    if (!text) {
      setLines((prev) => [...prev, { text: PROMPT, tone: "dim" }]);
      return;
    }
    history.current.push(text);
    const result = run(text, session.current);
    session.current.runs += 1;

    if (result.effect?.type === "clear") {
      apply(result.effect);
      return;
    }
    setLines((prev) => [
      ...prev,
      { text: `${PROMPT} ${text}`, tone: "cmd" },
      ...result.lines,
    ]);
    apply(result.effect);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      submit();
      return;
    }
    if (event.key === "Tab") {
      event.preventDefault();
      setValue((v) => complete(v));
      return;
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      const h = history.current;
      if (!h.length) return;
      cursor.current = cursor.current < 0 ? h.length - 1 : Math.max(0, cursor.current - 1);
      setValue(h[cursor.current]);
      return;
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      const h = history.current;
      if (cursor.current < 0) return;
      cursor.current += 1;
      if (cursor.current >= h.length) {
        cursor.current = -1;
        setValue("");
      } else {
        setValue(h[cursor.current]);
      }
      return;
    }
    if (event.key === "l" && event.ctrlKey) {
      event.preventDefault();
      setLines([]);
    }
  };

  return (
    <div className="mt-10 border-t border-neutral-800 pt-6 font-mono text-sm">
      <div
        ref={scroller}
        role="log"
        aria-live="polite"
        onClick={() => input.current?.focus()}
        className="max-h-72 overflow-y-auto pr-2"
      >
        {lines.map((line, i) => (
          <p key={i} className={`whitespace-pre-wrap break-words leading-relaxed ${toneClass[line.tone ?? "plain"]}`}>
            {line.swatch && (
              <span
                aria-hidden="true"
                className="mr-2 inline-block h-3 w-3 rounded-sm border border-neutral-700 align-middle"
                style={{ backgroundColor: line.swatch }}
              />
            )}
            {line.text}
          </p>
        ))}
      </div>

      <form
        className="mt-2 flex items-center gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
      >
        <label htmlFor="site-shell-input" className="shrink-0 text-[#4fda8e]">
          {PROMPT}
        </label>
        <input
          id="site-shell-input"
          ref={input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={onKeyDown}
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
          placeholder="help"
          className="min-w-0 flex-1 bg-transparent text-neutral-100 caret-[#4fda8e] outline-none placeholder:text-neutral-700"
        />
      </form>
    </div>
  );
}
