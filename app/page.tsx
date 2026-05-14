export default function Home() {
  const faqs = [
    {
      q: 'What data structures are covered?',
      a: 'Skip lists, van Emde Boas trees, finger trees, treaps, bloom filters, and many more obscure but powerful structures.'
    },
    {
      q: 'Can I run code in the browser?',
      a: 'Yes — the Monaco-powered editor lets you write and execute JavaScript/TypeScript against live data structure implementations with step-by-step visualization.'
    },
    {
      q: 'Is there a free trial?',
      a: 'You get full access to 3 data structures for free. Subscribe at $12/mo to unlock all structures, visualizations, and algorithm walkthroughs.'
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-xs text-[#58a6ff] mb-6 uppercase tracking-widest">
          Education Tool
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Explore Obscure<br />
          <span className="text-[#58a6ff]">Data Structures</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Visual playground to learn and experiment with uncommon data structures. Step-by-step execution, live code editing, and beautiful visualizations.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-sm"
        >
          Start Exploring — $12/mo
        </a>
        <div className="mt-10 grid grid-cols-3 gap-4 text-center">
          {[['20+', 'Data Structures'], ['Visual', 'Step Debugger'], ['Monaco', 'Code Editor']].map(([val, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-[#58a6ff] font-bold text-xl">{val}</div>
              <div className="text-[#8b949e] text-xs mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'All 20+ data structures',
              'Visual step-by-step debugger',
              'Monaco code editor with autocomplete',
              'D3.js / Canvas visualizations',
              'Algorithm complexity analysis',
              'New structures added monthly'
            ].map(f => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <div className="text-white font-semibold mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-20 text-center text-[#8b949e] text-xs">
        © {new Date().getFullYear()} Obscure Data Structure Explorer. All rights reserved.
      </footer>
    </main>
  )
}
