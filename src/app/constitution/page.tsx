import React from 'react';

export default function ConstitutionPage() {
  return (
    <main className="flex-1 container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-sadrc-orange mb-8">Club Constitution</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-lg mb-6">
            Our club constitution outlines the rules, regulations, and governance structure of Skegness and District Running Club.
          </p>
          
          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">Download Constitution</h2>
            <p className="mb-4">
              You can download our full club constitution document using the button below:
            </p>
            <a
              href="/constitution/SADRC-Constitution.pdf"
              download
              className="inline-block bg-sadrc-orange text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
            >
              Download Constitution (PDF)
            </a>
          </div>
          
          <div className="space-y-6">
            <p>
              The constitution covers important aspects of our club including:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Club objectives and aims</li>
              <li>Membership categories and fees</li>
              <li>Committee structure and roles</li>
              <li>Annual General Meeting procedures</li>
              <li>Club rules and regulations</li>
              <li>Financial management</li>
            </ul>
            <p>
              If you have any questions about our constitution or club governance, 
              please contact our club secretary at{' '}
              <a
                className="text-sadrc-orange hover:text-orange-400"
                href="mailto:infosadrc@mail.com"
              >
                infosadrc@mail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
