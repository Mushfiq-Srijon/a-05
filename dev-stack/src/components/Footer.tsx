import { BriefcaseBusiness, Code, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section: 4 Columns */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-accent rounded-md"></div>
              <span className="text-lg font-bold text-dark-btn">Dev Stack</span>
            </div>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-accent transition">
                <Code size={20} aria-label="GitHub" />
              </a>
              <a href="#" className="text-gray-600 hover:text-accent transition">
                <MessageCircle size={20} aria-label="Twitter" />
              </a>
              <a href="#" className="text-gray-600 hover:text-accent transition">
                <BriefcaseBusiness size={20} aria-label="LinkedIn" />
              </a>
            </div>
          </div>

          {/* PRODUCT Column */}
          <div>
            <h4 className="font-bold text-dark-btn mb-6 uppercase text-sm tracking-wide">
              Product
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-accent transition text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-accent transition text-sm">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-accent transition text-sm">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* COMPANY Column */}
          <div>
            <h4 className="font-bold text-dark-btn mb-6 uppercase text-sm tracking-wide">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-accent transition text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-accent transition text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-accent transition text-sm">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* LEGAL Column */}
          <div>
            <h4 className="font-bold text-dark-btn mb-6 uppercase text-sm tracking-wide">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-accent transition text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-accent transition text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            &copy; 2024 Dev Stack. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-accent transition text-sm">
              Privacy
            </a>
            <a href="#" className="text-gray-600 hover:text-accent transition text-sm">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}