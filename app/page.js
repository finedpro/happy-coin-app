"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  // --- Project constants ---
  const TOKEN_ADDRESS = "J84zxRAPo2HuzkBRWXYBmqJDSxs92ZFD4eioRgZ8vDUd";
  const TOTAL_SUPPLY = "700,000,000 HPY";

  // --- Presale placeholders (edit these until Solanium link is live) ---
  const PRESALE_GOAL_USDC = 200_000;     // hard cap
  const PRESALE_SOFTCAP_USDC = 50_000;   // soft cap
  const [raised, setRaised] = useState(12_450); // update manually for now
  const PRESALE_START = useMemo(() => new Date("2025-11-01T12:00:00Z"), []);
  const PRESALE_END   = useMemo(() => new Date("2025-11-15T12:00:00Z"), []);
  const SOLANIUM_URL  = ""; // add when you get it, e.g. "https://solanium.io/launchpad/happy-coin"

  // --- Parallax background orbs ---
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, 80]);
  const y2 = useTransform(scrollY, [0, 600], [0, -60]);

  // --- Copy Address button ---
  const [copied, setCopied] = useState(false);
  async function copyAddr() {
    try {
      await navigator.clipboard.writeText(TOKEN_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {}
  }

  // --- Ticker / util helpers ---
  function fmt(n){ return n.toLocaleString("en-US"); }
  function pct(a,b){ return Math.min(100, Math.round((a/b)*100)); }
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 30_000); // refresh every 30s for countdown
    return () => clearInterval(id);
  }, []);
  function timeLeft(end){
    const ms = Math.max(0, end.getTime() - now);
    const d = Math.floor(ms/86400000);
    const h = Math.floor((ms%86400000)/3600000);
    const m = Math.floor((ms%3600000)/60000);
    return `${d}d ${h}h ${m}m`;
  }

  const tokenomics = [
    { label: "Presale", value: 25 },
    { label: "Liquidity", value: 25 },
    { label: "Team (locked)", value: 10 },
    { label: "Marketing & Community", value: 20 },
    { label: "Reserves / Partnerships", value: 20 },
  ];

  const Section = ({ id, title, children }) => (
    <section id={id} className="border-t border-zinc-800/60">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <motion.h2
          className="text-2xl md:text-3xl font-bold"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4 }}
        >
          {title}
        </motion.h2>
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-zinc-100">
      {/* Floating background orbs */}
      <motion.div style={{ y: y1 }} className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-yellow-400/25 glow" />
      <motion.div style={{ y: y2 }} className="pointer-events-none absolute top-40 -left-24 h-72 w-72 rounded-full bg-fuchsia-500/20 glow" />

      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-zinc-800/60">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="h-9 w-9 rounded-2xl bg-yellow-300 grid place-items-center text-zinc-900 font-black shadow group-hover:scale-110 transition">:)</span>
            <span className="font-semibold">Happy <span className="text-yellow-300">(HPY)</span></span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#about" className="hover:text-white text-zinc-300">About</Link>
            <Link href="#tokenomics" className="hover:text-white text-zinc-300">Tokenomics</Link>
            <Link href="#roadmap" className="hover:text-white text-zinc-300">Roadmap</Link>
            <Link href="#documents" className="hover:text-white text-zinc-300">Docs</Link>
            <Link href="#community" className="hover:text-white text-zinc-300">Community</Link>
            <Link href="#presale" className="rounded-xl bg-yellow-300 px-4 py-2 text-zinc-900 font-semibold hover:opacity-90">Join Presale</Link>
          </nav>
        </div>
      </header>

      {/* Ticker */}
      <div className="border-b border-zinc-800/60 bg-black/40">
        <div className="marquee py-2 text-xs text-zinc-300">
          <span className="marquee-track">
            Total Supply {TOTAL_SUPPLY} • Solana (SPL) • Ticker HPY • Presale on Solanium • Liquidity locked • DYOR •
          </span>
          <span className="marquee-track">
            Total Supply {TOTAL_SUPPLY} • Solana (SPL) • Ticker HPY • Presale on Solanium • Liquidity locked • DYOR •
          </span>
        </div>
      </div>

      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              The community-driven token bringing{" "}
              <span className="block bg-gradient-to-r from-yellow-300 via-amber-200 to-white bg-clip-text text-transparent">
                joy to Solana.
              </span>
            </h1>
            <p className="mt-6 text-zinc-300 max-w-prose">
              Transparent tokenomics, a fair presale, and a practical roadmap for 2025–2026. Keep crypto fun & honest.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="#presale" className="rounded-2xl bg-yellow-300 px-6 py-3 text-zinc-900 font-semibold text-center hover:opacity-90">
                Join Presale
              </Link>
              <a href="/Happy_Litepaper_EN_Updated.pdf" target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-zinc-700 px-6 py-3 font-semibold text-center hover:bg-zinc-800">
                Read Litepaper
              </a>
            </div>
            <div className="mt-6 text-sm text-zinc-400">
              Total Supply: <span className="text-zinc-200 font-medium">{TOTAL_SUPPLY}</span> • Decimals: 6
            </div>

            {/* Bouncy / pulsing emojis */}
            <div className="flex gap-6 mt-12 justify-center">
              <span className="text-5xl animate-bounce">😊</span>
              <span className="text-5xl animate-bounce delay-200">😎</span>
              <span className="text-5xl animate-bounce delay-500">🚀</span>
              <span className="text-5xl animate-pulse">🎉</span>
            </div>
          </motion.div>

          {/* Token Address card */}
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-2xl floaty"
          >
            <div className="text-xs uppercase text-zinc-400 tracking-wider">Token Address</div>
            <div className="mt-2 font-mono break-all text-sm text-zinc-100">{TOKEN_ADDRESS}</div>
            <div className="mt-4 flex gap-3 text-sm">
              <button onClick={copyAddr} className="rounded-xl bg-zinc-800 px-4 py-2 hover:bg-zinc-700 border border-zinc-700 active:scale-95 transition">
                {copied ? "Copied!" : "Copy Address"}
              </button>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <Stat label="Presale Price" value="1 USDC = 100 HPY" />
              <Stat label="Listing Price" value="1 USDC = 80 HPY" />
              <Stat label="Liquidity" value="65% locked 12m" />
              <Stat label="Vesting (Investors)" value="20% TGE, 80%/10m" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRESALE PROGRESS (placeholder until Solanium is live) */}
      <section id="presale-progress" className="border-t border-zinc-800/60">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {/* Progress Card */}
            <div className="md:col-span-2 rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Presale Progress</h2>
                <span className="text-sm text-zinc-400">
                  Ends in: <span className="text-zinc-200 font-medium">{timeLeft(PRESALE_END)}</span>
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-6 text-sm">
                <div className="rounded-xl bg-zinc-800 px-4 py-2">
                  Raised: <span className="font-semibold text-zinc-100">${fmt(raised)}</span>
                </div>
                <div className="rounded-xl bg-zinc-800 px-4 py-2">
                  Goal: <span className="font-semibold text-zinc-100">${fmt(PRESALE_GOAL_USDC)}</span>
                </div>
                <div className="rounded-xl bg-zinc-800 px-4 py-2">
                  Progress: <span className="font-semibold text-zinc-100">{pct(raised, PRESALE_GOAL_USDC)}%</span>
                </div>
              </div>

              {/* progress bar */}
              <div className="mt-5 w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-yellow-300 to-yellow-400 transition-all duration-700"
                  style={{ width: `${pct(raised, PRESALE_GOAL_USDC)}%` }}
                />
              </div>

              {/* softcap marker */}
              <div className="relative mt-2 h-4">
                <div
                  className="absolute -top-1 h-6 w-[2px] bg-zinc-500"
                  style={{ left: `${pct(PRESALE_SOFTCAP_USDC, PRESALE_GOAL_USDC)}%` }}
                  title="Soft cap"
                />
                <div
                  className="absolute text-[10px] -top-5 -translate-x-1/2 text-zinc-400"
                  style={{ left: `${pct(PRESALE_SOFTCAP_USDC, PRESALE_GOAL_USDC)}%` }}
                >
                  Soft cap ${fmt(PRESALE_SOFTCAP_USDC)}
                </div>
              </div>

              {/* buttons */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#presale"
                  className="rounded-2xl bg-yellow-300 px-6 py-3 text-zinc-900 font-semibold hover:opacity-90"
                >
                  Presale details
                </a>

                {SOLANIUM_URL ? (
                  <a
                    href={SOLANIUM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl border border-yellow-300/50 px-6 py-3 font-semibold text-zinc-100 hover:bg-yellow-300/10"
                  >
                    Open on Solanium
                  </a>
                ) : (
                  <a
                    href="#"
                    className="rounded-2xl border border-zinc-700 px-6 py-3 font-semibold text-zinc-200 pointer-events-none opacity-60"
                    title="Solanium link coming soon"
                  >
                    Open on Solanium (soon)
                  </a>
                )}
              </div>

              <p className="mt-3 text-xs text-zinc-500">
                This progress is a placeholder for preview purposes. It will update automatically once the official Solanium sale is live.
              </p>
            </div>

            {/* Window & terms */}
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold">Sale Window</h3>
                <ul className="mt-3 text-sm text-zinc-300 space-y-1">
                  <li>Start: <span className="text-zinc-100">{PRESALE_START.toUTCString()}</span></li>
                  <li>End: <span className="text-zinc-100">{PRESALE_END.toUTCString()}</span></li>
                  <li>Price: <span className="text-zinc-100">1 USDC = 100 HPY</span></li>
                  <li>Allocation: <span className="text-zinc-100">200,000,000 HPY</span></li>
                </ul>
              </div>
              <div className="mt-6 text-xs text-zinc-400">
                Liquidity: 65% of raised funds to Raydium LP, locked 12 months. Vesting: public 20% TGE, rest over 10 months.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" title="About Happy">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <p className="text-zinc-300">
            Happy (HPY) is a community-first token on Solana. Realistic promises, transparent execution and lots of good vibes.
          </p>
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6">
            <h3 className="font-semibold">Presale Highlights</h3>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-zinc-300">
              <li>Soft cap: 50,000 USDC • Hard cap: 200,000 USDC</li>
              <li>Presale allocation: 200,000,000 HPY (~25% of supply)</li>
              <li>Liquidity: 65% of raised funds → Raydium LP, locked 12 months</li>
              <li>Team: 6 months lock, then 10% monthly</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* TOKENOMICS */}
      <Section id="tokenomics" title="Tokenomics">
        <p className="text-zinc-300">Simple, transparent distribution designed for sustainable growth.</p>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6">
            <div className="grid gap-3">
              {tokenomics.map((t, i) => (
                <div key={t.label} className="flex items-center gap-4">
                  <div className="w-1/3 text-sm text-zinc-300">{t.label}</div>
                  <div className="flex-1 h-3 bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-yellow-300"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${t.value}%` }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 0.8, delay: 0.05 * i }}
                    />
                  </div>
                  <div className="w-12 text-right text-sm text-zinc-200 font-medium">{t.value}%</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6">
            <h3 className="font-semibold">Key Numbers</h3>
            <ul className="mt-3 grid grid-cols-2 gap-3 text-sm">
              <li className="rounded-xl bg-zinc-800/70 p-3">Total Supply<br/><span className="font-semibold">{TOTAL_SUPPLY}</span></li>
              <li className="rounded-xl bg-zinc-800/70 p-3">Decimals<br/><span className="font-semibold">6</span></li>
              <li className="rounded-xl bg-zinc-800/70 p-3">Chain<br/><span className="font-semibold">Solana (SPL)</span></li>
              <li className="rounded-xl bg-zinc-800/70 p-3">Ticker<br/><span className="font-semibold">HPY</span></li>
            </ul>
          </div>
        </div>
      </Section>

      {/* ROADMAP – full */}
      <Section id="roadmap" title="Roadmap">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Q4 2025", items: ["Launch presale on Solanium", "Listing on Raydium DEX", "Community airdrops & marketing push"] },
            { title: "Q1 2026", items: ["Staking platform for HPY holders", "Expand community & referral programs", "Solana ecosystem partnerships"] },
            { title: "Q2 2026", items: ["NFT collection", "Mini-game / gamification prototype", "Start CEX listing discussions"] },
            { title: "Q3 2026", items: ["DeFi integrations (lending/borrowing, farming)", "Global community expansion & translations", "More strategic partnerships"] },
            { title: "Q4 2026", items: ["Ecosystem update (staking v2, NFT marketplace)", "Target one major CEX listing", "Publish 2027 roadmap"] },
          ].map((phase) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6"
            >
              <h3 className="font-semibold text-yellow-300">{phase.title}</h3>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-zinc-300">
                {phase.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* DOCUMENTS */}
      <Section id="documents" title="Documents">
        <div className="grid sm:grid-cols-2 gap-4">
          <a
            href="/Happy_Litepaper_EN_Updated.pdf"
            className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5 hover:bg-zinc-800 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-sm text-zinc-400">PDF</div>
            <div className="mt-1 font-semibold">Happy (HPY) Litepaper v1.1</div>
            <div className="mt-2 text-zinc-300 text-sm">Updated roadmap (Q4 2025–Q4 2026), tokenomics & presale info.</div>
          </a>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5 opacity-60">
            <div className="text-sm text-zinc-400">One-pager</div>
            <div className="mt-1 font-semibold">Coming soon</div>
          </div>
        </div>
      </Section>

      {/* PRESALE details */}
      <Section id="presale" title="Join the Presale">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <p className="text-zinc-300">Presale will run on Solanium. Allocation: 200,000,000 HPY. Currency: USDC (SPL).</p>
            <ul className="mt-4 space-y-2 text-zinc-300 text-sm">
              <li>• Soft cap: 50,000 USDC • Hard cap: 200,000 USDC</li>
              <li>• Investor vesting: 20% TGE, remaining over 10 months</li>
              <li>• Liquidity: 65% to Raydium, locked 12 months</li>
            </ul>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              {SOLANIUM_URL ? (
                <a href={SOLANIUM_URL} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-yellow-300 px-6 py-3 text-zinc-900 font-semibold text-center hover:opacity-90">
                  Open Solanium
                </a>
              ) : (
                <a href="#" className="rounded-2xl bg-yellow-300/70 px-6 py-3 text-zinc-900 font-semibold text-center opacity-60 cursor-not-allowed" title="Solanium link coming soon">
                  Open Solanium (soon)
                </a>
              )}
              <a href="/Happy_Litepaper_EN_Updated.pdf" target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-zinc-700 px-6 py-3 font-semibold text-center hover:bg-zinc-800">
                Read Litepaper
              </a>
            </div>
          </div>
          {/* (Optional) later: PresaleProgress component driven by real API */}
        </div>
      </Section>

      {/* COMMUNITY – only X and Discord */}
      <Section id="community" title="Join the Community">
        <p className="text-zinc-300">Follow updates, AMAs, airdrops and announcements.</p>
        <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
          <a href="https://x.com/HPYHAPPYHPY" target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5 hover:bg-zinc-800 transition">
            Twitter (X)
          </a>
          <a href="https://discord.gg/7sFPDek7" target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5 hover:bg-zinc-800 transition">
            Discord
          </a>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800/60">
        <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-zinc-400 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} Happy Token. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="/Happy_Litepaper_EN_Updated.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-200">Docs</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Stat({ label, value }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.35 }}
      className="rounded-xl bg-zinc-800/70 p-3"
    >
      <div className="text-xs text-zinc-400">{label}</div>
      <div className="mt-1 font-semibold text-zinc-100">{value}</div>
    </motion.div>
  );
}
