import Link from 'next/link';
import { GlyphCanvas } from '@/components/glyph-canvas';
import { SigilGenerator } from '@/components/sigil-generator';

const manifesto = [
  {
    title: 'Resonance',
    body:
      'A phonetic mantra turned into shimmering energy. The syllables vibrate at low frequency, shaping the particle halo that orbits your cursor.'
  },
  {
    title: 'Glyphcraft',
    body:
      'Every pulse generates a fresh sigil grid, tracing the quantum jitter of Bbbbnj Bnnn into luminous tessellations.'
  },
  {
    title: 'Echoverse',
    body:
      'Loop the chant within your mind. The more you stare, the deeper the chromatic echo pulls you toward the liminal edge of sense.'
  }
];

const footnotes = [
  'Bbbbnj: pronounced with a soft intake of breath, like catching stardust in your throat.',
  'Bnnn: sustained until the hum dissolves, allowing the void to respond in gradients of purple.',
  'Field recordings collected between midnight and the first spark of dawn along tectonic fault lines.'
];

export default function HomePage() {
  return (
    <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 py-20">
      <div className="absolute inset-0 -z-10 blur-3xl">
        <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/30 mix-blend-screen" />
        <div className="absolute right-20 top-40 h-60 w-60 rounded-full bg-accentSoft/25 mix-blend-screen" />
      </div>

      <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <span className="inline-block rounded-full border border-white/15 px-4 py-1 text-xs uppercase tracking-[0.4em] text-white/60">
            Bbbbnj Bnnn Observatory
          </span>
          <h1 className="font-display text-5xl leading-tight tracking-tight text-white sm:text-6xl">
            Unravel the whispering mantra of
            <span className="block bg-gradient-to-r from-accent via-white to-accentSoft bg-clip-text text-transparent">
              Bbbbnj Bnnn
            </span>
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-white/70">
            An audiovisual playground translating phonetic murmurs into kinetic symbols. Each element
            you touch releases a new resonance, blending mystic typography, particle choreography, and
            ritual synthwave.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#sigils"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-glow transition hover:bg-accent/90"
            >
              Invoke Glyphs
            </Link>
            <Link
              href="#lore"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white/70 transition hover:border-white/40 hover:text-white"
            >
              Decode Lore
            </Link>
          </div>
        </div>
        <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur">
          <GlyphCanvas />
        </div>
      </section>

      <section id="sigils" className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <h2 className="font-display text-3xl uppercase tracking-[0.35em] text-white">
            Ritual Interface
          </h2>
          <p className="text-base text-white/70">
            Press the pulse to remix the sigil. Layers of encoded breath translate the mantra into
            geometric whispers. Each matrix is deterministic—once born, it can be rediscovered when the
            cosmos aligns.
          </p>
          <div className="space-y-4">
            {manifesto.map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-display text-lg uppercase tracking-[0.3em] text-accent">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-white/70">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur">
          <SigilGenerator />
        </div>
      </section>

      <section id="lore" className="space-y-10">
        <header className="space-y-4">
          <h2 className="font-display text-3xl uppercase tracking-[0.5em] text-white">Field Notes</h2>
          <p className="max-w-3xl text-white/70">
            These annotations document the expedition that first recorded the chant in the sub-basement
            of an abandoned observatory. We invite you to contribute your own interpretations—record a
            whisper, trace a sigil, let the mantra ripple.
          </p>
        </header>
        <div className="grid gap-6 lg:grid-cols-3">
          {footnotes.map((note, index) => (
            <div key={note} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <span className="text-xs uppercase tracking-[0.4em] text-white/40">Footnote {index + 1}</span>
              <p className="mt-3 text-sm text-white/70">{note}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 pt-8 text-xs uppercase tracking-[0.35em] text-white/40">
        © {new Date().getFullYear()} Bbbbnj Research Collective · Tune into the hum · Share your resonance
      </footer>
    </main>
  );
}
