import Navbar from '../components/Navbar'
import { FaEnvelope, FaFacebook, FaPhone } from 'react-icons/fa'

export default function Contact() {
  return (
    <main className="min-h-screen bg-sadrc-black">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold mb-6">
          Contact <span className="text-sadrc-orange">Us</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
            <div className="flex items-center space-x-4 text-sadrc-orange mb-4">
              <FaEnvelope className="text-2xl" />
              <h2 className="text-xl font-bold">Email Us</h2>
            </div>
            <p className="text-gray-300">contact@sadrc.co.uk</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
            <div className="flex items-center space-x-4 text-sadrc-orange mb-4">
              <FaFacebook className="text-2xl" />
              <h2 className="text-xl font-bold">Follow Us</h2>
            </div>
            <p className="text-gray-300">Find us on Facebook</p>
          </div>
        </div>
      </div>
    </main>
  )
}
