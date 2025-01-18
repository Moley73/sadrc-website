'use client';

import { FaRunning, FaTrophy, FaUsers, FaPoundSign, FaDownload, FaEnvelope } from 'react-icons/fa';
import FacebookFeed from '../components/FacebookFeed';

export default function Join() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-sadrc-orange mb-3 sm:mb-4">SADRC</h1>
          <p className="text-lg sm:text-xl text-gray-400">Join our running community</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Club Membership */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-sadrc-orange">Club Membership</h2>
              <ul className="space-y-4 sm:space-y-6">
                <li className="flex items-center text-gray-300 text-base sm:text-lg">
                  <FaPoundSign className="text-sadrc-orange mr-3 sm:mr-4 text-lg sm:text-xl flex-shrink-0" />
                  Club membership is FREE
                </li>
                <li className="flex items-center text-gray-300 text-base sm:text-lg">
                  <FaUsers className="text-sadrc-orange mr-3 sm:mr-4 text-lg sm:text-xl flex-shrink-0" />
                  Open to anyone aged 15 or over
                </li>
                <li className="flex items-center text-gray-300 text-base sm:text-lg">
                  <FaRunning className="text-sadrc-orange mr-3 sm:mr-4 text-lg sm:text-xl flex-shrink-0" />
                  Membership year: April to March
                </li>
                <li className="flex items-center text-gray-300 text-base sm:text-lg">
                  <FaPoundSign className="text-sadrc-orange mr-3 sm:mr-4 text-lg sm:text-xl flex-shrink-0" />
                  Optional England Athletics affiliation: £19
                </li>
              </ul>
            </section>

            {/* How to Join */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-sadrc-orange">How to Join</h2>
              <div className="space-y-6">
                <p className="text-gray-300 text-base sm:text-lg">
                  To join Skegness and District Running Club, please download and complete our membership form:
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a 
                    href="/membership-form.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-sadrc-orange text-white text-base sm:text-lg font-medium overflow-hidden transition-all duration-300 ease-out hover:bg-sadrc-orange/90 focus:outline-none focus:ring-2 focus:ring-sadrc-orange focus:ring-offset-2 focus:ring-offset-[#1a1a1a] rounded-md w-full sm:w-auto"
                  >
                    <span className="absolute right-full w-12 h-full bg-white/10 transform translate-x-0 group-hover:translate-x-[500%] transition-transform duration-700 ease-in-out block"></span>
                    <FaDownload className="mr-2 sm:mr-3 text-lg sm:text-xl" aria-hidden="true" />
                    <span>Download Form</span>
                  </a>
                  <a 
                    href="mailto:infosadrc@mail.com"
                    className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-transparent text-sadrc-orange text-base sm:text-lg font-medium border-2 border-sadrc-orange overflow-hidden transition-all duration-300 ease-out hover:text-white focus:outline-none focus:ring-2 focus:ring-sadrc-orange focus:ring-offset-2 focus:ring-offset-[#1a1a1a] rounded-md w-full sm:w-auto"
                  >
                    <span className="absolute inset-0 w-full h-full bg-sadrc-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                    <FaEnvelope className="mr-2 sm:mr-3 text-lg sm:text-xl relative z-10" aria-hidden="true" />
                    <span className="relative z-10">Email Us</span>
                  </a>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-sadrc-orange">Member Benefits</h2>
              <ul className="space-y-4 sm:space-y-6">
                <li className="flex items-center text-gray-300 text-base sm:text-lg">
                  <FaRunning className="text-sadrc-orange mr-3 sm:mr-4 text-lg sm:text-xl flex-shrink-0" />
                  Enter races under Skegness and District RC name
                </li>
                <li className="flex items-center text-gray-300 text-base sm:text-lg">
                  <FaTrophy className="text-sadrc-orange mr-3 sm:mr-4 text-lg sm:text-xl flex-shrink-0" />
                  Participate in Lincs League Cross Country
                </li>
                <li className="flex items-center text-gray-300 text-base sm:text-lg">
                  <FaTrophy className="text-sadrc-orange mr-3 sm:mr-4 text-lg sm:text-xl flex-shrink-0" />
                  Eligible for London Marathon club places draw*
                </li>
                <li className="flex items-center text-gray-300 text-base sm:text-lg">
                  <FaPoundSign className="text-sadrc-orange mr-3 sm:mr-4 text-lg sm:text-xl flex-shrink-0" />
                  Race entry discounts (if EA affiliated)
                </li>
              </ul>
              <p className="text-xs sm:text-sm text-gray-500 mt-4 sm:mt-6">* Subject to club and England Athletics membership criteria</p>
            </section>

            {/* Facebook Feed */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-sadrc-orange">Latest Updates</h2>
              <div className="bg-black/20 rounded-lg overflow-hidden">
                <FacebookFeed />
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
