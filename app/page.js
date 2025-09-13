import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* NAV */}
      <header className="bg-black/80 fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <Link href="/" className="flex items-center gap-2">
            Happy (HPY)
          </Link>
          <nav className="flex gap-6 text-white">
            <Link href="#about" className="hover:text-white/90">About</Link>
            <Link href="#tokenomics" className="hover:text-white/90">Tokenomics</Link>
            <Link href="#roadmap" className="hover:text-white/90">Roadmap</Link>
            <Link href="#presale" className="hover:text-white/90">Presale</Link>
            <Link href="#community" className="hover:text-white/90">Community</Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-yellow-400 to-orange-500 text-black text-center">
        <h1 className="text-5xl font-bold mb-4">🚀 Welcome to Happy Coin!</h1>
        <p className="text-xl mb-6">The fun and community-driven meme coin with real utility.</p>
        <a
          href="https://solanium.io/"
          target="_blank"
          className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800"
        >
          Join Presale
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 bg-white text-black">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">About Happy Coin</h2>
          <p>
            Happy Coin (HPY) is a meme coin built for fun, community, and growth. With a
            transparent roadmap and fair tokenomics, HPY is here to bring smiles and profits 🚀.
          </p>
        </div>
      </section>

      {/* TOKENOMICS */}
      <section id="tokenomics" className="py-20 px-6 bg-gray-100 text-black">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Tokenomics</h2>
          <ul className="list-disc ml-6">
            <li>Total Supply: 1,000,000,000 HPY</li>
            <li>Presale: 40%</li>
            <li>Liquidity: 30%</li>
            <li>Marketing: 20%</li>
            <li>Team: 10%</li>
          </ul>
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="py-20 px-6 bg-white text-black">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Roadmap</h2>
          <ol className="list-decimal ml-6">
            <li>Q1: Launch Happy Coin 🚀</li>
            <li>Q2: Build strong community 💬</li>
            <li>Q3: Exchange listings 💹</li>
            <li>Q4: Expand ecosystem 🌍</li>
          </ol>
        </div>
      </section>

      {/* PRESALE */}
      <section id="presale" className="py-20 px-6 bg-gray-100 text-black text-center">
        <h2 className="text-3xl font-bold mb-4">Join the Presale</h2>
        <a
          href="https://solanium.io/"
          target="_blank"
          className="bg-yellow-500 px-6 py-3 rounded-full font-bold hover:bg-yellow-600"
        >
          Buy Now
        </a>
      </section>

      {/* COMMUNITY */}
      <section id="community" className="py-20 px-6 bg-white text-black text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
        <div className="flex justify-center gap-6">
          <a href="https://twitter.com" target="_blank" className="hover:underline">
            Twitter
          </a>
          <a href="https://t.me" target="_blank" className="hover:underline">
            Telegram
          </a>
          <a href="/Happy_Litepaper_EN_Updated.pdf" target="_blank" className="hover:underline">
            Whitepaper
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-6">
        <p>© 2025 Happy Coin. All rights reserved.</p>
      </footer>
    </main>
  );
}
