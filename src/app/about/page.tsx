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
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-8 rounded-lg mb-8 shadow-xl border-l-4 border-sadrc-orange">
          <h2 className="text-3xl font-bold mb-6 text-sadrc-orange flex items-center">
            <span className="mr-2">Our Club</span>
            <div className="w-10 h-1 bg-sadrc-orange ml-2"></div>
          </h2>
          
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg border-l-2 border-gray-700 pl-4">
              Welcome to Skegness and District Running Club! We are a friendly community of runners based in Lincolnshire.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-[#222222] p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-sadrc-orange mb-3">All Abilities Welcome</h3>
                <p className="text-gray-300">
                  Our club welcomes runners of all abilities, from beginners to experienced athletes. We offer structured training sessions, social runs, and participate in various local and national events.
                </p>
              </div>
              
              <div className="bg-[#222222] p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-sadrc-orange mb-3">Multiple Locations</h3>
                <p className="text-gray-300">
                  With four locations across Lincolnshire - Skegness, Spilsby, Horncastle, and Boston - we provide accessible running opportunities for everyone in our community.
                </p>
              </div>
            </div>
            
            <div className="bg-[#222222] p-5 rounded-lg mb-6">
              <p className="text-lg italic">
                "Established in 2015, Skegness & District Running Club is a popular, thriving club with over 150 members across Skegness, Spilsby, Horncastle and Boston."
              </p>
            </div>
            
            <h3 className="text-2xl font-semibold text-sadrc-orange mb-4">Our Story</h3>
            
            <p className="text-lg">
              Co-founder Andy Shelton, a dedicated runner since 1986 and qualified coach, inspired his wife Helena to join him in running in 2012. Helena quickly developed a passion for the sport and is now also a qualified coach. Together with Glenn Hillaby who at the time was landlord of the Nelson Butt in Spilsby and a keen runner, they founded SADRC in January 2015, running from The Crown Hotel in Skegness, as well as the Nelson Butt. Their shared vision was to make running accessible to athletes of all abilities in the local area.
            </p>
            
            <p className="text-lg">
              The club received affiliation from England Athletics in April 2015. Shortly afterwards, a group was formed in Boston and four years later, a group in Horncastle was established due to increasing demand.
            </p>
            
            <div className="flex items-center my-6">
              <div className="flex-grow h-px bg-gray-700"></div>
              <div className="mx-4 text-gray-500">2025</div>
              <div className="flex-grow h-px bg-gray-700"></div>
            </div>
            
            <p className="text-lg">
              Fast forward to 2025 Skegness club night is run by Andy and Helena now at the Links Hotel and the Spilsby, Boston, and Horncastle groups are led by a group of extremely dedicated Run Leaders. For more information about these groups and their leaders, please look on our website.
            </p>
            
            <h3 className="text-2xl font-semibold text-sadrc-orange mb-4">Club Activities</h3>
            
            <p className="text-lg">
              As qualified coaches, Andy and Helena continue to guide club runners. Andy works with more experienced runners, while Helena supports beginners with programmes like the popular 'Couch to 5k'. She has successfully helped many runners progress through the club. Members regularly participate in 10k runs in Skegness, Grimsby, Cleethorpes, and Woodhall Spa, and in their own event, <a href="https://bookitzone.com/bolingbrokebreaker/zNjFFX?fbclid=IwY2xjawMUQnRleHRuA2FlbQIxMQABHrumySSCkLXVYqJUlGWRvB2mlI7p3a2DVG9Vbuy2gi0lWOnma7lSd-UFuv88_aem_w6KvnHWDh4SVEuUIiCpAFg" target="_blank" rel="noopener noreferrer" className="text-sadrc-orange hover:underline">the Bolingbroke Breaker</a>. The club is also involved in organising the Spilsby Show 10k. They also host a monthly Boating Lake Run in Skegness, a free event marshalled and timed by volunteers for both club members and other locals.
            </p>
            
            <div className="bg-sadrc-blue/10 p-5 rounded-lg my-6 border border-sadrc-orange/30">
              <h4 className="text-xl font-semibold text-sadrc-orange mb-3">Bolingbroke Breaker 10K Time Trial</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-medium mb-1">Date and Time</p>
                  <p>Sunday, 14th September 2025</p>
                  <p>10:00 am</p>
                  <p className="mt-4 font-medium mb-1">Event Enquiries</p>
                  <p><a href="mailto:bolingbrokebreaker@gmail.com" className="text-sadrc-orange hover:underline">bolingbrokebreaker@gmail.com</a></p>
                </div>
                <div>
                  <p className="font-medium mb-1">Event Location</p>
                  <p>Ramsden Village Hall</p>
                  <p>Keal Hill, Old Bolingbroke</p>
                  <p>Spilsby, Lincolnshire, PE23 4EY</p>
                  <p className="mt-4"><a href="https://bookitzone.com/bolingbrokebreaker/zNjFFX?fbclid=IwY2xjawMUQnRleHRuA2FlbQIxMQABHrumySSCkLXVYqJUlGWRvB2mlI7p3a2DVG9Vbuy2gi0lWOnma7lSd-UFuv88_aem_w6KvnHWDh4SVEuUIiCpAFg" target="_blank" rel="noopener noreferrer" className="bg-sadrc-orange hover:bg-sadrc-orange/80 text-white px-4 py-2 rounded-md inline-flex items-center transition-colors">Register Now <span className="ml-2">→</span></a></p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#222222] p-5 rounded-lg mt-6">
              <p className="text-lg">
                The club stands testament to the power of dedication, teamwork, and friendship. The committed Run Leaders and committee continue to inspire and lead the club, promoting physical and mental well-being and fostering a welcoming environment where every runner feels valued and encouraged. The vision and hard work that's been created has a lasting legacy that has positively impacted many in the East Lincolnshire running community.
              </p>
            </div>
          </div>
        </div>

        {/* Committee Members Section */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-4 sm:p-6 md:p-8 rounded-lg mb-8 shadow-lg border-l-4 border-sadrc-orange">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 md:mb-6 text-sadrc-orange flex items-center">
            <span className="mr-2">Committee Members</span>
            <div className="w-8 md:w-10 h-1 bg-sadrc-orange ml-2"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {/* Main Committee Positions */}
            <div className="bg-[#222222] p-4 md:p-6 rounded-lg">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-white border-b border-gray-700 pb-2">Main Committee</h3>
              <ul className="space-y-2 md:space-y-3 text-gray-300 text-sm md:text-base">
                <li className="flex flex-col sm:flex-row sm:items-center"><span className="font-semibold text-sadrc-orange sm:w-48 mb-1 sm:mb-0">Chair:</span> Helena Shelton</li>
                <li className="flex flex-col sm:flex-row sm:items-center"><span className="font-semibold text-sadrc-orange sm:w-48 mb-1 sm:mb-0">Vice Chair:</span> Mark Sands</li>
                <li className="flex flex-col sm:flex-row sm:items-center"><span className="font-semibold text-sadrc-orange sm:w-48 mb-1 sm:mb-0">Club Secretary:</span> Claire Harness</li>
                <li className="flex flex-col sm:flex-row sm:items-center"><span className="font-semibold text-sadrc-orange sm:w-48 mb-1 sm:mb-0">Treasurer:</span> Sally Sharp</li>
                <li className="flex flex-col sm:flex-row sm:items-center"><span className="font-semibold text-sadrc-orange sm:w-48 mb-1 sm:mb-0">Membership Secretary:</span> Andy Shelton</li>
                <li className="flex flex-col sm:flex-row sm:items-center"><span className="font-semibold text-sadrc-orange sm:w-48 mb-1 sm:mb-0">Kit Officer:</span> Darren Fissenden</li>
                <li className="flex flex-col sm:flex-row sm:items-center"><span className="font-semibold text-sadrc-orange sm:w-48 mb-1 sm:mb-0">Website Administrator:</span> Brian Darrington</li>
                <li className="flex flex-col sm:flex-row sm:items-center"><span className="font-semibold text-sadrc-orange sm:w-48 mb-1 sm:mb-0">DBS Verifier:</span> Leanne Rickett</li>
              </ul>
            </div>

            {/* Welfare Officers */}
            <div className="bg-[#222222] p-4 md:p-6 rounded-lg">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-white border-b border-gray-700 pb-2">Welfare Officers</h3>
              <ul className="space-y-2 md:space-y-3 text-gray-300 text-sm md:text-base">
                <li className="flex flex-col sm:flex-row sm:items-center"><span className="font-semibold text-sadrc-orange sm:w-48 mb-1 sm:mb-0">Senior/Lead Welfare Officer:</span> Sarah Thomas</li>
                <li className="flex flex-col sm:flex-row sm:items-center"><span className="font-semibold text-sadrc-orange sm:w-48 mb-1 sm:mb-0">Welfare Officer:</span> Becca Grice (Becca Louise on Facebook)</li>
                <li className="flex flex-col sm:flex-row sm:items-center mt-4 pt-2 border-t border-gray-700">
                  <span className="font-semibold text-sadrc-orange sm:w-48 mb-1 sm:mb-0">Welfare Contact:</span>
                  <a href="mailto:sadrc.welfare@mail.com" className="text-sadrc-orange hover:text-orange-400 hover:underline">sadrc.welfare@mail.com</a>
                </li>
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
