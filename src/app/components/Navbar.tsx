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
  { name: 'Locations', href: '/#locations' },
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
    if (path === '/') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  }, [pathname]);

  return (
    <nav className="bg-[#1a1a1a] fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/sadrc-logo.png"
                alt="SADRC Logo"
                width={40}
                height={40}
                className="h-8 w-auto"
              />
              <span className="ml-2 text-white font-bold text-lg">SADRC</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${
                  isActive(link.href)
                    ? 'text-sadrc-orange'
                    : 'text-gray-300 hover:text-sadrc-orange'
                } transition-colors duration-200`}
                role="menuitem"
                aria-current={isActive(link.href) ? 'page' : undefined}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/join"
              className="bg-sadrc-orange text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all duration-200 font-semibold"
            >
              Join Us
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden bg-[#1a1a1a] border-t border-gray-800`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigation.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${
                isActive(link.href)
                  ? 'text-sadrc-orange'
                  : 'text-gray-300 hover:text-sadrc-orange'
              } block px-3 py-2 text-base transition-colors duration-200`}
              role="menuitem"
              aria-current={isActive(link.href) ? 'page' : undefined}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/join"
            className="block px-3 py-2 mt-4 text-center bg-sadrc-orange text-white rounded-lg hover:bg-opacity-90 transition-all duration-200 font-semibold"
          >
            Join Us
          </a>
        </div>
      </div>
    </nav>
  );
}
