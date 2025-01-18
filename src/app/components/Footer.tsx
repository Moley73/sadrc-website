import { FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-sadrc-orange mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a href="mailto:infosadrc@mail.com" className="flex items-center text-gray-400 hover:text-sadrc-orange transition-colors">
                <FaEnvelope className="mr-2" />
                infosadrc@mail.com
              </a>
              <a href="mailto:membership.sadrc@gmail.com" className="flex items-center text-gray-400 hover:text-sadrc-orange transition-colors">
                <FaEnvelope className="mr-2" />
                membership.sadrc@gmail.com
              </a>
            </div>
          </div>

          {/* Training Times */}
          <div>
            <h3 className="text-xl font-bold text-sadrc-orange mb-4">Training Times</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Monday: 6:30 PM - Horncastle</li>
              <li>Tuesday: 6:30 PM - Spilsby</li>
              <li>Thursday: 6:30 PM - Skegness</li>
              <li>Thursday: 6:30 PM - Boston</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold text-sadrc-orange mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/skegnessrunningclub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sadrc-orange transition-colors"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/skegnessrunningclub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sadrc-orange transition-colors"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Skegness and District Running Club. All rights reserved.</p>
          <p className="mt-2 text-sm">Affiliated with England Athletics</p>
        </div>
      </div>
    </footer>
  );
}
