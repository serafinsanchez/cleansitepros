import Image from "next/image"
import Link from "next/link"
import PlaceholderImage from './components/PlaceholderImage';
import CountdownTimer from './components/CountdownTimer'
import StickyButton from './components/StickyButton'

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 py-4 px-4 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            CleanSitePros
          </Link>
        </div>
      </header>

      {/* Hero Section - Split Design with Animation */}
      <section className="min-h-[90vh] relative overflow-hidden">
        {/* Background Split Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 clip-diagonal"></div>
        <div className="absolute inset-0 bg-white dark:bg-gray-900 clip-diagonal-complement"></div>
        
        <div className="max-w-7xl mx-auto px-4 py-12 sm:py-20 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6 max-w-xl">
              {/* Early Access Banner - Improved contrast */}
              <div className="inline-block animate-fade-in-up">
                <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold inline-flex items-center gap-2">
                  <span className="animate-pulse w-2 h-2 bg-emerald-400 rounded-full" aria-hidden="true"></span>
                  <span className="text-white">Early Access: </span>
                  <span className="text-emerald-300">Only 17 Spots Left</span>
                </div>
              </div>
              
              {/* Improved heading hierarchy and contrast */}
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] mb-6 animate-fade-in-up animation-delay-150 text-heading" id="main-heading">
                Get Premium Cleaning Clients
                <span className="block text-cyan-200 my-2">Without the Cost</span>
              </h1>
              
              {/* Better text contrast */}
              <p className="text-xl sm:text-2xl text-gray-100 leading-relaxed animate-fade-in-up animation-delay-300 max-w-3xl">
                Stop losing luxury homes and commercial contracts to competitors. 
                Get a professional website that attracts high-paying clients - 
                <span className="text-emerald-200 font-medium">100% free</span>
              </p>
              
              {/* Social Proof Section */}
              <div className="flex items-center gap-2 animate-fade-in-up animation-delay-450">
                <div className="flex -space-x-3">
                  {/* Recent Signup Avatars */}
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center text-xs font-medium text-white">JC</div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-cyan-400 to-cyan-500 flex items-center justify-center text-xs font-medium text-white">MR</div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-xs font-medium text-white">+15</div>
                </div>
                <span className="text-sm text-blue-100">
                  5 cleaning businesses joined today in Denver
                </span>
              </div>
              
              {/* CTA Button with Urgency */}
              <div className="flex flex-col gap-4 animate-fade-in-up animation-delay-600">
                <Link
                  href="/waitlist"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-4 bg-white text-blue-700 rounded-full font-semibold text-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
                  aria-label="Join the waitlist for your free website"
                >
                  <span>Claim Your Free Website Now</span>
                </Link>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-sm text-blue-100 text-center">
                    <span className="font-semibold">⚡️ Limited Time Offer:</span> Only 17 Free Websites Left
                  </p>
                  <p className="text-xs text-blue-100/80">
                    Join now and get premium features free forever • No credit card required
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content - Website Preview Showcase */}
            <div className="relative order-first md:order-last animate-fade-in-up animation-delay-600">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800">
                {/* Browser-like header */}
                <div className="bg-gray-100 dark:bg-gray-900 p-2 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <div className="bg-white dark:bg-gray-800 rounded-full px-3 py-1 text-sm text-gray-600 dark:text-gray-300 max-w-[200px] mx-auto truncate">
                      yourcompany.cleansitepros.com
                    </div>
                  </div>
                </div>

                {/* Website Preview Content */}
                <div className="relative h-[400px] w-full bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
                  {/* Hero Section Preview */}
                  <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center">
                    <div className="w-48 h-6 bg-white/20 rounded-lg animate-pulse"></div>
                  </div>

                  {/* Navigation Preview */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                    <div className="w-24 h-8 bg-white/10 rounded-lg"></div>
                    <div className="flex gap-4">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="w-16 h-4 bg-white/10 rounded-lg"></div>
                      ))}
                    </div>
                  </div>

                  {/* Content Preview */}
                  <div className="absolute top-32 left-4 right-4 grid grid-cols-3 gap-4">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg">
                        <div className="w-full h-24 bg-gray-100 dark:bg-gray-700 rounded-lg mb-3 animate-pulse"></div>
                        <div className="w-2/3 h-4 bg-gray-100 dark:bg-gray-700 rounded mb-2"></div>
                        <div className="w-1/2 h-4 bg-gray-100 dark:bg-gray-700 rounded"></div>
                      </div>
                    ))}
                  </div>

                  {/* Booking Widget */}
                  <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg transform rotate-3 animate-float">
                    <div className="text-sm font-medium text-gray-900 dark:text-white mb-3">Book Now</div>
                    <div className="space-y-2">
                      <div className="h-8 bg-gray-100 dark:bg-gray-700 rounded-md animate-pulse"></div>
                      <div className="h-8 bg-gray-100 dark:bg-gray-700 rounded-md animate-pulse"></div>
                      <div className="h-8 bg-blue-500 rounded-md"></div>
                    </div>
                  </div>

                  {/* Reviews Widget */}
                  <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg transform -rotate-2 animate-float animation-delay-150">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm font-medium">4.9 (128)</span>
                    </div>
                    <div className="space-y-1">
                      <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded w-32"></div>
                      <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded w-24"></div>
                    </div>
                  </div>

                  {/* Quote Calculator */}
                  <div className="absolute bottom-4 right-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg transform rotate-2 animate-float animation-delay-300">
                    <div className="text-sm font-medium text-gray-900 dark:text-white mb-2">Instant Quote</div>
                    <div className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">Deep Clean</span>
                        <span className="text-xs font-medium">$</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">Monthly</span>
                        <span className="text-xs font-medium">$</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="absolute -right-8 top-8 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg transform rotate-3 animate-float">
                <div className="text-2xl font-bold text-blue-600">+127%</div>
                <div className="text-sm text-gray-600">More Bookings</div>
              </div>
              
              <div className="absolute -left-8 bottom-8 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg transform -rotate-3 animate-float animation-delay-150">
                <div className="text-2xl font-bold text-green-600">4.9★</div>
                <div className="text-sm text-gray-600">Client Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="bg-white dark:bg-gray-900 py-12 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
            <div className="flex items-center gap-2 py-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm font-medium">SSL Secured</span>
            </div>
            <div className="h-8 w-px bg-gray-200 dark:bg-gray-700"></div>
            <div className="flex items-center gap-2 py-2">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <span className="text-sm font-medium">100% Free Platform</span>
            </div>
            <div className="h-8 w-px bg-gray-200 dark:bg-gray-700"></div>
            <div className="flex items-center gap-2 py-2">
              <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium">Launch in Minutes</span>
            </div>
          </div>

          {/* Featured In */}
          <div className="text-center mb-8">
            <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
              Trusted by members of
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
              {/* Replace these with actual cleaning industry association logos */}
              <div className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                <span className="text-lg font-semibold">ISSA®</span>
              </div>
              <div className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                <span className="text-lg font-semibold">ARCSI™</span>
              </div>
              <div className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                <span className="text-lg font-semibold">BSCAI</span>
              </div>
              <div className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                <span className="text-lg font-semibold">IEHA</span>
              </div>
            </div>
          </div>

          {/* Quick Testimonial */}
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative">
              <svg className="absolute -top-4 -left-4 w-8 h-8 text-blue-100 dark:text-blue-900" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 italic mb-4 text-body leading-relaxed">
                "Within a week of launching my new website, I booked 3 high-end residential clients. 
                The online booking feature alone saved me hours of phone calls."
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">MC</span>
                </div>
                <div className="text-left">
                  <p className="font-semibold">Maria Contreras</p>
                  <p className="text-sm text-gray-500">Pristine Home Cleaning, Denver</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        aria-labelledby="features-heading"
        className="py-20 px-4"
      >
        <h2 
          id="features-heading" 
          className="sr-only"
        >
          Key Features
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-500"
                tabIndex={0}
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-200">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blue-500/[0.05] bg-[size:20px_20px]"></div>
        <div className="max-w-6xl mx-auto relative">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-20 text-heading">
            Launch Your Website in 3 Simple Steps
          </h2>
          
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 dark:bg-blue-900 -translate-y-1/2 hidden md:block"></div>
            
            <div className="grid md:grid-cols-3 gap-12">
              {/* Step 1 */}
              <div className="relative group">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 transition-transform duration-300">
                    1
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Choose Your Template</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Select from our professionally designed templates made specifically for cleaning businesses.
                  </p>
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 rotate-45 bg-white dark:bg-gray-800 hidden md:block"></div>
              </div>

              {/* Step 2 */}
              <div className="relative group">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 transition-transform duration-300">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Customize Your Site</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Add your services, prices, and photos with our easy-to-use editor. No coding needed.
                  </p>
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 rotate-45 bg-white dark:bg-gray-800 hidden md:block"></div>
              </div>

              {/* Step 3 */}
              <div className="relative group">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 transition-transform duration-300">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Go Live & Grow</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Launch your site and start accepting online bookings immediately.
                  </p>
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 rotate-45 bg-white dark:bg-gray-800 hidden md:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">
            Why Cleaning Businesses Choose Us
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="relative group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6">
                  <div className="flex items-center gap-6 mb-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Template Showcase Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900" aria-labelledby="templates-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="templates-heading" className="text-3xl md:text-4xl font-bold text-center mb-16">
            Choose Your Perfect Cleaning Business Template
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-12">
            {templates.map((template, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-[200px] sm:h-[300px] w-full">
                  <Image
                    src={template.image}
                    alt={template.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    loading={index === 0 ? "eager" : "lazy"}
                    priority={index === 0}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{template.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{template.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4" aria-labelledby="testimonials-heading">
        <div className="max-w-6xl mx-auto text-center">
          <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold mb-12">
            Trusted by Local Cleaning Businesses
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover-lift animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="mb-4 text-blue-600">
                  <svg className="w-8 h-8 animate-pulse-glow" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 italic mb-4 text-body leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <p className="font-semibold text-heading">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.business}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-blue-600 text-white py-20 px-4 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.1)_75%)] bg-[length:64px_64px] animate-pattern"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-600/95 to-cyan-600/90"></div>
        </div>

        {/* Animated Shapes */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl animate-float opacity-70 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/30 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-500 opacity-70 translate-x-1/2 translate-y-1/2"></div>

        {/* Content */}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block animate-fade-in-up">
            <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium inline-flex items-center gap-2 mb-8">
              <span className="animate-pulse w-2 h-2 bg-green-400 rounded-full"></span>
              Limited Time: Only 17 Free Websites Left
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up text-heading leading-tight">
            Ready to Book More
            <span className="block text-cyan-300 mt-2">Premium Cleaning Clients?</span>
          </h2>

          <p className="text-xl mb-8 animate-fade-in-up animation-delay-150 text-blue-100 text-body leading-relaxed">
            Join local cleaning businesses already booking
            <span className="font-bold text-white"> $3,000+ </span>
            in new monthly revenue
          </p>

          <div className="space-y-6 animate-fade-in-up animation-delay-300">
            <Link
              href="/waitlist"
              className="group relative inline-flex items-center px-8 py-4 rounded-full bg-white text-blue-600 hover:bg-blue-50 font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] text-lg"
            >
              <span className="relative z-10">Get Your Free Website Before Spots Fill Up</span>
              <svg 
                className="w-5 h-5 ml-2 -mr-1 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-100">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Residential Cleaning
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Deep Cleaning
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Commercial Cleaning
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <StickyButton />

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 py-8 px-4 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto flex justify-center items-center">
          <div className="flex items-center">
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              CleanSitePros
            </span>
          </div>
        </div>
      </footer>

      {/* Add skip link for keyboard navigation */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-blue-600 px-4 py-2 rounded-md"
      >
        Skip to main content
      </a>
    </div>
  )
}

// Features data
const features = [
  {
    title: "Convert More $300+ Cleaning Jobs",
    description: "Let clients instantly book deep cleans, move-out cleans, and recurring services. Your website works 24/7 so you never miss premium bookings.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Win More Commercial Contracts",
    description: "Look professional with dedicated pages for office cleaning, medical facility sanitization, and commercial janitorial services. Perfect for landing $2000+ monthly contracts.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Dominate Your Local Market",
    description: "Show up first when clients search for 'house cleaning near me'. Our SEO-optimized websites help you appear above other cleaning services in your area.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

// Template data
const templates = [
  {
    id: "residential-clean",
    name: "Residential Cleaning",
    description: "Perfect for house cleaning and maid services.",
    image: "/images/residential-cleaning.jpg"
  },
  {
    id: "commercial-clean",
    name: "Commercial Cleaning",
    description: "Ideal for office and business cleaning services.",
    image: "/images/commercial-cleaning.jpg"
  }
]

// Testimonial data
const testimonials = [
  {
    quote: "I launched my website in 15 minutes. Now I get new clients every week!",
    name: "Sarah Johnson",
    business: "Sparkle Home Cleaning",
  },
  {
    quote: "The online booking system has saved me hours of phone calls.",
    name: "Mike Rodriguez",
    business: "Fresh & Clean Services",
  },
  {
    quote: "Professional website without the professional price tag. It's perfect.",
    name: "Lisa Chen",
    business: "Elite Clean Co.",
  },
]

// Benefits data
const benefits = [
  {
    title: "Look Like a Premium Cleaning Service",
    description: "Stand out from basic cleaning services. Our professional templates help you appeal to luxury homes, high-end rentals, and commercial properties willing to pay premium rates.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  },
  {
    title: "Save Hours on Phone Quotes",
    description: "No more driving across town for quotes. Let clients specify square footage, number of bathrooms, add-on services, and get instant pricing - perfect for busy cleaning business owners.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: "Turn One-Time Cleans into Recurring Revenue",
    description: "Automatically follow up with one-time clients to convert them into weekly or monthly recurring services. Build predictable monthly income.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Focus on Cleaning, Not Tech",
    description: "Keep doing what you do best - providing exceptional cleaning services. We handle all the website updates, maintenance, and technical details.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  }
]