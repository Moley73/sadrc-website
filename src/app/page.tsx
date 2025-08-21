// Define TypeScript interfaces for our data structures
interface LocationType {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  day: string;
  mapUrl: string;
}

interface EventType {
  name: string;
  date: string;
  time: string;
  image: string;
  description: string;
  registrationLink: string | null;
  resultsLink?: string;
  isResults?: boolean;
}

'use client';

import { useCallback, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaMapMarkerAlt, 
  FaRunning, 
  FaCalendarAlt, 
  FaClock, 
  FaDirections, 
  FaFileDownload, 
  FaEnvelope, 
  FaFacebook, 
  FaInstagram 
} from 'react-icons/fa';
import Navbar from './components/Navbar';

// Location data
const locations: LocationType[] = [
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

// Events data
const events: EventType[] = [
  {
    name: 'Spilsby Show 10K - 2025 Results',
    date: 'July 14, 2025',
    time: 'Completed',
    image: '/images/events/spilsby-show.jpg',
    description: 'View the full results and timings from the 2025 Spilsby Show 10K race.',
    registrationLink: null,
    resultsLink: 'https://www.webscorer.com/race?raceid=397688',
    isResults: true
  },
  {
    name: 'Spilsby Show 10K',
    date: 'TBC July 2026',
    time: 'TBC',
    image: '/images/events/spilsby-show.jpg',
    description: 'A fantastic multi-terrain 10K race at the annual Spilsby Show. Perfect for all abilities! More details to follow.',
    registrationLink: null
  },
  {
    name: 'Bolingbroke Breaker 10K Time Trial',
    date: 'Sunday, 14th September 2025',
    time: '10:00 AM',
    image: '/images/events/Breaker-10.jpg',
    description: 'The legendary Bolingbroke Breaker returns! A tough but rewarding 10K race at Ramsden Village Hall, Keal Hill, Old Bolingbroke, Spilsby, Lincolnshire, PE23 4EY. For enquiries: bolingbrokebreaker@gmail.com',
    registrationLink: 'https://bookitzone.com/bolingbrokebreaker/zNjFFX?fbclid=IwY2xjawMUQnRleHRuA2FlbQIxMQABHrumySSCkLXVYqJUlGWRvB2mlI7p3a2DVG9Vbuy2gi0lWOnma7lSd-UFuv88_aem_w6KvnHWDh4SVEuUIiCpAFg'
  }
];

// Location Card Component for better code organization
const LocationCard = ({ location }: { location: LocationType }) => {
  const { name, description, icon: Icon, image, day, mapUrl } = location;
  
  return (
    <article 
      className="bg-gradient-to-br from-[#222222] to-[#1a1a1a] rounded-lg overflow-hidden shadow-lg group transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-black/30 border border-transparent hover:border-sadrc-orange/20"
    >
      <div className="h-48 relative overflow-hidden">
        <Image
          src={image}
          alt={`${name} running location - Skegness and District Running Club`}
          width={400}
          height={300}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 p-4 w-full">
          <div className="flex items-center">
            <div className="bg-sadrc-orange p-2 rounded-full mr-3 text-white group-hover:animate-pulse-grow">
              <Icon className="text-lg" />
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-sadrc-orange transition-colors duration-300">{name}</h3>
          </div>
          <div className="flex items-center mt-2 text-white/80 text-sm">
            <span className="bg-sadrc-orange/20 px-2 py-1 rounded text-white font-medium">{day}</span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sadrc-orange hover:text-white bg-sadrc-orange/10 hover:bg-sadrc-orange transition-all duration-300 px-3 py-2 rounded-lg text-sm font-medium w-full justify-center"
        >
          <FaDirections className="mr-2" />
          Get Directions
        </a>
      </div>
    </article>
  );
};

// Event Card Component
const EventCard = ({ event }: { event: EventType }) => {
  const { name, date, time, image, description, registrationLink, resultsLink, isResults } = event;
  
  return (
    <article className="bg-gradient-to-br from-[#222222] to-[#1a1a1a] rounded-lg overflow-hidden shadow-lg group hover:shadow-xl hover:shadow-black/30 transition-all duration-300 transform hover:-translate-y-2 border border-transparent hover:border-sadrc-orange/20">
      <div className="h-48 relative overflow-hidden">
        <Image
          src={image}
          alt={`${name} - Skegness and District Running Club event`}
          width={500}
          height={300}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {isResults && (
          <div className="absolute top-3 right-3 bg-sadrc-orange text-white text-xs font-bold px-2 py-1 rounded-full">
            RESULTS
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 p-4 w-full">
          <h3 className="text-xl font-bold text-white group-hover:text-sadrc-orange transition-colors duration-300">{name}</h3>
          <div className="flex items-center mt-2 space-x-3">
            <div className="flex items-center text-white/80 text-sm">
              <FaCalendarAlt className="mr-1 text-sadrc-orange" />
              <span>{date}</span>
            </div>
            <div className="flex items-center text-white/80 text-sm">
              <FaClock className="mr-1 text-sadrc-orange" />
              <span>{time}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        
        {resultsLink ? (
          <a
            href={resultsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-white bg-green-700 hover:bg-green-600 transition-all duration-300 px-3 py-2 rounded-lg text-sm font-medium w-full justify-center mb-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            View Results
          </a>
        ) : registrationLink ? (
          <a
            href={registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sadrc-orange hover:text-white bg-sadrc-orange/10 hover:bg-sadrc-orange transition-all duration-300 px-3 py-2 rounded-lg text-sm font-medium w-full justify-center"
          >
            <FaFileDownload className="mr-2" />
            Enter Now
          </a>
        ) : (
          <div className="inline-flex items-center justify-center text-gray-400 bg-gray-800/50 px-3 py-2 rounded-lg text-sm font-medium w-full">
            Coming Soon
          </div>
        )}
      </div>
    </article>
  );
};

export default function Home() {
  const handleJoinUsClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Memoize location cards to prevent unnecessary re-renders
  const locationCards = useMemo(() => (
    locations.map((location, index) => (
      <LocationCard key={`location-${index}`} location={location} />
    ))
  ), []);

  // Memoize event cards to prevent unnecessary re-renders
  const eventCards = useMemo(() => (
    events.map((event, index) => (
      <EventCard key={`event-${index}`} event={event} />
    ))
  ), []);

  return (
    <main className="min-h-screen bg-[#121212]">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-screen min-h-[600px] overflow-hidden">
        <div className="absolute inset-0 animate-subtle-zoom">
          <Image
            src="/images/hero/running-hero.jpg"
            alt="Runners at sunset in Skegness and District Running Club"
            width={1920}
            height={1080}
            className="absolute inset-0 object-cover w-full h-full"
            priority
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM+fUSXJr76CeQ2eH9GpSlIxEUOmf/9k="
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center pt-16">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 text-sadrc-orange animate-fade-in">
            Skegness and District
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Running Club
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-2xl text-gray-200 px-4 animate-fade-in-delayed">
            Join our friendly community of runners across Lincolnshire
          </p>
          <a
            href="#contact-section"
            className="bg-sadrc-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-base sm:text-lg transition-all duration-300 flex items-center space-x-2 group"
            onClick={handleJoinUsClick}
          >
            <span>Join Us Today</span>
            <svg 
              className="w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Welcome Section */}
      <section className="py-12 sm:py-16 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6 sm:mb-8">
            Welcome to <span className="text-sadrc-orange">Skegness and District RC</span>
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
      <section id="locations" className="py-16 px-4 bg-[#121212] scroll-mt-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Our <span className="text-sadrc-orange">Locations</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            We run from multiple locations across Lincolnshire
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {locationCards}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 px-4 bg-[#1a1a1a] scroll-mt-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Upcoming <span className="text-sadrc-orange">Events</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Join us at our upcoming races and events
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {eventCards}
          </div>
        </div>
      </section>

      {/* Club Shop Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-sadrc-orange mb-4">Club Shop</h2>
            <p className="text-gray-400 text-lg">Get your official Skegness and District RC running gear</p>
          </div>
          <div className="bg-black/20 p-6 rounded-lg border border-gray-800 text-center">
            <p className="text-gray-300 mb-6">
              Visit our club shop to purchase official Skegness and District RC running gear. Show your club pride with our range of high-quality running apparel. Club vests, training t-shirts, and fast wraps are available from the club Kit Officer.
            </p>
            <a
              href="https://clubshop.fastraxrunning.com/product-category/skegness_and_district_rc/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-sadrc-orange hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span className="mr-2">Visit Club Shop</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
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
                  Skegness and District RC <span className="text-sadrc-orange">Race League</span>
                </h2>
                <p className="text-gray-300 mb-6 text-sm sm:text-base">
                  Exclusive to Skegness and District RC members! Join our exciting Race League where you can compete with fellow club members, track your progress, and challenge yourself throughout the year. Follow our Facebook page for updates, results, and upcoming race events.
                </p>
                <a 
                  href="https://www.facebook.com/profile.php?id=61572382600721"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-sadrc-orange hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
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
                  className="inline-flex items-center bg-sadrc-orange hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
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
              Skegness and District RC <span className="text-sadrc-orange">Membership 2025</span>
            </h2>

            {/* Membership Details */}
            <div className="space-y-6 mb-8">
              {/* Key Points */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="bg-black/20 p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-semibold text-sadrc-orange mb-3">Club Membership</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li><span aria-hidden="true">•</span> Club membership is £10 per year</li>
                    <li><span aria-hidden="true">•</span> Open to anyone aged 15 or over</li>
                    <li><span aria-hidden="true">•</span> Membership year: April 1st to March 31st</li>
                    <li><span aria-hidden="true">•</span> Optional England Athletics affiliation: £20</li>
                  </ul>
                </div>
                <div className="bg-black/20 p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-semibold text-sadrc-orange mb-3">Member Benefits</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li><span aria-hidden="true">•</span> Enter races under Skegness and District RC name</li>
                    <li><span aria-hidden="true">•</span> Participate in Lincs League Cross Country</li>
                    <li><span aria-hidden="true">•</span> Eligible for London Marathon club places draw*</li>
                    <li><span aria-hidden="true">•</span> Race entry discounts (if EA affiliated)</li>
                  </ul>
                </div>
              </div>
              
              {/* Additional Info */}
              <div className="bg-black/20 p-6 rounded-lg border border-gray-800 text-left mt-4">
                <h3 className="text-xl font-semibold text-sadrc-orange mb-3">England Athletics Affiliation</h3>
                <p className="text-gray-300 mb-3">If you choose to become affiliated, you are required to wear your club vest when competing for an England Athletics running club in a UK Athletics sanctioned race. The exception being if you are competing for your County, Country or in a Charity event.</p>
                <p className="text-gray-300">This does not include club training nights or Parkruns. Club vests are available to buy from the SADRC Kit Officer.</p>
              </div>
              
              {/* How to Join */}
              <div className="bg-black/20 p-6 rounded-lg border border-gray-800 text-left mt-4">
                <h3 className="text-xl font-semibold text-sadrc-orange mb-3">How to Join</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-300">
                  <li>Download and complete the membership form</li>
                  <li>Email your completed form to <a href="mailto:infosadrc@mail.com" className="text-sadrc-orange hover:text-orange-400">infosadrc@mail.com</a></li>
                  <li>If choosing EA affiliation, bank details will be provided for payment</li>
                </ol>
                <p className="text-sm text-gray-400 mt-4">* Subject to terms & conditions, including having been rejected in the ballot</p>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a
                href="/files/SADRC membership form 2025-26 - Final.pdf"
                download
                className="inline-flex items-center justify-center bg-sadrc-orange hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 w-full sm:w-auto text-center"
              >
                <FaFileDownload className="text-xl sm:text-2xl mr-2 sm:mr-3 flex-shrink-0" />
                <span className="text-base sm:text-lg">Download Membership Form</span>
              </a>
              
              <a
                href="/files/codes-of-conduct-senior-athletes-1.pdf"
                download
                className="inline-flex items-center justify-center bg-[#333333] hover:bg-[#444444] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 border border-gray-700 w-full sm:w-auto text-center"
              >
                <FaFileDownload className="text-xl sm:text-2xl mr-2 sm:mr-3 flex-shrink-0" />
                <span className="text-base sm:text-lg">Download Code of Conduct</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section id="footer" className="py-16 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Get in <span className="text-sadrc-orange">Touch</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have a question or want to join our running community? Send us a message and we'll get back to you as soon as possible.
            </p>
          </div>
          <div className="mt-16 text-center text-gray-400">
            <p className="mb-2">You can also reach us directly at:</p>
            <a href="mailto:infosadrc@mail.com" className="text-sadrc-orange hover:text-orange-400 font-semibold">
              infosadrc@mail.com
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mt-8">
            <a
              href="https://www.facebook.com/skegnessanddistrictrunningclub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-sadrc-orange transition-colors duration-300"
            >
              <FaFacebook className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/sadrc_uk?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-sadrc-orange transition-colors duration-300"
            >
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
