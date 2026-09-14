export default function Navbar() {
  return (
    <nav className="bg-white px-6 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-accent rounded-md"></div>
          <span className="text-xl font-bold text-dark-btn">Dev Stack</span>
        </div>

        {/* Center: Navigation */}
        <div className="hidden md:flex gap-8">
          <a href="#" className="text-gray-600 hover:text-gray-900 transition font-medium">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition font-medium">Technologies</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition font-medium">Projects</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition font-medium">About</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition font-medium">Contact</a>
        </div>

        {/* Right: Auth Buttons */}
        <div className="flex gap-3 items-center">
          <button className="text-gray-600 hover:text-gray-900 font-medium transition">
            Sign In
          </button>
          <button className="bg-accent text-white px-6 py-2 rounded-full hover:bg-accent-light transition font-semibold">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}