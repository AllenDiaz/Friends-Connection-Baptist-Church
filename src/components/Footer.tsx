'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Calendar, ArrowRight } from 'lucide-react';
import { mockEvents } from '@/data/events';
import { getNextUpcomingEvents, formatEventDate } from '@/lib/eventUtils';

const Footer = () => {
  const churches = [
    'Living Water Baptist Church',
    'Solid Rocks Baptist Church',
    'Faith Community Church',
    'Grace Covenant Church',
    'New Hope Fellowship'
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Churches', href: '/churches' },
    { name: 'Ministries', href: '/ministries' },
    { name: 'Leadership', href: '/leadership' },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '/contact' }
  ];

  // Get next 3 upcoming events
  const upcomingEvents = getNextUpcomingEvents(mockEvents, 3);

  return (
    <footer className="bg-gray-900 text-white">
      {/* Upcoming Events Section */}
      {upcomingEvents.length > 0 && (
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-6 h-6" />
                  <h3 className="text-2xl font-bold">Upcoming Events</h3>
                </div>
                <p className="text-blue-100 text-sm">Join us for worship, fellowship, and community</p>
              </div>
              <Link
                href="/events"
                className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 transform flex items-center gap-2 shadow-lg hover:shadow-xl group"
              >
                View All Events
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {upcomingEvents.map((event) => (
                <Link
                  key={event.id}
                  href={`/events/${event.slug}`}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 transform group"
                >
                  <p className="text-sm text-blue-100 mb-1 flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    {event.isTBA ? 'TBA' : formatEventDate(event.startDate, event.endDate, false)}
                  </p>
                  <h4 className="font-semibold text-white mb-1 group-hover:text-blue-100 transition-colors line-clamp-1">
                    {event.title}
                  </h4>
                  {event.startTime && !event.isTBA && (
                    <p className="text-sm text-blue-200">{event.startTime}</p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Ministry Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">✝</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Friends Connection</h3>
                <p className="text-sm text-gray-300">Ministry</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm">
              Work  Integrity  Equality, fellowship, and service across our network of churches.
            </p>
            
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 transform">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 transform">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 transform">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-all duration-300 text-sm hover:pl-2 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Churches */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Churches</h4>
            <ul className="space-y-2">
              {churches.map((church) => (
                <li key={church}>
                  <Link 
                    href={`/churches/${church.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-300 hover:text-blue-400 transition-all duration-300 text-sm hover:pl-2 inline-block"
                  >
                    {church}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    123 Ministry Way<br />
                    Community City, CC 12345
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">(555) 123-4567</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">fcfjc.ministries@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 Friends Connection Ministry. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-105 transform inline-block">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-105 transform inline-block">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;