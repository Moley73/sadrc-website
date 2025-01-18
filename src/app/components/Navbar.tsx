'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRouter, usePathname } from 'next/navigation';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Events', href: '/#events' },
  { name: 'Contact', href: '/#footer' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const scrollToSection = useCallback((sectionId: string) => {
    if (pathname !== '/') {
      // If we're not on the home page, navigate home first
      const navigate = async () => {
        await router.push('/');
        setTimeout(() => {
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      };
      navigate();
    } else {
      // If we're already on the home page, just scroll
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, router]);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('/#')) {
      const sectionId = href.split('#')[1];
      scrollToSection(sectionId);
    } else {
      router.push(href);
    }
    setIsOpen(false);
  }, [scrollToSection]);

  const isActive = useCallback((path: string) => {
    if (path === '/' && pathname !== '/') {
      return false;
    }
    if (path.startsWith('/#')) {
      return false;
    }
    return pathname?.startsWith(path);
  }, [pathname]);

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
              alt="Skegness and District Running Club Logo"
              width={50}
              height={50}
              unoptimized
              className="h-12 w-auto"
            />
            <span className="self-center text-2xl font-bold whitespace-nowrap text-sadrc-orange">SADRC</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" role="menubar">
            {navigation.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.href)
                    ? 'text-sadrc-orange'
                    : 'text-gray-300 hover:text-sadrc-orange'
                }`}
                role="menuitem"
                aria-current={isActive(link.href) ? 'page' : undefined}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
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
            {navigation.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block py-2 text-base font-medium ${
                  isActive(link.href)
                    ? 'text-sadrc-orange'
                    : 'text-gray-300 hover:text-sadrc-orange'
                }`}
                role="menuitem"
                aria-current={isActive(link.href) ? 'page' : undefined}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
