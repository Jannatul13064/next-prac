// Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">MyCompany</h3>
            <p className="text-gray-400">
              We deliver high-quality solutions that help your business grow.
              Providing professional services since 2025.
            </p>
          </div>
          
          {/* Links Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-white transition">Home</a></li>
              <li><a href="#about" className="hover:text-white transition">About</a></li>
              <li><a href="#services" className="hover:text-white transition">Services</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <p>Email: info@mycompany.com</p>
            <p>Phone: +880 1234 5678</p>
            <p>Address: Dhaka, Bangladesh</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.865 9.865 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.384 4.482A13.944 13.944 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.573A4.902 4.902 0 0 1 .964 9.1v.062a4.916 4.916 0 0 0 3.946 4.814 4.904 4.904 0 0 1-2.212.084 4.918 4.918 0 0 0 4.59 3.417A9.867 9.867 0 0 1 0 19.54a13.924 13.924 0 0 0 7.548 2.212c9.058 0 14.01-7.514 14.01-14.01 0-.213-.004-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.225 0H1.771C.792 0 0 .774 0 1.728v20.543C0 23.226.792 24 1.771 24H22.22c.979 0 1.78-.774 1.78-1.729V1.728C24 .774 23.204 0 22.225 0zM7.119 20.452H3.563V9h3.556v11.452zM5.34 7.53a2.061 2.061 0 1 1 0-4.123 2.061 2.061 0 0 1 0 4.123zM20.452 20.452h-3.555v-5.605c0-1.336-.026-3.057-1.864-3.057-1.868 0-2.154 1.462-2.154 2.973v5.689h-3.556V9h3.414v1.561h.049c.476-.899 1.637-1.846 3.369-1.846 3.6 0 4.268 2.369 4.268 5.456v6.281z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          &copy; 2025 MyCompany. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
 