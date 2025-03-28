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

  const isActive = (href: string) => {
    if (href === '/') return pathname === href;
    return pathname.startsWith(href);
  };

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('/#')) {
      const sectionId = href.substring(2);
      if (pathname === '/') {
        // If we're on the home page, just scroll
        scrollToSection(sectionId);
      } else {
        // If we're on another page, navigate home first then scroll
        router.push('/');
        // Wait for navigation to complete before scrolling
        setTimeout(() => {
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }, [scrollToSection, pathname, router]);

  return (
    <nav className="bg-[#121212] fixed w-full z-50 top-0 left-0 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/locations/Logo.avif"
                alt="SADRC Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((link) => (
              link.href.startsWith('/#') ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`${
                    isActive(link.href)
                      ? 'text-sadrc-orange relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-sadrc-orange after:rounded-full'
                      : 'text-gray-300 hover:text-sadrc-orange relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-sadrc-orange after:rounded-full after:transition-all after:duration-300 hover:after:w-full'
                  } transition-colors duration-200`}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${
                    isActive(link.href)
                      ? 'text-sadrc-orange relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-sadrc-orange after:rounded-full'
                      : 'text-gray-300 hover:text-sadrc-orange relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-sadrc-orange after:rounded-full after:transition-all after:duration-300 hover:after:w-full'
                  } transition-colors duration-200`}
                >
                  {link.name}
                </Link>
              )
            ))}
            <a
              href="https://clubshop.fastraxrunning.com/product-category/skegness_and_district_rc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-white after:rounded-full after:transition-all after:duration-300 hover:after:w-full"
            >
              Club Shop
            </a>
            <Link
              href="/join"
              className="bg-sadrc-orange text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all duration-200 font-semibold hover:shadow-lg hover:shadow-orange-500/20 hover:scale-105"
            >
              Join Us
            </Link>
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
            link.href.startsWith('/#') ? (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`${
                  isActive(link.href)
                    ? 'text-sadrc-orange'
                    : 'text-gray-300 hover:text-sadrc-orange'
                } block px-3 py-2 text-base font-medium transition-colors duration-200`}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  isActive(link.href)
                    ? 'text-sadrc-orange'
                    : 'text-gray-300 hover:text-sadrc-orange'
                } block px-3 py-2 text-base font-medium transition-colors duration-200`}
              >
                {link.name}
              </Link>
            )
          ))}
          <a
            href="https://clubshop.fastraxrunning.com/product-category/skegness_and_district_rc/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
          >
            Club Shop
          </a>
          <Link
            href="/join"
            className="bg-sadrc-orange text-white block px-3 py-2 rounded-lg hover:bg-opacity-90 transition-all duration-200 font-semibold mt-2 mx-2"
          >
            Join Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
