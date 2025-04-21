'use client';

import Navbar from '../components/Navbar';
import { FaDownload } from 'react-icons/fa';

export default function About() {
  const handleDownload = async () => {
    try {
      // Use the new static PDF path instead of the API
      const url = '/files/SADRC%20Constitution%20-%20UPDATED%20(April%202025)%20v3%20-%20Final%20signed.pdf';
      const a = document.createElement('a');
      a.href = url;
      a.download = 'SADRC-Constitution.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading constitution:', error);
      alert('Error downloading constitution. Please try again later.');
    }
  };

  return (
    <main className="min-h-screen bg-sadrc-black">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-4xl font-bold mb-6">
          About <span className="text-sadrc-orange">SADRC</span>
        </h1>
        
        {/* Club Introduction */}
        <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-sadrc-orange">Our Club</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Welcome to Skegness and District Running Club! We are a friendly community of runners based in Lincolnshire.
            </p>
            <p>
              Our club welcomes runners of all abilities, from beginners to experienced athletes. We offer structured training sessions, social runs, and participate in various local and national events.
            </p>
            <p>
              With four locations across Lincolnshire - Skegness, Spilsby, Horncastle, and Boston - we provide accessible running opportunities for everyone in our community.
            </p>
          </div>
        </div>

        {/* Committee Members Section */}
        <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-6 text-sadrc-orange">Committee Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Main Committee Positions */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Main Committee</h3>
              <ul className="space-y-2 text-gray-300">
                <li><span className="font-semibold text-sadrc-orange">Chair:</span> Shawn Thomas</li>
                <li><span className="font-semibold text-sadrc-orange">Vice Chair:</span> Mark Sands</li>
                <li><span className="font-semibold text-sadrc-orange">Secretary:</span> Claire Harness</li>
                <li><span className="font-semibold text-sadrc-orange">Treasurer:</span> Helena Shelton</li>
                <li><span className="font-semibold text-sadrc-orange">Membership Secretary:</span> Position Available</li>
                <li><span className="font-semibold text-sadrc-orange">DBS Verifier:</span> Leanne Rickett</li>
                <li><span className="font-semibold text-sadrc-orange">Kit Officer:</span> Phillip Weaver</li>
              </ul>
            </div>

            {/* Welfare Officers */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Welfare Officers</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Sarah Thomas</li>
                <li>Sally Sharp</li>
                <li>Rob Cox</li>
                <li>Rebecca Grice</li>
                <li>Mark Sands</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Constitution Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-sadrc-orange mb-4">SADRC Constitution (Updated April 2025)</h2>
          <p className="text-gray-200 mb-4">
            The Skegness and District Running Club Constitution was updated in April 2025 to reflect the latest best practices in club governance, membership, and policies. Key updates include:
          </p>
          <ul className="list-disc list-inside text-gray-200 mb-4">
            <li>Enhanced governance and committee roles</li>
            <li>Updated membership categories and eligibility</li>
            <li>Revised procedures for meetings and voting</li>
            <li>New policies on club finances and safeguarding</li>
          </ul>
          <p className="text-gray-200 mb-4">
            For the full, authoritative constitution, please download the latest PDF below.
          </p>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2 bg-sadrc-orange text-white rounded hover:bg-orange-700 transition-colors font-semibold"
          >
            <FaDownload /> Download Constitution (PDF)
          </button>
        </section>
      </div>
    </main>
  );
}
