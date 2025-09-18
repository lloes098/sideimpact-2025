import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MindCare - 1인 가구를 위한 멘탈 케어',
  description: 'AI 챗봇 정신 상담과 정신센터 매칭 서비스를 제공하는 1인 가구 맞춤형 멘탈 케어 플랫폼',
  keywords: '멘탈케어, 정신상담, AI챗봇, 정신센터, 1인가구, 심리상담',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
