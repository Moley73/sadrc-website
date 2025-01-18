'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRouter, usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/#events-section', label: 'Events' },
  { href: '/join', label: 'Join Us', highlight: true }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Memoize the isActive function
  const isActive = useCallback((path: string) => {
    if (path === '/' && pathname !== '/') {
      return false;
    }
    return pathname?.startsWith(path);
  }, [pathname]);

  const handleNavClick = useCallback((e: React.MouseEvent, href: string) => {
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
  }, [pathname, router]);

  return (
    <nav 
      className="fixed w-full bg-sadrc-black/95 backdrop-blur-sm z-50 border-b border-gray-800"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/" 
            className="flex items-center"
            aria-label="SADRC Home"
          >
            <Image
              src="/images/locations/Logo.avif"
              alt="SADRC Logo"
              width={40}
              height={40}
              className="mr-3"
              priority
            />
            <span className="self-center text-2xl font-bold whitespace-nowrap text-sadrc-orange">SADRC</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" role="menubar">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.href)
                    ? 'text-sadrc-orange'
                    : 'text-gray-300 hover:text-sadrc-orange'
                } ${
                  link.highlight
                    ? 'px-4 py-2 bg-sadrc-orange text-white rounded-lg hover:bg-opacity-90 hover:text-white'
                    : ''
                }`}
                onClick={(e) => handleNavClick(e, link.href)}
                role="menuitem"
                aria-current={isActive(link.href) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-sadrc-orange"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? (
              <FaTimes className="h-6 w-6" aria-hidden="true" />
            ) : (
              <FaBars className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div 
            className="md:hidden py-4"
            id="mobile-menu"
            role="menu"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block py-2 text-base font-medium ${
                  isActive(link.href)
                    ? 'text-sadrc-orange'
                    : 'text-gray-300 hover:text-sadrc-orange'
                } ${
                  link.highlight
                    ? 'mt-4 px-4 py-2 bg-sadrc-orange text-white rounded-lg hover:bg-opacity-90 text-center hover:text-white'
                    : ''
                }`}
                role="menuitem"
                aria-current={isActive(link.href) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
