'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRouter, usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Events', href: '/#events-section' }
  ];

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (href === '/#events-section') {
      if (pathname !== '/') {
        router.push('/');
        // Wait for navigation to complete before scrolling
        setTimeout(() => {
          const eventsSection = document.getElementById('events-section');
          if (eventsSection) {
            eventsSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const eventsSection = document.getElementById('events-section');
        if (eventsSection) {
          eventsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      router.push(href);
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-sadrc-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/locations/Logo.avif"
              alt="SADRC Logo"
              width={40}
              height={40}
              className="mr-3"
            />
            <span className="self-center text-2xl font-bold whitespace-nowrap text-sadrc-orange">SADRC</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-sadrc-orange transition-colors cursor-pointer"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-sadrc-orange"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-sadrc-black/95 backdrop-blur-sm border-b border-gray-800">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-gray-300 hover:text-sadrc-orange transition-colors cursor-pointer"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
