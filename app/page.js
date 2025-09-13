// app/page.js
const TOKEN_ADDRESS = "J84zxRAPo2HuzkBRWXYBmqJDSxs92ZFD4eioRgZ8vDUd";
const TOTAL_SUPPLY = "700,000,000 HPY";

const sections = [
  { label: "Chain", value: "Solana" },
  { label: "Ticker", value: "HPY" },
  { label: "Decimals", value: "6" },
  { label: "Total Supply", value: TOTAL_SUPPLY },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-zinc-900 text-zinc-100">
      {/* NAV */}
      <header className="sticky top-0 z-40 bg-black/50 backdrop-blur border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl">🙂</span>
            <span className="font-bold text-lg tracking-wide">Happy (HPY)</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-white/90">About</a>
            <a href="#tokenomics" className="hover:text-white/90">Tokenomics</a>
            <a href="#roadmap" className="hover:text-white/90">Roadmap</a>
            <a href="#presale" className="hover:text-white/90">Presale</a>
            <a href="#community" className="hover:text-white/90">Community</a>
            <a
              href="/Happy_Litepaper_EN_Updated.pdf"
              target="_blank"
              className="inline-block rounded-lg bg-yellow-400 px-3 py-1.5 font-semibold text-black"
            >
              Litepaper
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              The community-driven token bringing joy to Solana
            </h1>
            <p className="mt-5 text-zinc-300">
              Happy (HPY) is a fair, simple and transparent token for people who like
              to keep crypto fun. No over-promises—just shipping.
            </p>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {sections.map((s) => (
                <div key={s.label} className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="text-xs text-zinc-400">{s.label}</div>
                  <div className="font-semibold">{s.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-sm">
              <div className="text-zinc-400">Token Address</div>
              <code className="select-all break-all rounded-lg bg-black/60 px-2 py-2 inline-block border border-white/10">
                {TOKEN_ADDRESS}
              </code>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#presale"
                className="rounded-xl bg-yellow-400 text-black font-semibold px-5 py-3"
              >
                Join Presale
              </a>
              <a
                href="/Happy_Litepaper_EN_Updated.pdf"
                target="_blank"
                className="rounded-xl border border-white/15 px-5 py-3"
              >
                Read Litepaper
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-yellow-500/10 via-fuchsia-500/10 to-cyan-400/10 p-6">
            <div className="rounded-xl bg-black/50 p-6 border border-white/10">
              <h3 className="font-semibold">Quick Stats</h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                <li>• Chain: Solana</li>
                <li>• Ticker: HPY</li>
                <li>• Supply: {TOTAL_SUPPLY}</li>
                <li>• Decimals: 6</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TOKENOMICS */}
      <section id="tokenomics" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold">Tokenomics</h2>
        <p className="mt-2 text-zinc-300">
          Simple, fair distribution. No VC unlock bombs.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold">Allocation</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              <li>• Liquidity & Market Making — <b>45%</b></li>
              <li>• Community & Airdrops — <b>20%</b></li>
              <li>• Presale — <b>20%</b></li>
              <li>• Partnerships & Growth — <b>10%</b></li>
              <li>• Team (1-year lock, 6-month linear) — <b>5%</b></li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold">Supply</h3>
            <p className="mt-3 text-lg">{TOTAL_SUPPLY}</p>
            <p className="text-sm text-zinc-300 mt-2">
              Contract is on Solana; no hidden emissions.
            </p>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold">Roadmap (2025–2026)</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            {
              q: "Q3 2025",
              items: ["Website v1", "Litepaper", "Presale launch"],
            },
            {
              q: "Q4 2025",
              items: ["Listing on DEX", "Liquidity program", "First airdrop"],
            },
            {
              q: "2026",
              items: ["CEX attempt", "Partnerships", "Community grants"],
            },
          ].map((b) => (
            <div key={b.q} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm text-zinc-400">{b.q}</div>
              <ul className="mt-2 space-y-1 text-sm">
                {b.items.map((i) => (
                  <li key={i}>• {i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PRESALE */}
      <section id="presale" className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6">
          <h2 className="text-3xl font-bold">Presale</h2>
          <p className="mt-2 text-zinc-200">
            Early contributors get guaranteed allocation. No bots.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="https://solanium.io/launchpad/your-hpy-link" // TODO: asenda päris Solaniumi URLiga
              target="_blank"
              className="rounded-xl bg-yellow-400 text-black font-semibold px-5 py-3"
            >
              Join on Solanium
            </a>
            <a
              href="/Happy_Litepaper_EN_Updated.pdf"
              target="_blank"
              className="rounded-xl border border-white/15 px-5 py-3"
            >
              Read Litepaper
            </a>
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section id="community" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold">Join the Community</h2>
        <p className="mt-2 text-zinc-300">Follow updates and memes.</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href="https://twitter.com/yourhandle" // TODO
            target="_blank"
            className="rounded-xl border border-white/15 px-5 py-3"
          >
            Twitter / X
          </a>
          <a
            href="https://t.me/yourtelegram" // TODO
            target="_blank"
            className="rounded-xl border border-white/15 px-5 py-3"
          >
            Telegram
          </a>
          <a
            href="https://discord.gg/yourinvite" // TODO
            target="_blank"
            className="rounded-xl border border-white/15 px-5 py-3"
          >
            Discord
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-zinc-400">
          © {new Date().getFullYear()} Happy (HPY). Community-driven. DYOR.
        </div>
      </footer>
    </main>
  );
}
