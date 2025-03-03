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
            <ul className="list-disc pl-6 space-y-2">
              <li>The Club respects the rights, dignity and worth of every person and shall treat everyone equally within the context of their sport, regardless of age, ability, gender, race, ethnicity, religious belief, sexuality or social/economic status.</li>
              <li>The Club is committed to everyone having the right to enjoy their sport in an environment free from threat of intimidation, harassment and abuse.</li>
              <li>All Members have a responsibility to oppose discriminatory behaviour and promote equality of opportunity.</li>
              <li>The Club will deal with any incidence of discriminatory behaviour seriously according to the Club's disciplinary procedures.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-4">Exercise of Powers</h3>
            <p className="mb-4">In furtherance of the Objects but not otherwise the Club may exercise the following powers:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>to carry on a sports club;</li>
              <li>to provide sports coaching, training and equipment;</li>
              <li>to participate in and organise leagues, competitions, tournaments and matches and related activities;</li>
              <li>to provide information, advice and guidance in running and/or competitions, coach development and other related activities;</li>
              <li>to publish or distribute information including by means of reports, books, leaflets, films, videos, websites and any other media;</li>
              <li>to draw, make, accept, endorse, discount, execute and issue bills, cheques and other instruments and to open and operate bank accounts in the name of the Club;</li>
              <li>to accept or disclaim gifts of money or any other property;</li>
              <li>to raise funds and to invite and receive contributions;</li>
              <li>to purchase, take on, hire, lease, acquire, alter, improve, construct and maintain property and equip it for use;</li>
              <li>to sell, charge, let, mortgage or otherwise dispose of property and buildings;</li>
              <li>to insure the property of the Club against any foreseeable risk and to take out other insurance policies to protect the Club and the Officers when required including the provision of indemnity insurance to cover the liability of the Officers and other staff and volunteers;</li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-4">Club Finances and Property</h3>
            <div className="space-y-4">
              <p>A bank account shall be opened and maintained in the name of the Club (Skegness and District Running Club). Designated account signatories shall be the Chair, the Secretary and the Treasurer.</p>
              <p>No sum shall be expended from the Club Account except by cheque signed by two of the designated signatories or by electronic transfer approved by at least one of the designated signatories subject to a maximum amount fixed by the Committee.</p>
              <p>All monies payable to the Club shall be received by the Treasurer and deposited in the Club Account as soon as is reasonably practicable.</p>
              <p>The Club's financial year shall end on 5th April each year or such other date as the Committee may determine from time to time provided that no financial year shall be shortened to less than nine months or extended to more than fifteen months.</p>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4">Club Membership</h3>
            <div className="space-y-4">
              <p>The Members from time to time shall be those persons listed in the Club's register of members which shall be maintained by the Membership Secretary.</p>
              <p>The Committee may make bye laws establishing classes of membership with different rights and obligations and shall record such rights and obligations in the Club's register of members.</p>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4">Admission to Membership</h3>
            <div className="space-y-4">
              <p>Any person who wishes to be a Member must apply in such form as is determined by the Committee from time to time and deliver it to the Chair or the Secretary.</p>
              <p>Membership of the Club is open to all without discrimination and may only be refused where admission to membership would be contrary to the best interests of sport or the good conduct and interests of the Club.</p>
              <p>No person shall be denied membership of the Club on the grounds of race, ethnic origin, colour, age, disability, sex, occupation, sexual orientation, religion, political or other beliefs.</p>
              <p>The Committee or the Members may from time to time fix the levels of admission fees and annual subscriptions to be paid by different categories of Members.</p>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4">The Committee</h3>
            <p className="mb-4">The Committee shall consist of a minimum of three Officers, including the following Officers:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Club Chair</li>
              <li>Vice Chair</li>
              <li>Club Treasurer</li>
              <li>Club Secretary</li>
              <li>Welfare Officer</li>
              <li>Membership secretary</li>
              <li>DBS verifier</li>
              <li>Any other Officers elected at a General Meeting</li>
            </ul>
            <p className="mt-4">At least three members of the clubs committee should be unrelated or not co-habiting.</p>

            <h3 className="text-xl font-semibold mt-8 mb-4">General Meetings</h3>
            <div className="space-y-4">
              <p>The Committee shall call an Annual General Meeting (AGM) each year and no more than fifteen months shall pass between one AGM and the next following one. The business of an AGM shall include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>the receipt of a report of the activities of the Club over the previous year;</li>
                <li>the receipt of a report of the Club's finances over the previous year;</li>
                <li>the election and retirement of Officers;</li>
                <li>any other business.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
