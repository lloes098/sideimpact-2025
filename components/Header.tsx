'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-neutral-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-xl font-bold text-neutral-800">MindCare</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/chatbot" 
              className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 font-medium"
            >
              AI 상담
            </Link>
            <Link 
              href="/matching" 
              className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 font-medium"
            >
              센터 매칭
            </Link>
            <Link 
              href="/about" 
              className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 font-medium"
            >
              소개
            </Link>
            <button className="btn-primary">
              시작하기
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-100">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/chatbot" 
                className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                AI 상담
              </Link>
              <Link 
                href="/matching" 
                className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                센터 매칭
              </Link>
              <Link 
                href="/about" 
                className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                소개
              </Link>
              <button className="btn-primary w-full mt-4">
                시작하기
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

