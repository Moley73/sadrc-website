'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaMapMarkerAlt, FaRunning, FaCalendarAlt, FaClock, FaDirections, FaFileDownload, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';
import Navbar from './components/Navbar';
import FacebookFeed from './components/FacebookFeed';

export default function Home() {
  const locations = [
    { 
      name: 'Skegness', 
      description: 'Meeting at the Links Bar/Hotel on Thursday nights for a 6:30 PM start', 
      icon: FaMapMarkerAlt,
      image: '/images/locations/skegness-location.jpg',
      day: 'Thursday',
      mapUrl: 'https://maps.google.com/?q=Links+Hotel+Skegness'
    },
    { 
      name: 'Spilsby', 
      description: 'Meeting at the New Life Centre on Tuesday nights for a 6:30 PM start', 
      icon: FaRunning,
      image: '/images/locations/spilsby-location.jpg',
      day: 'Tuesday',
      mapUrl: 'https://maps.google.com/?q=New+Life+Centre+Spilsby'
    },
    { 
      name: 'Horncastle', 
      description: 'Meeting at the Cattle Market Car Park on Monday nights for a 6:30 PM start', 
      icon: FaMapMarkerAlt,
      image: '/images/locations/horncastle-location.jpg',
      day: 'Monday',
      mapUrl: 'https://maps.google.com/?q=Cattle+Market+Car+Park+Horncastle'
    },
    { 
      name: 'Boston', 
      description: 'Meeting at the Fuddy Duck (PE21 7TW) on Thursday nights for a 6:30 PM start', 
      icon: FaMapMarkerAlt,
      image: '/images/locations/boston-location.jpg',
      day: 'Thursday',
      mapUrl: 'https://maps.google.com/?q=Fuddy+Duck+Boston+PE21+7TW'
    },
  ];

  const events = [
    {
      name: 'Spilsby Show 10K',
      date: 'July 14, 2025',
      time: '11:00 AM',
      image: '/images/locations/spilsby-show.jpg',
      description: 'A fantastic multi-terrain 10K race at the annual Spilsby Show. Perfect for all abilities!',
      registrationLink: 'https://www.spilsbyshow.co.uk/runners/'
    },
    {
      name: 'Bolingbroke Breaker',
      date: 'September 2025',
      time: '10:00 AM',
      image: '/images/locations/breaker-10k.avif',
      description: 'The legendary Bolingbroke Breaker returns! A tough but rewarding race through historic Bolingbroke.',
      registrationLink: null
    }
  ];

  const handleJoinUsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#121212]">
      <Navbar />

      {/* Hero Section */}
      <div className="relative min-h-[600px] h-screen">
        <Image
          src="/running-hero.jpg"
          alt="Runners at sunset"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center pt-16">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 text-sadrc-orange">
            Skegness and District
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Running Club
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-2xl text-gray-200 px-4">
            Join our friendly community of runners across Lincolnshire
          </p>
          <a
            href="#contact-section"
            className="bg-sadrc-orange hover:bg-orange-600 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-colors transform hover:scale-105 duration-200 flex items-center space-x-2"
            onClick={handleJoinUsClick}
          >
            <FaRunning className="text-lg sm:text-xl" />
            <span>Join Us Today</span>
          </a>
        </div>
      </div>

      {/* Welcome Section */}
      <section className="py-12 sm:py-16 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6 sm:mb-8">
            Welcome to <span className="text-sadrc-orange">SADRC</span>
          </h2>
          <div className="max-w-3xl mx-auto text-gray-300 space-y-3 sm:space-y-4 px-4 sm:px-6">
            <p className="text-sm sm:text-base">
              Skegness and District Running Club is more than just a running club - we're a community of passionate runners who support and encourage each other.
            </p>
            <p className="text-sm sm:text-base">
              Whether you're taking your first steps into running or you're an experienced marathoner, you'll find a warm welcome and plenty of support here.
            </p>
            <p className="text-sm sm:text-base">
              We offer structured training sessions, social runs, and preparation for local and national events. Our qualified coaches are here to help you achieve your running goals.
            </p>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-16 px-4 scroll-mt-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Our <span className="text-sadrc-orange">Locations</span>
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Choose from our four fantastic locations across Lincolnshire
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location) => (
            <div key={location.name} className="bg-[#1a1a1a] rounded-lg overflow-hidden hover:bg-[#222222] transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-black/20">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src={location.image}
                  alt={location.name}
                  width={400}
                  height={300}
                  unoptimized
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-4 transform transition-all duration-300">
                <h3 className="text-xl font-bold text-sadrc-orange transform transition-all duration-300 hover:translate-x-1">{location.name}</h3>
                <p className="text-gray-300 text-sm mt-2">{location.description}</p>
                <div className="flex items-center mt-4 transform transition-all duration-300 hover:translate-x-1">
                  <FaMapMarkerAlt className="text-sadrc-orange mr-2 transition-all duration-300" />
                  <a
                    href={location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-sadrc-orange text-sm transition-colors duration-300"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 px-4 bg-[#1a1a1a] scroll-mt-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Upcoming <span className="text-sadrc-orange">Events</span>
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Join us at our upcoming races and events
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {events.map((event) => (
            <div key={event.name} className="bg-[#222222] rounded-lg overflow-hidden hover:bg-[#2a2a2a] transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-black/20">
              <div className="h-56 relative overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.name}
                  width={600}
                  height={400}
                  unoptimized
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6 transform transition-all duration-300">
                <h3 className="text-2xl font-bold text-sadrc-orange mb-2 transform transition-all duration-300 hover:translate-x-1">{event.name}</h3>
                <div className="flex items-center text-gray-400 mb-4 transform transition-all duration-300 hover:translate-x-1">
                  <FaCalendarAlt className="mr-2 transition-all duration-300" />
                  <span>{event.date}</span>
                  <FaClock className="ml-4 mr-2 transition-all duration-300" />
                  <span>{event.time}</span>
                </div>
                <p className="text-gray-300 mb-4">{event.description}</p>
                {event.registrationLink && (
                  <a
                    href={event.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-sadrc-orange hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20"
                  >
                    Register Now
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Facebook Feed */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Latest from <span className="text-sadrc-orange">Facebook</span>
        </h2>
        <div className="max-w-2xl mx-auto">
          <FacebookFeed />
        </div>
      </section>

      {/* Race League and Challenge Trophy Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {/* Race League Card */}
            <div className="bg-black/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-sadrc-orange group transition-all duration-300">
              <div className="p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  SADRC <span className="text-sadrc-orange">Race League</span>
                </h2>
                <p className="text-gray-300 mb-6 text-sm sm:text-base">
                  Exclusive to SADRC members! Join our exciting Race League where you can compete with fellow club members, track your progress, and challenge yourself throughout the year. Follow our Facebook page for updates, results, and upcoming race events.
                </p>
                <a 
                  href="https://www.facebook.com/profile.php?id=61554240866294"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-sadrc-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform group-hover:scale-105"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                  Join Race League
                </a>
              </div>
            </div>

            {/* AaGA Challenge Trophy Card */}
            <div className="bg-black/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-sadrc-orange group transition-all duration-300">
              <div className="p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  AaGA <span className="text-sadrc-orange">Challenge Trophy</span>
                </h2>
                <p className="text-gray-300 mb-6 text-sm sm:text-base">
                  Take part in our prestigious AaGA Challenge Trophy competition. This exciting challenge brings together runners of all abilities to compete for the coveted trophy. Stay updated with the latest standings and competition details on our Facebook page.
                </p>
                <a 
                  href="https://www.facebook.com/profile.php?id=100083222857849"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-sadrc-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform group-hover:scale-105"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                  Join Challenge Trophy
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="contact-section" className="py-12 sm:py-16 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              SADRC <span className="text-sadrc-orange">Membership 2025</span>
            </h2>

            {/* Membership Details */}
            <div className="space-y-6 mb-8">
              {/* Key Points */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="bg-black/20 p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-semibold text-sadrc-orange mb-3">Club Membership</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Club membership is FREE</li>
                    <li>• Open to anyone aged 15 or over</li>
                    <li>• Membership year: April to March</li>
                    <li>• Optional England Athletics affiliation: £19</li>
                  </ul>
                </div>
                <div className="bg-black/20 p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-semibold text-sadrc-orange mb-3">Member Benefits</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Enter races under SADRC name</li>
                    <li>• Participate in Lincs League Cross Country</li>
                    <li>• Eligible for London Marathon club places draw*</li>
                    <li>• Race entry discounts (if EA affiliated)</li>
                  </ul>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-black/20 p-6 rounded-lg border border-gray-800 text-left">
                <h3 className="text-xl font-semibold text-sadrc-orange mb-3">How to Join</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-300">
                  <li>1. Download and complete the membership form</li>
                  <li>2. Email your completed form to <a href="mailto:infosadrc@mail.com" className="text-sadrc-orange hover:text-orange-400">infosadrc@mail.com</a></li>
                  <li>3. If choosing EA affiliation, bank details will be provided for payment</li>
                </ol>
                <p className="text-sm text-gray-400 mt-4">* Subject to terms & conditions, including having been rejected in the ballot</p>
              </div>
            </div>

            {/* Download Button */}
            <a
              href="/images/locations/SADRC application 2024-25.docx"
              download
              className="inline-flex items-center bg-sadrc-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 space-x-3"
            >
              <FaFileDownload className="text-2xl" />
              <span className="text-lg">Download Membership Form</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
