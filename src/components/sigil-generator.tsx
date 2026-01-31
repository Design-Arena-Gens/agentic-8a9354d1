'use client';

import { useMemo, useState } from 'react';

const seeds = [
  'bbBbnj',
  'bNnn',
  'nebula',
  'gloss',
  'pulse',
  'void',
  'sustain'
];

function jitter(seed: string, intensity = 3) {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return Array.from({ length: 24 }, (_, row) =>
    Array.from({ length: 24 }, (_, col) => {
      const value = Math.sin(hash + row * 12.88 + col * 7.77);
      const threshold = 0.54 + Math.sin((row + col + hash) * 0.12) * 0.18;
      return Math.abs(value) > threshold ? '#7f5af0' : 'transparent';
    })
  );
}

export function SigilGenerator() {
  const [index, setIndex] = useState(0);

  const matrix = useMemo(() => jitter(seeds[index]), [index]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-xl tracking-[0.35em] uppercase text-accent">
          Sigil Grid
        </h3>
        <button
          type="button"
          onClick={() => setIndex((prev) => (prev + 1) % seeds.length)}
          className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] text-white/70 transition hover:border-accent hover:text-accent"
        >
          Pulse
        </button>
      </div>
      <div className="grid grid-cols-24 gap-0.5 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur">
        {matrix.map((row, rowIdx) =>
          row.map((cell, cellIdx) => (
            <div
              key={`${rowIdx}-${cellIdx}`}
              className="aspect-square w-full rounded-sm"
              style={{
                backgroundColor: cell,
                boxShadow:
                  cell === 'transparent' ? undefined : '0 0 12px rgba(127, 90, 240, 0.55)'
              }}
            />
          ))
        )}
      </div>
      <p className="text-sm text-white/60">
        Each tap reinterprets the mantra through a shifting lattice of luminous nodes,
        sketching new glyphs born from the phonetic cadence of “Bbbbnj Bnnn”.
      </p>
    </div>
  );
}
