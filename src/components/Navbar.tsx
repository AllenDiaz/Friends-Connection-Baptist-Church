'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Our Churches', 
      href: '/churches',
      dropdown: [
        { name: 'International Baptist Church of Pinellas INC', href: '/churches/international-baptist-pinellas' },
        { name: 'Living Water Baptist Church of Nueva Ecija', href: '/churches/living-water-baptist' },
        { name: 'Friendship Gospel Bible Baptist Church', href: '/churches/friendship-gospel-tabuating' },
        { name: 'Friendship Gospel Baptist Church Mission of Bongabon', href: '/churches/friendship-gospel-bongabon' },
        { name: 'Friendship Gospel Baptist Mission of Gabaldon', href: '/churches/friendship-gospel-gabaldon' },
      ]
    },
    { name: 'Ministries', href: '/ministries' },
    { name: 'Events', href: '/events' },
    { name: 'Leadership', href: '/leadership' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Church Name */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Friends Connection Ministry Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
            </Link>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900">Friends Connection Ministry</h1>
              <p className="text-xs text-gray-600">Work  Integrity  Equality</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-300 hover:scale-105">
                        {item.name}
                        <ChevronDownIcon className="ml-1 h-4 w-4 transition-transform duration-300" />
                      </button>
                      {dropdownOpen && (
                        <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50 animate-fadeIn origin-top">
                          <div className="py-1">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 hover:pl-6"
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                            <Link
                              href="/churches"
                              className="block px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 border-t border-gray-200 transition-all duration-200 hover:pl-6"
                            >
                              View All Churches →
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 relative group"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="hidden lg:block">
            <Link
              href="/churches"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 transform"
            >
              Church
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 p-2 rounded-md transition-all duration-300 hover:scale-110"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6 transition-transform duration-300 rotate-90" />
              ) : (
                <Bars3Icon className="h-6 w-6 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden animate-slideDown">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left flex items-center justify-between transition-colors duration-200"
                    >
                      {item.name}
                      <ChevronDownIcon className="h-4 w-4" />
                    </button>
                    {dropdownOpen && (
                      <div className="pl-6 space-y-1">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="text-gray-600 hover:text-blue-600 block px-3 py-2 text-sm transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                        <Link
                          href="/churches"
                          className="text-blue-600 font-semibold hover:text-blue-700 block px-3 py-2 text-sm transition-colors duration-200 border-t border-gray-200 mt-2 pt-2"
                          onClick={() => setIsOpen(false)}
                        >
                          View All Churches →
                        </Link>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-all duration-300 hover:pl-5 hover:bg-blue-50 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link
                href="/churches"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white block px-3 py-2 rounded-md text-base font-medium text-center transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Find Your Church
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;