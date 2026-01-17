'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Script from 'next/script';
import {
  Calendar,
  Clock,
  MapPin,
  User,
  Coins,
  Users,
  Phone,
  Mail,
  ExternalLink,
  Share2,
  Facebook,
  Twitter,
  Link2,
  ChevronRight,
  Download,
  CheckCircle,
  Star,
  Quote,
} from 'lucide-react';
import { mockEvents, getEventBySlug, categoryInfo } from '@/data/events';
import {
  formatEventDate,
  formatEventTime,
  isRegistrationOpen,
  isEventFull,
  getRegistrationStatus,
  isPastEvent,
  getDaysUntilEvent,
} from '@/lib/eventUtils';
import { Button } from '@/components/ui/Button';
import EventCard from '@/components/events/EventCard';

interface EventPageProps {
  params: {
    slug: string;
  };
}

export default function EventPage({ params }: EventPageProps) {
  const event = getEventBySlug(params.slug);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [registrationSubmitted, setRegistrationSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attendees: '1',
    message: '',
  });

  if (!event) {
    notFound();
  }

  const categoryStyle = categoryInfo[event.category];
  const registrationOpen = isRegistrationOpen(event);
  const eventFull = isEventFull(event);
  const isEventPast = isPastEvent(event);
  const daysUntil = getDaysUntilEvent(event);

  // Get related events (same category, excluding current event)
  const relatedEvents = mockEvents
    .filter((e) => e.category === event.category && e.id !== event.id && !isPastEvent(e))
    .slice(0, 3);

  // Share functionality
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `Check out ${event.title} at Friends Connection Baptist Church!`;

  const handleShare = (platform: string) => {
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedText = encodeURIComponent(shareText);

    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(shareUrl);
        alert('Link copied to clipboard!');
        break;
    }
    setShowShareMenu(false);
  };

  // Add to Calendar functionality
  const handleAddToCalendar = () => {
    const startDate = typeof event.startDate === 'string' 
      ? new Date(event.startDate) 
      : event.startDate;
    const endDate = event.endDate 
      ? (typeof event.endDate === 'string' ? new Date(event.endDate) : event.endDate)
      : startDate;

    // Format dates for ICS file
    const formatICSDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Friends Connection Baptist Church//Events//EN
BEGIN:VEVENT
UID:${event.id}@friendsconnection.org
DTSTAMP:${formatICSDate(new Date())}
DTSTART:${formatICSDate(startDate)}
DTEND:${formatICSDate(endDate)}
SUMMARY:${event.title}
DESCRIPTION:${event.description.replace(/\n/g, '\\n')}
LOCATION:${event.location.name}, ${event.location.address}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${event.slug}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Registration form handler
  const handleRegistrationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to an API
    console.log('Registration submitted:', formData);
    setRegistrationSubmitted(true);
    setTimeout(() => {
      setRegistrationSubmitted(false);
      setFormData({ name: '', email: '', phone: '', attendees: '1', message: '' });
    }, 5000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Generate JSON-LD structured data for SEO
  const generateEventSchema = () => {
    const startDate = typeof event.startDate === 'string' 
      ? new Date(event.startDate) 
      : event.startDate;
    const endDate = event.endDate 
      ? (typeof event.endDate === 'string' ? new Date(event.endDate) : event.endDate)
      : startDate;

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: event.title,
      description: event.description,
      image: event.image,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: event.location.isVirtual 
        ? 'https://schema.org/OnlineEventAttendanceMode'
        : 'https://schema.org/OfflineEventAttendanceMode',
      location: event.location.isVirtual ? {
        '@type': 'VirtualLocation',
        url: event.location.virtualLink || 'https://friendsconnection.org/events/' + event.slug,
      } : {
        '@type': 'Place',
        name: event.location.name,
        address: {
          '@type': 'PostalAddress',
          streetAddress: event.location.address,
          addressLocality: event.location.city,
          addressRegion: event.location.state,
          postalCode: event.location.zipCode,
          addressCountry: 'US',
        },
      },
      organizer: {
        '@type': 'Organization',
        name: 'Friends Connection Baptist Church',
        url: 'https://friendsconnection.org',
      },
      ...(event.registration && event.registration.cost !== undefined && {
        offers: {
          '@type': 'Offer',
          price: event.registration.cost,
          priceCurrency: 'PHP',
          availability: registrationOpen && !eventFull 
            ? 'https://schema.org/InStock' 
            : 'https://schema.org/SoldOut',
          url: 'https://friendsconnection.org/events/' + event.slug,
        },
      }),
      ...(event.speaker && {
        performer: {
          '@type': 'Person',
          name: event.speaker.name,
          jobTitle: event.speaker.title,
        },
      }),
    };

    return schema;
  };

  // Update page title dynamically
  useEffect(() => {
    document.title = `${event.title} | Friends Connection Baptist Church`;
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', event.shortDescription || event.description.substring(0, 160));
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = event.shortDescription || event.description.substring(0, 160);
      document.head.appendChild(meta);
    }
  }, [event]);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script
        id="event-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateEventSchema()),
        }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb Navigation */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-gray-500 hover:text-gray-700">
                Home
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <Link href="/events" className="text-gray-500 hover:text-gray-700">
                Events
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-gray-900 font-medium">{event.title}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section with Image */}
        <div className="relative h-96 bg-gray-900">
          <Image
            src={event.image}
            alt={event.imageAlt || event.title}
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-7xl mx-auto">
              {/* Category Badge */}
              <span
                className={`inline-flex items-center gap-1 px-4 py-2 ${categoryStyle.bgColor} ${categoryStyle.color} text-sm font-semibold rounded-full mb-4`}
              >
                {categoryStyle.icon} {categoryStyle.label}
              </span>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {event.title}
              </h1>

              {/* Quick Info */}
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                  <Calendar className="w-4 h-4" />
                  <span>{formatEventDate(event.startDate, event.endDate, true)}</span>
                </div>
                {event.startTime && (
                  <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                    <Clock className="w-4 h-4" />
                    <span>{formatEventTime(event.startTime, event.endTime)}</span>
                  </div>
                )}
                <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                  <MapPin className="w-4 h-4" />
                  <span>
                    {event.location.isVirtual ? 'Virtual Event' : event.location.city}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Event Description */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Event</h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {event.description}
                </p>
              </div>

              {/* Event Details */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Event Details</h2>
                <div className="space-y-4">
                  {/* Date & Time */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Date & Time</h3>
                      <p className="text-gray-600">{formatEventDate(event.startDate, event.endDate, false)}</p>
                      {event.startTime && (
                        <p className="text-gray-600">{formatEventTime(event.startTime, event.endTime)}</p>
                      )}
                      {daysUntil !== null && daysUntil >= 0 && (
                        <p className="text-sm text-blue-600 mt-1">
                          {daysUntil === 0 ? 'Today!' : `${daysUntil} days away`}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                      <p className="text-gray-900">{event.location.name}</p>
                      {!event.location.isVirtual && (
                        <>
                          <p className="text-gray-600">{event.location.address}</p>
                          <p className="text-gray-600">
                            {event.location.city}, {event.location.state} {event.location.zipCode}
                          </p>
                          {event.location.room && (
                            <p className="text-sm text-gray-500 mt-1">Room: {event.location.room}</p>
                          )}
                        </>
                      )}
                      {event.location.isVirtual && event.location.virtualLink && (
                        <a
                          href={event.location.virtualLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 flex items-center gap-1 mt-1"
                        >
                          Join Virtual Event <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Speaker/Host */}
                  {event.speaker && (
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <User className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Speaker</h3>
                        <p className="text-gray-900">{event.speaker.name}</p>
                        <p className="text-sm text-gray-600">{event.speaker.title}</p>
                        {event.speaker.bio && (
                          <p className="text-sm text-gray-600 mt-2">{event.speaker.bio}</p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Organizer */}
                  {event.organizer && (
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Users className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Organized By</h3>
                        <p className="text-gray-600">{event.organizer}</p>
                      </div>
                    </div>
                  )}

                  {/* Cost */}
                  {event.registration && event.registration.cost !== undefined && (
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                        <Coins className="w-6 h-6 text-pink-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Cost</h3>
                        <p className="text-2xl font-bold text-gray-900">
                          {event.registration.cost === 0 ? 'Free' : `₱${event.registration.cost}`}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Additional Sections */}
              {event.agenda && event.agenda.length > 0 && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Agenda</h2>
                  <ul className="space-y-2">
                    {event.agenda.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">
                          {index + 1}
                        </span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {event.highlights && event.highlights.length > 0 && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Highlights</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {event.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {event.requirements && event.requirements.length > 0 && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Bring</h2>
                  <ul className="space-y-2">
                    {event.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Testimonials for Past Events */}
              {isEventPast && event.testimonials && event.testimonials.length > 0 && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">What People Said</h2>
                  <div className="space-y-4">
                    {event.testimonials.map((testimonial, index) => (
                      <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <Quote className="w-6 h-6 text-gray-300 mb-2" />
                        <p className="text-gray-700 italic mb-2">&quot;{testimonial.comment}&quot;</p>
                        <p className="text-sm font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-xs text-gray-500">{testimonial.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Action Buttons */}
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
                <div className="space-y-4">
                  {/* Registration Status */}
                  {!isEventPast && event.registration?.required && (
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm font-semibold text-blue-900 mb-1">
                        {getRegistrationStatus(event)}
                      </p>
                      {event.registration.maxAttendees && (
                        <div className="mt-2">
                          <div className="w-full bg-blue-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full transition-all"
                              style={{
                                width: `${((event.registration.currentAttendees || 0) / event.registration.maxAttendees) * 100}%`,
                              }}
                            />
                          </div>
                          <p className="text-xs text-blue-700 mt-1">
                            {event.registration.currentAttendees || 0} / {event.registration.maxAttendees} spots filled
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Share Button */}
                  <div className="relative">
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => setShowShareMenu(!showShareMenu)}
                    >
                      <Share2 className="w-4 h-4 mr-2" />
                      Share Event
                    </Button>
                    
                    {showShareMenu && (
                      <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                        <button
                          onClick={() => handleShare('facebook')}
                          className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2"
                        >
                          <Facebook className="w-4 h-4" />
                          Facebook
                        </button>
                        <button
                          onClick={() => handleShare('twitter')}
                          className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2"
                        >
                          <Twitter className="w-4 h-4" />
                          Twitter
                        </button>
                        <button
                          onClick={() => handleShare('copy')}
                          className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2"
                        >
                          <Link2 className="w-4 h-4" />
                          Copy Link
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Add to Calendar */}
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={handleAddToCalendar}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Add to Calendar
                  </Button>

                  {/* Contact Info */}
                  {event.registration && (
                    <div className="pt-4 border-t border-gray-200">
                      <h3 className="font-semibold text-gray-900 mb-3">Questions?</h3>
                      <div className="space-y-2 text-sm">
                        {event.registration.contactEmail && (
                          <a
                            href={`mailto:${event.registration.contactEmail}`}
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                          >
                            <Mail className="w-4 h-4" />
                            {event.registration.contactEmail}
                          </a>
                        )}
                        {event.registration.contactPhone && (
                          <a
                            href={`tel:${event.registration.contactPhone}`}
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                          >
                            <Phone className="w-4 h-4" />
                            {event.registration.contactPhone}
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Registration Form */}
              {!isEventPast && event.registration?.required && registrationOpen && !eventFull && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Register Now</h3>
                  
                  {registrationSubmitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                      <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-2" />
                      <p className="text-green-800 font-semibold">Registration Successful!</p>
                      <p className="text-sm text-green-600 mt-1">
                        You'll receive a confirmation email shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleRegistrationSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label htmlFor="attendees" className="block text-sm font-medium text-gray-700 mb-1">
                          Number of Attendees *
                        </label>
                        <select
                          id="attendees"
                          name="attendees"
                          required
                          value={formData.attendees}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <option key={num} value={num}>
                              {num} {num === 1 ? 'Person' : 'People'}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Message (Optional)
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={3}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Any questions or special requests?"
                        />
                      </div>

                      <Button type="submit" variant="gradient" className="w-full">
                        Submit Registration
                      </Button>

                      {event.registration.maxAttendees && (
                        <p className="text-xs text-gray-500 text-center">
                          {event.registration.currentAttendees || 0} / {event.registration.maxAttendees} spots filled
                        </p>
                      )}
                    </form>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Related Events */}
          {relatedEvents.length > 0 && (
            <div className="mt-16">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-900">Related Events</h2>
                <Link href="/events">
                  <Button variant="outline">
                    View All Events
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedEvents.map((relatedEvent) => (
                  <EventCard key={relatedEvent.id} event={relatedEvent} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
