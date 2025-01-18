'use client';

import { Fragment, useState, useCallback } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Events', href: '/#events' },
  { name: 'Locations', href: '/#locations' },
  { name: 'Contact', href: '/#footer' },
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  }, []);

  const scrollToFooter = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('/#')) {
      const sectionId = href.substring(2);
      if (sectionId === 'footer') {
        scrollToFooter(e);
      } else {
        scrollToSection(sectionId);
      }
    } else {
      router.push(href as any); // Type assertion to fix the error
    }
    setIsOpen(false);
  }, [router, scrollToSection, scrollToFooter]);

  const isActive = useCallback((path: string) => {
    if (path === '/') {
      return pathname === '/';
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
                src="/images/locations/Logo.avif"
                alt="SADRC Logo"
                width={50}
                height={50}
                unoptimized
                className="h-10 w-auto"
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
              {isOpen ? <XMarkIcon size={24} /> : <Bars3Icon size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`${
                  isActive(link.href)
                    ? 'text-sadrc-orange'
                    : 'text-gray-300 hover:text-sadrc-orange'
                } transition-colors duration-200`}
                role="menuitem"
                aria-current={isActive(link.href) ? 'page' : undefined}
              >
                {link.name}
              </a>
            ))}
            <Link
              href="/constitution"
              className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                pathname === '/constitution' ? 'bg-sadrc-orange text-white' : ''
              }`}
            >
              Constitution
            </Link>
            <a
              href="https://clubshop.fastraxrunning.com/product-category/skegness_and_district_rc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Club Shop
            </a>
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
              onClick={(e) => handleNavClick(e, link.href)}
              className={`${
                isActive(link.href)
                  ? 'text-sadrc-orange'
                  : 'text-gray-300 hover:text-sadrc-orange'
              } block px-3 py-2 text-base transition-colors duration-200`}
              role="menuitem"
              aria-current={isActive(link.href) ? 'page' : undefined}
            >
              {link.name}
            </a>
          ))}
          <Link
            href="/constitution"
            className={`text-gray-300 hover:text-white block px-3 py-2 text-base rounded-md text-sm font-medium ${
              pathname === '/constitution' ? 'bg-sadrc-orange text-white' : ''
            }`}
          >
            Constitution
          </Link>
          <a
            href="https://clubshop.fastraxrunning.com/product-category/skegness_and_district_rc/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white block px-3 py-2 text-base rounded-md text-sm font-medium"
          >
            Club Shop
          </a>
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
