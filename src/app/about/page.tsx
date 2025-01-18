'use client';

import Navbar from '../components/Navbar';
import { FaDownload } from 'react-icons/fa';

export default function About() {
  const handleDownload = async () => {
    try {
      const response = await fetch('/api/download-constitution');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'SADRC-Constitution.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
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

        {/* Constitution Section */}
        <div className="bg-[#1a1a1a] p-6 rounded-lg">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-sadrc-orange">Club Constitution</h2>
            <button
              onClick={handleDownload}
              className="flex items-center space-x-2 bg-sadrc-orange text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
            >
              <FaDownload />
              <span>Download PDF</span>
            </button>
          </div>

          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-semibold mt-8 mb-4">Interpretation</h3>
            <p className="mb-4">Unless the context requires otherwise, the following terms in these Rules shall have the following meaning respectively:</p>
            <ul className="list-none space-y-2">
              <li><strong>AGM</strong> - has the meaning given in rule 12.1;</li>
              <li><strong>Committee</strong> - means the management committee of the Club from time to time;</li>
              <li><strong>Chair</strong> - means the person from time to time appointed as chair of the Club in accordance with these Rules;</li>
              <li><strong>Club</strong> - means the club intended to be regulated by these Rules;</li>
              <li><strong>EGM</strong> - has the meaning given in rule 12.2;</li>
              <li><strong>England Athletics</strong> - means England Athletics Limited (company number: 05583713) (or its successor body);</li>
              <li><strong>General Meeting</strong> - means a general meeting of the Members (being either an AGM or an EGM);</li>
              <li><strong>Member</strong> - means a member of the Club;</li>
              <li><strong>Objects</strong> - has the meaning given in rule 3;</li>
              <li><strong>Officers</strong> - means the members of the Committee;</li>
              <li><strong>Secretary</strong> - means the person from time to time appointed as secretary of the Club in accordance with these Rules;</li>
              <li><strong>SADRC</strong> - Skegness and District Running Club;</li>
              <li><strong>Treasurer</strong> - means the person from time to time appointed as treasurer of the Club in accordance with these Rules;</li>
              <li><strong>UKA</strong> - means UK Athletics Limited (company number 03686940) (or its successor body);</li>
              <li><strong>Writing and written</strong> - includes email and social media</li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-4">Name and Office</h3>
            <p className="mb-4">The Club shall be called Skegness and District Running Club.</p>
            <p className="mb-4">The principal office of the Club shall be situated in England.</p>

            <h3 className="text-xl font-semibold mt-8 mb-4">Objects</h3>
            <p className="mb-4">The objects of the Club (Objects) are for the public benefit generally but with particular reference to the inhabitants of Skegness and its surrounding areas:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>to promote community participation in healthy recreation by providing (a) facilities for running and (b) coaching, competition and other services to support these activities;</li>
              <li>to provide and assist in the provision of facilities for sport, recreation and other leisure time occupation of such persons who have need for such facilities by reason of their youth, age, infirmity or disability, poverty or social and economic circumstances or for the public at large in the interests of social welfare and with the object of improving their conditions of life.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-4">Ethos</h3>
            <p className="mb-4">The Club is committed to ensuring that equity is incorporated across all aspects of its operations, activities and development. In doing so, the Club acknowledges and adopts the following Sport England definition of sports equity:</p>
            <blockquote className="border-l-4 border-sadrc-orange pl-4 my-4 italic">
              'Sports equity is about fairness in sport, equality of access, recognizing inequalities and taking steps to address them. It is about changing the culture and structure of sport to ensure it becomes equally accessible to everyone in society.'
            </blockquote>
          </div>
        </div>
      </div>
    </main>
  );
}
