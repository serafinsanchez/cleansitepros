'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function StickyButton() {
  const [showStickyButton, setShowStickyButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setShowStickyButton(scrollPosition > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!showStickyButton) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 sm:hidden z-50">
      <Link
        href="/waitlist"
        className="block w-full py-4 px-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors text-center text-lg"
      >
        Join Waitlist
      </Link>
    </div>
  )
} 