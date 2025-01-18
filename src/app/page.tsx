import Link from 'next/link';
import Image from 'next/image';
import { FaMapMarkerAlt, FaRunning, FaCalendarAlt, FaClock, FaDirections } from 'react-icons/fa';
import Navbar from './components/Navbar';

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
      name: 'The Spilsby Show 10k',
      date: 'Sunday 13th July 2025',
      time: '10:00 AM',
      image: '/images/locations/spilsby-show.jpg',
      description: 'Join us for our annual Spilsby Show 10k race - a challenging and scenic route through the Lincolnshire countryside.',
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
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sadrc-black/80 via-sadrc-black/50 to-sadrc-black" />
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
          <Link
            href="/contact"
            className="bg-sadrc-orange hover:bg-orange-600 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-colors transform hover:scale-105 duration-200 flex items-center space-x-2"
          >
            <FaRunning className="text-lg sm:text-xl" />
            <span>Join Us Today</span>
          </Link>
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
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 sm:mb-4">
            Our <span className="text-sadrc-orange">Locations</span>
          </h2>
          <p className="text-center text-gray-400 mb-8 sm:mb-12 text-sm sm:text-base">
            Choose from our four fantastic locations across Lincolnshire
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {locations.map((location) => (
              <div key={location.name} 
                   className="bg-black/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-800 hover:border-sadrc-orange group">
                <div className="relative h-40 sm:h-48">
                  <Image
                    src={location.image}
                    alt={`${location.name} running location`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between text-sadrc-orange mb-3 sm:mb-4">
                    <location.icon className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform" />
                    <div className="flex items-center space-x-2">
                      <FaClock className="text-base sm:text-lg" />
                      <span className="text-gray-300 text-sm sm:text-base">{location.day}s 6:30 PM</span>
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white group-hover:text-sadrc-orange transition-colors">
                    {location.name}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm sm:text-base">{location.description}</p>
                  <a 
                    href={location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sadrc-orange hover:text-orange-400 transition-colors text-sm sm:text-base"
                  >
                    <FaDirections className="mr-2" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events-section" className="py-16 sm:py-24 bg-[#1a1a1a] scroll-mt-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 sm:mb-4">
            Upcoming <span className="text-sadrc-orange">Events</span>
          </h2>
          <p className="text-center text-gray-400 mb-8 sm:mb-12 text-sm sm:text-base">
            Challenge yourself at our exciting upcoming races
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {events.map((event) => (
              <div key={event.name} 
                   className="bg-black/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-800 hover:border-sadrc-orange group">
                <div className="relative h-48 sm:h-56">
                  <Image
                    src={event.image}
                    alt={event.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex items-center text-sadrc-orange mb-3 sm:mb-4 space-x-2">
                    <FaCalendarAlt className="text-xl sm:text-2xl" />
                    <span className="text-gray-300 text-sm sm:text-base">{event.date} at {event.time}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white group-hover:text-sadrc-orange transition-colors">
                    {event.name}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm sm:text-base">{event.description}</p>
                  {event.registrationLink ? (
                    <a 
                      href={event.registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-sadrc-orange text-white px-4 sm:px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-sm sm:text-base"
                    >
                      Register Now
                    </a>
                  ) : (
                    <span className="inline-block bg-gray-700 text-white px-4 sm:px-6 py-2 rounded-lg font-semibold text-sm sm:text-base cursor-not-allowed">
                      TBC
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
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

      {/* Call to Action */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
            Ready to <span className="text-sadrc-orange">Join Us?</span>
          </h2>
          <p className="text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Come along to any of our sessions and give it a try. Your first three sessions are free!
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-sadrc-orange text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-sm sm:text-base"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
