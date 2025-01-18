import Navbar from '../components/Navbar'
import { FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa'
import Image from 'next/image'

export default function Locations() {
  const locations = [
    {
      name: 'Skegness',
      description: 'Our main club location',
      details: 'Meeting point: Links Bar/Hotel, Skegness',
      times: 'Thursday at 6:30 PM',
      mapUrl: 'https://maps.google.com/?q=Links+Hotel+Skegness',
      image: '/images/locations/skegness-location.jpg'
    },
    {
      name: 'Spilsby',
      description: 'Perfect for countryside runs',
      details: 'Meeting point: New Life Centre, Spilsby',
      times: 'Tuesday at 6:30 PM',
      mapUrl: 'https://maps.google.com/?q=New+Life+Centre+Spilsby',
      image: '/images/locations/spilsby-location.jpg'
    },
    {
      name: 'Horncastle',
      description: 'Beautiful Lincolnshire Wolds',
      details: 'Meeting point: Cattle Market Car Park, Horncastle',
      times: 'Monday at 6:30 PM',
      mapUrl: 'https://maps.google.com/?q=Cattle+Market+Car+Park+Horncastle',
      image: '/images/locations/horncastle-location.jpg'
    },
    {
      name: 'Boston',
      description: 'Historic market town routes',
      details: 'Meeting point: Fuddy Duck, PE21 7TW, Boston',
      times: 'Thursday at 6:30 PM',
      mapUrl: 'https://maps.google.com/?q=Fuddy+Duck+PE21+7TW+Boston',
      image: '/images/locations/boston-location.jpg'
    }
  ]

  return (
    <main className="min-h-screen bg-[#121212]">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold text-center mb-4">
          Our <span className="text-sadrc-orange">Locations</span>
        </h1>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Choose from our four fantastic locations across Lincolnshire
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {locations.map((location) => (
            <div key={location.name} className="bg-[#1a1a1a] rounded-lg overflow-hidden group hover:bg-[#222222] transition-all duration-300">
              <div className="relative aspect-video w-full">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1a1a] z-10" />
                <Image
                  src={location.image}
                  alt={location.name}
                  width={500}
                  height={300}
                  unoptimized
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className="p-6 relative z-20 -mt-8">
                <div className="flex justify-between items-start">
                  <h2 className="text-2xl font-bold text-sadrc-orange mb-2">{location.name}</h2>
                  <a
                    href={location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-sadrc-orange transition-colors flex items-center gap-2 bg-[#1a1a1a] py-1 px-3 rounded-full hover:bg-[#222222]"
                  >
                    <FaMapMarkerAlt className="text-sm" />
                    <span className="text-sm">View Map</span>
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                </div>
                <p className="text-gray-300 mb-2">{location.description}</p>
                <p className="text-gray-400 mb-3">{location.details}</p>
                <p className="text-sadrc-orange font-medium flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-sadrc-orange rounded-full" />
                  {location.times}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
