'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaRunning, FaClock, FaEnvelope, FaFacebook } from 'react-icons/fa';
import Navbar from '../components/Navbar';

export default function JoinUs() {
  return (
    <main className="min-h-screen bg-[#121212]">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px]">
        <Image
          src="/images/hero/running-hero.jpg"
          alt="Runners at sunset"
          width={1920}
          height={1080}
          className="absolute inset-0 object-cover w-full h-full"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-sadrc-orange">Join Our Running Community</h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl">
            Become part of a supportive and friendly running club that welcomes runners of all abilities
          </p>
        </div>
      </div>

      {/* Membership Benefits */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-sadrc-orange">Why Join SADRC?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <FaRunning className="text-sadrc-orange text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Group Runs</h3>
              <p className="text-gray-300">Join our regular group runs across multiple locations. We cater to all abilities with different pace groups.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <FaClock className="text-sadrc-orange text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Structured Training</h3>
              <p className="text-gray-300">Access structured training sessions and expert advice to help improve your running.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <FaMapMarkerAlt className="text-sadrc-orange text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Multiple Locations</h3>
              <p className="text-gray-300">Run with us in Skegness, Spilsby, Horncastle, or Boston - choose the location that suits you best.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-16 bg-[#121212]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-sadrc-orange">How to Join</h2>
          <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">1. Try Us Out First</h3>
                <p className="text-gray-300">Come along to any of our sessions for free! We offer three trial runs before you need to become a member.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">2. Complete the Application</h3>
                <p className="text-gray-300">Download and fill out our membership application form. Annual membership is just £19.</p>
                <Link 
                  href="/files/SADRC application 2024-25.docx"
                  className="inline-block mt-4 bg-sadrc-orange hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition duration-200"
                >
                  Download Application Form
                </Link>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">3. Get in Touch</h3>
                <p className="text-gray-300">Have questions? Contact us through any of these channels:</p>
                <div className="mt-4 flex flex-col sm:flex-row gap-4">
                  <a 
                    href="mailto:infosadrc@mail.com"
                    className="flex items-center gap-2 text-gray-200 hover:text-sadrc-orange transition-colors"
                  >
                    <FaEnvelope /> infosadrc@mail.com
                  </a>
                  <a 
                    href="https://www.facebook.com/groups/sadrc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-200 hover:text-sadrc-orange transition-colors"
                  >
                    <FaFacebook /> Join our Facebook Group
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
