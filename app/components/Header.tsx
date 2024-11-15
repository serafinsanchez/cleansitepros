export default function Header() {
  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-xl font-bold text-purple-600">Logo</a>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden sm:flex sm:space-x-8">
            <a
              href="/about"
              className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 text-sm font-medium transition-colors"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 text-sm font-medium transition-colors"
            >
              Contact
            </a>
            <a
              href="/pricing"
              className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 text-sm font-medium transition-colors"
            >
              Pricing
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              type="button"
              className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 