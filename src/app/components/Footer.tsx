import { FaFacebook, FaEnvelope, FaFileDownload } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-sadrc-black py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">About SADRC</h3>
            <p className="text-gray-400 text-sm">
              Skegness and District Running Club is a friendly community of runners across Lincolnshire.
              We welcome runners of all abilities and offer structured training sessions throughout the week.
            </p>
          </div>

          {/* Contact */}
          <div id="contact-section">
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="mailto:skegadrc.membership@gmail.com"
                className="flex items-center text-gray-400 hover:text-sadrc-orange transition-colors"
              >
                <FaEnvelope className="mr-2" />
                skegadrc.membership@gmail.com
              </a>
              <a
                href="https://www.facebook.com/SkegnessAndDistrictRunningClub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-sadrc-orange transition-colors"
              >
                <FaFacebook className="mr-2" />
                Follow us on Facebook
              </a>
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

          {/* Training Locations */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Training Locations</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Skegness - Thursday 6:30 PM</li>
              <li>Spilsby - Tuesday 6:30 PM</li>
              <li>Horncastle - Monday 6:30 PM</li>
              <li>Boston - Thursday 6:30 PM</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          {new Date().getFullYear()} Skegness and District Running Club. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
