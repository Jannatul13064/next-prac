import Link from "next/link";

// ExampleHeader.jsx
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/30 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo / Brand */}
          <div className="flex-shrink-0 text-xl font-bold">
            <Link href="/">
                    <span className="hover:text-gray-200 transition cursor-pointer">My Brand</span>
                </Link>
          </div>
          
          {/* Navigation */}
            <nav className="hidden md:flex space-x-6 font-medium">
                <Link href="/">
                    <span className="hover:text-gray-200 transition cursor-pointer">Home</span>
                </Link>
                <Link href="/about">
                    <span className="hover:text-gray-200 transition cursor-pointer">About</span>
                </Link>
                <Link href="/services">
                    <span className="hover:text-gray-200 transition cursor-pointer">Services</span>
                </Link>
                <Link href="/contact">
                    <span className="hover:text-gray-200 transition cursor-pointer">Contact</span>
                </Link>
            </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
        </div>
      </div>
    </header>
  );
}
