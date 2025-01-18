import { FaFacebook, FaEnvelope, FaFileDownload, FaYoutube, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <a
                href="mailto:skegadrc.membership@gmail.com"
                className="flex items-center text-gray-400 hover:text-sadrc-orange transition-colors"
              >
                <FaEnvelope className="mr-2" />
                skegadrc.membership@gmail.com
              </a>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/groups/skegnessanddistrictrunningclub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-sadrc-orange"
                  aria-label="Facebook"
                >
                  <FaFacebook className="h-6 w-6" />
                </a>
                <a
                  href="https://www.instagram.com/skegnessanddistrictrunningclub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-sadrc-orange"
                  aria-label="Instagram"
                >
                  <FaInstagram className="h-6 w-6" />
                </a>
                <a
                  href="https://www.youtube.com/@skegnessanddistrictrunning3040"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-sadrc-orange"
                  aria-label="YouTube"
                >
                  <FaYoutube className="h-6 w-6" />
                </a>
              </div>
              <a
                href="/images/locations/SADRC application 2024-25.docx"
                download
                className="flex items-center text-gray-400 hover:text-sadrc-orange transition-colors"
              >
                <FaFileDownload className="mr-2" />
                Download Membership Form
              </a>
            </div>
          </div>

          {/* Training Times */}
          <div>
            <h3 className="text-xl font-bold mb-4">Training Times</h3>
            <div className="space-y-2 text-gray-400">
              <p>Tuesday: 6:30 PM - Skegness</p>
              <p>Wednesday: 6:30 PM - Spilsby</p>
              <p>Thursday: 6:30 PM - Horncastle</p>
              <p>Thursday: 6:30 PM - Boston</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/about" className="block text-gray-400 hover:text-sadrc-orange transition-colors">
                About Us
              </a>
              <a href="/join" className="block text-gray-400 hover:text-sadrc-orange transition-colors">
                Join the Club
              </a>
              <a href="/#events" className="block text-gray-400 hover:text-sadrc-orange transition-colors">
                Events
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Skegness and District Running Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
