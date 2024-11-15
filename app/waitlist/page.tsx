import Link from 'next/link'
import WaitlistForm from '../components/WaitlistForm'
import TestConnection from '../components/TestConnection'

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-cyan-500">
      {/* Simple Header */}
      <header className="py-4 px-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="text-white text-xl font-bold">
            CleanSitePros
          </Link>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl">
          {/* Improved Header with Stronger Value Prop */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span className="animate-pulse w-2 h-2 bg-green-400 rounded-full"></span>
              Early Access Now Available
            </div>
            <h1 className="text-2xl font-bold mb-3">
              Get Your Professional Cleaning Business Website
              <span className="block text-blue-600 mt-2">100% Free</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Join cleaning business owners who are:
            </p>
            <ul className="text-left max-w-sm mx-auto space-y-4 mb-6">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Booking high-value clients while they sleep</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Standing out from local competition</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Growing their business with less effort</span>
              </li>
            </ul>
            <div className="text-sm text-blue-600 font-medium bg-blue-50 dark:bg-blue-900/20 rounded-lg py-2 px-4 inline-block">
              🚀 Limited Time: Join the waitlist for free early access
            </div>
          </div>

          {/* Form Component */}
          <WaitlistForm />

          {/* Enhanced Social Proof */}
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex -space-x-2 mb-2">
                {/* Avatar Circles with Initials and Gradients */}
                <div className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-xs font-medium text-white">
                  MC
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xs font-medium text-white">
                  JR
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-xs font-medium text-white">
                  AK
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-xs font-medium text-white">
                  +14
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                <span className="font-semibold">5 cleaning businesses</span> joined from Denver this week
              </p>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Secure & Confidential</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scarcity Reminder */}
        <div className="mt-6 text-center text-white text-sm">
          <p className="font-medium">⚡️ Limited Time Launch Offer</p>
          <p className="text-blue-100">
            Only giving away 50 free websites • 33 already claimed
          </p>
        </div>
      </main>
    </div>
  );
} 