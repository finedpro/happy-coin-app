// app/page.js
export default function Home() {
  const TOKEN_ADDRESS =
    "J84zxRAPo2HuzkBRWXYBmqJDSxs92ZFD4eioRgZ8vDUd";

  const tokenomics = [
    { label: "Presale", value: 25 },
    { label: "Liquidity", value: 25 },
    { label: "Team (locked)", value: 10 },
    { label: "Marketing & Community", value: 20 },
    { label: "Reserves / Partnerships", value: 20 },
  ];

  const Section = ({ id, title, children }) => (
    <section id={id} className="border-t border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-black via-zinc-900 to-black text-zinc-100">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/50 border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-yellow-300/90 grid place-items-center text-zinc-900 font-black">
              :)
            </div>
            <div className="font-semibold">
              Happy <span className="text-yellow-300">(HPY)</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-white text-zinc-300">About</a>
            <a href="#tokenomics" className="hover:text-white text-zinc-300">Tokenomics</a>
            <a href="#roadmap" className="hover:text-white text-zinc-300">Roadmap</a>
            <a href="#documents" className="hover:text-white text-zinc-300">Docs</a>
            <a href="#community" className="hover:text-white text-zinc-300">Community</a>
            <a
              href="#presale"
              className="rounded-xl bg-yellow-300 px-4 py-2 text-zinc-900 font-semibold hover:opacity-90"
            >
              Join Presale
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              The community-driven token bringing
              <span className="block text-yellow-300">joy to Solana.</span>
            </h1>
            <p className="mt-6 text-zinc-300 max-w-prose">
              Happy (HPY) is a simple yet strong community token on Solana.
              Transparent tokenomics, a fair presale, and a clear roadmap for 2025–2026.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#presale"
                className="rounded-2xl bg-yellow-300 px-6 py-3 text-zinc-900 font-semibold text-center hover:opacity-90"
              >
                Join Presale
              </a>
              <a
                href="/Happy_Litepaper_EN_Updated.pdf"
                target="_blank"
                className="rounded-2xl border border-zinc-700 px-6 py-3 font-semibold text-center hover:bg-zinc-800"
              >
                Read Litepaper
              </a>
            </div>
            <div className="mt-6 text-sm text-zinc-400">
              Total Supply:{" "}
              <span className="text-zinc-200 font-medium">776,082,801 HPY</span> • Decimals: 6
            </div>

            {/* Animated smileys */}
            <div className="flex gap-6 mt-12 justify-center">
              <span className="text-5xl animate-bounce">😊</span>
              <span className="text-5xl animate-bounce delay-200">😎</span>
              <span className="text-5xl animate-bounce delay-500">🚀</span>
              <span className="text-5xl animate-pulse">🎉</span>
            </div>
          </div>

          {/* Token address card */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-2xl">
            <div className="text-xs uppercase text-zinc-400 tracking-wider">
              Token Address
            </div>
            <div className="mt-2 font-mono break-all text-sm text-zinc-100">
              {TOKEN_ADDRESS}
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <Stat label="Presale Price" value="1 USDC = 100 HPY" />
              <Stat label="Listing Price" value="1 USDC = 80 HPY" />
              <Stat label="Liquidity" value="65% locked 12m" />
              <Stat label="Vesting (Investors)" value="20% TGE, 80%/10m" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" title="About Happy">
        <p className="text-zinc-300">
          Happy (HPY) is a community-driven utility token built on the Solana network.
          Our mission is to bring positivity, community spirit, and real usability into crypto:
          from community events to DeFi utilities, games and future NFT integrations.
        </p>
      </Section>

      {/* TOKENOMICS */}
      <Section id="tokenomics" title="Tokenomics">
        <p className="text-zinc-300">Simple, transparent distribution designed for sustainable growth.</p>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
            <div className="grid gap-3">
              {tokenomics.map((t) => (
                <div key={t.label} className="flex items-center gap-4">
                  <div className="w-1/3 text-sm text-zinc-300">{t.label}</div>
                  <div className="flex-1 h-3 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-300" style={{ width: `${t.value}%` }} />
                  </div>
                  <div className="w-12 text-right text-sm text-zinc-200 font-medium">{t.value}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ROADMAP */}
      <Section id="roadmap" title="Roadmap">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Q4 2025", items: ["Launch presale on Solanium", "Listing on Raydium DEX", "Community airdrops & marketing push"] },
            { title: "Q1 2026", items: ["Staking platform for HPY holders", "Expand community & referral programs", "Solana ecosystem partnerships"] },
            { title: "Q2 2026", items: ["NFT collection", "Mini-game / gamification prototype", "Start CEX listing discussions"] },
            { title: "Q3 2026", items: ["DeFi integrations (lending/borrowing, farming)", "Global community expansion & translations", "More strategic partnerships"] },
            { title: "Q4 2026", items: ["Ecosystem update (staking v2, NFT marketplace)", "Target one major CEX listing", "Publish 2027 roadmap"] },
          ].map((phase) => (
            <div key={phase.title} className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="font-semibold text-yellow-300">{phase.title}</h3>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-zinc-300">
                {phase.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* DOCUMENTS */}
      <Section id="documents" title="Documents">
        <div className="grid sm:grid-cols-2 gap-4">
          <a
            href="/Happy_Litepaper_EN_Updated.pdf"
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 hover:bg-zinc-800 transition"
          >
            <div className="text-sm text-zinc-400">PDF</div>
            <div className="mt-1 font-semibold">Happy (HPY) Litepaper v1.1</div>
            <div className="mt-2 text-zinc-300 text-sm">
              Updated roadmap (Q4 2025–Q4 2026), tokenomics & presale info.
            </div>
          </a>
        </div>
      </Section>

      {/* PRESALE */}
      <Section id="presale" title="Join the Presale">
        <p className="text-zinc-300">
          Presale will run on Solanium. Allocation: 200,000,000 HPY. Currency: USDC (SPL).
        </p>
      </Section>

      {/* COMMUNITY */}
      <Section id="community" title="Join the Community">
        <p className="text-zinc-300">Follow updates, AMAs, airdrops and announcements.</p>
        <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
          <a href="https://x.com/HPYHAPPYHPY" target="_blank" rel="noopener noreferrer"
            className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5 hover:bg-zinc-800 transition">
            Twitter (X)
          </a>
          <a href="https://discord.gg/7sFPDek7" target="_blank" rel="noopener noreferrer"
            className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5 hover:bg-zinc-800 transition">
            Discord
          </a>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-zinc-400 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© 2025 Happy Token. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href={`https://solscan.io/token/${TOKEN_ADDRESS}`} target="_blank" className="hover:text-zinc-200">
              Solscan
            </a>
            <a href="/Happy_Litepaper_EN_Updated.pdf" className="hover:text-zinc-200">Docs</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl bg-zinc-800 p-3">
      <div className="text-xs text-zinc-400">{label}</div>
      <div className="mt-1 font-semibold text-zinc-100">{value}</div>
    </div>
  );
}
