'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  User,
  DollarSign,
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

  return (
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
            <div className="flex flex-wrap items-center gap-6 text-white text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{formatEventDate(event.startDate, event.endDate, true)}</span>
              </div>
              {event.startTime && (
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{formatEventTime(event.startTime, event.endTime)}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{event.location.name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            {/* Status Banner */}
            {!isEventPast && daysUntil <= 7 && (
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-blue-800">
                      {daysUntil === 0 && 'This event is happening today!'}
                      {daysUntil === 1 && 'This event is tomorrow!'}
                      {daysUntil > 1 && `This event is in ${daysUntil} days!`}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {isEventPast && (
              <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-lg">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-gray-600 mr-3" />
                  <p className="text-sm font-medium text-gray-700">
                    This event has concluded. Thank you to all who attended!
                  </p>
                </div>
              </div>
            )}

            {/* Description */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Event</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {event.description}
                </p>
              </div>
            </div>

            {/* Highlights */}
            {event.highlights && event.highlights.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Event Highlights</h2>
                <ul className="space-y-2">
                  {event.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Agenda */}
            {event.agenda && event.agenda.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Event Schedule</h2>
                <div className="space-y-3">
                  {event.agenda.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4" />
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Requirements */}
            {event.requirements && event.requirements.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Bring</h2>
                <ul className="space-y-2">
                  {event.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 mr-3" />
                      <span className="text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Photo Gallery for Past Events */}
            {isEventPast && event.gallery && event.gallery.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Event Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {event.gallery.map((photo, index) => (
                    <div key={index} className="relative h-48 rounded-lg overflow-hidden group">
                      <Image
                        src={photo}
                        alt={`${event.title} - Photo ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Testimonials for Past Events */}
            {isEventPast && event.testimonials && event.testimonials.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Quote className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Attendee Testimonials</h2>
                </div>
                <div className="space-y-6">
                  {event.testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-blue-50 rounded-lg p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p className="font-semibold text-gray-900 text-lg">{testimonial.name}</p>
                          {testimonial.role && (
                            <p className="text-sm text-gray-600">{testimonial.role}</p>
                          )}
                        </div>
                        {testimonial.rating && (
                          <div className="flex gap-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        )}
                      </div>
                      <p className="text-gray-700 italic leading-relaxed">
                        "{testimonial.comment}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar - 1 column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Event Details Card */}
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Event Details</h3>
              
              <div className="space-y-4">
                {/* Date & Time */}
                <div className="flex items-start">
                  <Calendar className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Date & Time</p>
                    <p className="text-sm text-gray-600">
                      {formatEventDate(event.startDate, event.endDate, true)}
                    </p>
                    {event.startTime && (
                      <p className="text-sm text-gray-600">
                        {formatEventTime(event.startTime, event.endTime)}
                      </p>
                    )}
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-sm text-gray-600">{event.location.name}</p>
                    {!event.location.isVirtual ? (
                      <>
                        <p className="text-sm text-gray-600">{event.location.address}</p>
                        <p className="text-sm text-gray-600">
                          {event.location.city}, {event.location.state} {event.location.zipCode}
                        </p>
                        {event.location.room && (
                          <p className="text-sm text-gray-600 mt-1">Room: {event.location.room}</p>
                        )}
                      </>
                    ) : (
                      <div className="mt-2">
                        <span className="text-sm text-blue-600 font-medium">Virtual Event</span>
                        {event.location.virtualLink && (
                          <a
                            href={event.location.virtualLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-600 hover:underline flex items-center gap-1 mt-1"
                          >
                            Join Online <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Speaker */}
                {event.speaker && (
                  <div className="flex items-start">
                    <User className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Speaker</p>
                      <p className="text-sm text-gray-600">{event.speaker.name}</p>
                      {event.speaker.title && (
                        <p className="text-sm text-gray-500">{event.speaker.title}</p>
                      )}
                    </div>
                  </div>
                )}

                {/* Organizer */}
                {event.organizer && (
                  <div className="flex items-start">
                    <Users className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Organizer</p>
                      <p className="text-sm text-gray-600">{event.organizer}</p>
                    </div>
                  </div>
                )}

                {/* Cost */}
                {event.registration && event.registration.cost !== undefined && (
                  <div className="flex items-start">
                    <DollarSign className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Cost</p>
                      <p className="text-sm text-gray-600">
                        {event.registration.cost === 0 ? 'Free Event' : `$${event.registration.cost}`}
                      </p>
                    </div>
                  </div>
                )}

                {/* Contact */}
                {event.registration && (event.registration.contactEmail || event.registration.contactPhone) && (
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <p className="font-medium text-gray-900 mb-2">Contact Information</p>
                    {event.registration.contactEmail && (
                      <a
                        href={`mailto:${event.registration.contactEmail}`}
                        className="flex items-center gap-2 text-sm text-blue-600 hover:underline"
                      >
                        <Mail className="w-4 h-4" />
                        {event.registration.contactEmail}
                      </a>
                    )}
                    {event.registration.contactPhone && (
                      <a
                        href={`tel:${event.registration.contactPhone}`}
                        className="flex items-center gap-2 text-sm text-blue-600 hover:underline mt-1"
                      >
                        <Phone className="w-4 h-4" />
                        {event.registration.contactPhone}
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              {!isEventPast && (
                <div className="mt-6 space-y-3">
                  <Button
                    variant="gradient"
                    className="w-full"
                    onClick={handleAddToCalendar}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Add to Calendar
                  </Button>

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
                      <div className="absolute top-full mt-2 left-0 right-0 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10">
                        <button
                          onClick={() => handleShare('facebook')}
                          className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                        >
                          <Facebook className="w-4 h-4" />
                          Facebook
                        </button>
                        <button
                          onClick={() => handleShare('twitter')}
                          className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                        >
                          <Twitter className="w-4 h-4" />
                          Twitter
                        </button>
                        <button
                          onClick={() => handleShare('copy')}
                          className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                        >
                          <Link2 className="w-4 h-4" />
                          Copy Link
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Registration Form */}
            {!isEventPast && event.registration?.required && registrationOpen && !eventFull && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Register for Event</h3>
                
                {registrationSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 text-green-700">
                      <CheckCircle className="w-5 h-5" />
                      <p className="font-medium">Registration Submitted!</p>
                    </div>
                    <p className="text-sm text-green-600 mt-2">
                      We'll send a confirmation email shortly.
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

            {/* Registration Status Messages */}
            {!isEventPast && event.registration?.required && eventFull && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-sm font-medium text-red-800">This event is currently full.</p>
                <p className="text-xs text-red-600 mt-1">Please contact us to be added to the waitlist.</p>
              </div>
            )}

            {!isEventPast && event.registration?.required && !registrationOpen && !eventFull && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm font-medium text-yellow-800">Registration has closed.</p>
                <p className="text-xs text-yellow-600 mt-1">Please contact us for more information.</p>
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
  );
}
