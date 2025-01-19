import { FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#1a1a1a] text-gray-300 py-12">
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
                href="https://www.facebook.com/skegnessanddistrictrunningclub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sadrc-orange transition-colors"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/sadrc_uk?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sadrc-orange transition-colors"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright and Affiliation */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <div className="flex flex-col items-center justify-center space-y-4">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Skegness and District Running Club. All rights reserved.</p>
            <div className="flex flex-col items-center">
              <p className="text-sm text-gray-400 mb-2">Affiliated with</p>
              <a 
                href="https://www.englandathletics.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Image
                  src="/images/england-athletics-logo.png"
                  alt="England Athletics Logo"
                  width={200}
                  height={100}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                  priority
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
