import Header from '../components/Header';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="p-8">
        <header className="max-w-6xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4">Welcome to Your Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Get started with your journey
          </p>
        </header>

        <main className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Quick Start Card */}
            <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800">
              <h2 className="text-xl font-semibold mb-4">Quick Start Guide</h2>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600">1</span>
                  <span>Set up your profile</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600">2</span>
                  <span>Create your first project</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600">3</span>
                  <span>Explore the documentation</span>
                </li>
              </ul>
            </div>

            {/* Recent Activity Card */}
            <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800">
              <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Your activity will appear here once you start using the platform.
              </p>
            </div>

            {/* Resources Card */}
            <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800">
              <h2 className="text-xl font-semibold mb-4">Resources</h2>
              <div className="space-y-3">
                <a href="#" className="block text-purple-600 hover:underline">Documentation</a>
                <a href="#" className="block text-purple-600 hover:underline">API Reference</a>
                <a href="#" className="block text-purple-600 hover:underline">Community Forums</a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
} 