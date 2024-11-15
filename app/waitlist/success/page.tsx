'use client'

import Link from 'next/link'
import { loadStripe } from '@stripe/stripe-js'
import { useState } from 'react'

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function SuccessPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handlePriorityAccess = async () => {
    setIsLoading(true)
    try {
      // Create checkout session
      const response = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Failed to create checkout session')
      }

      const { sessionId } = await response.json()

      // Redirect to Stripe Checkout
      const stripe = await stripePromise
      const { error } = await stripe!.redirectToCheckout({ sessionId })

      if (error) {
        throw error
      }
    } catch (error) {
      console.error('Payment error:', error)
      alert('Payment failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-cyan-500">
      <main className="max-w-lg mx-auto px-4 py-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl text-center">
          {/* Success Icon */}
          <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Improved Success Message */}
          <h1 className="text-2xl font-bold mb-3">
            You're In! 🎉
          </h1>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Your spot is reserved, but there's an opportunity to get ahead...
          </p>

          {/* Enhanced Skip the Line Option */}
          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-6 mb-8">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
              <span className="animate-pulse">⚡</span> Priority Access
            </div>
            <h2 className="font-semibold text-lg mb-2">Want to Be Among the First?</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Secure your spot at the front of the line and be one of the first to launch when we're ready
            </p>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4">
              <div className="flex justify-between items-center mb-3">
                <span className="font-medium text-lg">Priority Access</span>
                <div className="text-right">
                  <span className="text-green-600 font-bold text-2xl">$99</span>
                  <span className="text-sm text-gray-500 block">One-time fee</span>
                </div>
              </div>
              
              <ul className="text-sm text-left space-y-3 mb-4">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><span className="font-semibold">Priority Access:</span> Be among the first to launch</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><span className="font-semibold">Early Input:</span> Help shape the product features</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><span className="font-semibold">Founder's Pricing:</span> Lock in special early-access rates</span>
                </li>
              </ul>
              
              <button
                onClick={handlePriorityAccess}
                disabled={isLoading}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium transition-colors hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Get Priority Access'
                )}
              </button>
            </div>
            
            <div className="text-sm text-gray-500">
              100% Money-back guarantee if you're not among the first to launch
            </div>
          </div>

          {/* Simplified Next Steps for Waitlist */}
          <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 mb-6">
            <h2 className="font-semibold mb-4">Staying on the Waitlist?</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Start preparing while you wait:
            </p>
            <ul className="text-left space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 text-xs">1</span>
                <span>Gather your services & pricing information</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 text-xs">2</span>
                <span>Collect your best before/after cleaning photos</span>
              </li>
            </ul>
          </div>

          <Link
            href="/"
            className="inline-block text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            ← Return to Homepage
          </Link>
        </div>
      </main>
    </div>
  )
} 