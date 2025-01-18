import Navbar from '../components/Navbar'

export default function About() {
  return (
    <main className="min-h-screen bg-sadrc-black">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold mb-6">
          About <span className="text-sadrc-orange">SADRC</span>
        </h1>
        <p className="text-gray-300 mb-4">
          Welcome to Skegness and District Running Club! We are a friendly community of runners based in Lincolnshire.
        </p>
        <p className="text-gray-300 mb-4">
          Our club welcomes runners of all abilities, from beginners to experienced athletes. We offer structured training sessions, social runs, and participate in various local and national events.
        </p>
      </div>
    </main>
  )
}
