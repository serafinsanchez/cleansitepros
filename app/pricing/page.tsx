import Header from '../components/Header';

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">Simple, Transparent Pricing</h1>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          Choose the perfect plan for your needs. All plans include our core features.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Free</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Perfect for getting started</p>
            <div className="text-4xl font-bold mb-6">$0<span className="text-lg font-normal text-gray-600 dark:text-gray-300">/mo</span></div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Up to 1,000 requests/mo</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Basic support</span>
              </li>
            </ul>

            <button className="w-full py-2 px-4 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 dark:hover:bg-gray-800 transition-colors">
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="border-2 border-purple-600 rounded-2xl p-8 relative">
            <div className="absolute top-0 right-6 transform -translate-y-1/2 bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
              Popular
            </div>
            <h2 className="text-2xl font-semibold mb-4">Pro</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">For growing businesses</p>
            <div className="text-4xl font-bold mb-6">$49<span className="text-lg font-normal text-gray-600 dark:text-gray-300">/mo</span></div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Up to 10,000 requests/mo</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Priority support</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Advanced analytics</span>
              </li>
            </ul>

            <button className="w-full py-2 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              Get Started
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Enterprise</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">For large organizations</p>
            <div className="text-4xl font-bold mb-6">Custom</div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Unlimited requests</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>24/7 dedicated support</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Custom features</span>
              </li>
            </ul>

            <button className="w-full py-2 px-4 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 dark:hover:bg-gray-800 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </main>
    </div>
  );
} 