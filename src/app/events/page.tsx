import Navbar from '../components/Navbar'
import { FaCalendarAlt } from 'react-icons/fa'

export default function Events() {
  return (
    <main className="min-h-screen bg-sadrc-black">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold mb-6">
          Upcoming <span className="text-sadrc-orange">Events</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
            <div className="text-sadrc-orange mb-4">
              <FaCalendarAlt className="text-3xl" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Weekly Club Runs</h2>
            <p className="text-gray-300">Join us for our regular club runs at all locations</p>
          </div>
          {/* Add more events as needed */}
        </div>
      </div>
    </main>
  )
}
