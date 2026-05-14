import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Obscure Data Structure Explorer',
  description: 'Interactive playground for obscure data structures — visual renderers, code editors, and step-by-step algorithm execution.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4e3b100b-8b12-44de-85bd-5be4d7c5fa77"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-mono">
        {children}
      </body>
    </html>
  )
}
