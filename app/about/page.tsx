import Header from '../components/Header';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We're on a mission to empower developers and businesses to build 
              exceptional web applications with cutting-edge technology.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Founded in 2024, we started with a simple idea: make web development 
              more accessible and efficient for everyone.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Today, we serve thousands of developers worldwide, helping them create
              amazing applications that make a difference.
            </p>
          </section>

          <section className="grid md:grid-cols-3 gap-8 pt-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">1M+</div>
              <div className="text-gray-600 dark:text-gray-300">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-300">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-300">Support</div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
} 