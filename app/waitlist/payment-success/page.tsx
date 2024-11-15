import Link from 'next/link'

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-cyan-500">
      <main className="max-w-lg mx-auto px-4 py-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl text-center">
          <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-2xl font-bold mb-4">You're In! 🎉</h1>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-lg mb-4">What Happens Next?</h2>
            <ul className="text-left space-y-4 mb-4">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 text-xs">1</span>
                <span>You'll receive a confirmation email within 24 hours</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 text-xs">2</span>
                <span>We'll reach out to understand your specific needs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 text-xs">3</span>
                <span>You'll be among the first to get access when we launch</span>
              </li>
            </ul>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Thank you for being one of our founding members. We're excited to help grow your cleaning business!
          </p>
          
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Return to Homepage
          </Link>
        </div>
      </main>
    </div>
  )
} 