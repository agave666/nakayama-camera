import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Photo Unlock Puzzle',
  description: '撮影テクニックを学びながら写真を解放するパズルゲーム',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
