'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, Users, Image as ImageIcon, Star, Quote } from 'lucide-react';
import { Event } from '@/types/event';
import { formatEventDate } from '@/lib/eventUtils';
import { categoryInfo } from '@/data/events';
import { Button } from '@/components/ui/Button';

interface PastEventCardProps {
  event: Event;
  className?: string;
}

const PastEventCard = ({ event, className = '' }: PastEventCardProps) => {
  const categoryStyle = categoryInfo[event.category];
  const hasGallery = event.gallery && event.gallery.length > 0;
  const galleryCount = event.gallery?.length || 0;

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Image Section */}
        <div className="relative h-64 md:h-auto md:col-span-1">
          <Image
            src={event.image}
            alt={event.imageAlt || event.title}
            fill
            className="object-cover"
          />
          {/* Completed Badge */}
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 bg-gray-600 text-white text-xs font-semibold rounded-full shadow-lg">
              Completed
            </span>
          </div>
          {/* Gallery Indicator */}
          {hasGallery && (
            <div className="absolute bottom-3 left-3 right-3">
              <div className="bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center justify-center gap-2 text-white text-sm">
                <ImageIcon className="w-4 h-4" />
                <span>{galleryCount} Photo{galleryCount !== 1 ? 's' : ''}</span>
              </div>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-6 md:col-span-2">
          {/* Category Badge */}
          <span
            className={`inline-flex items-center gap-1 px-3 py-1 ${categoryStyle.bgColor} ${categoryStyle.color} text-xs font-semibold rounded-full mb-3`}
          >
            {categoryStyle.icon} {categoryStyle.label}
          </span>

          {/* Title */}
          <Link href={`/events/${event.slug}`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
              {event.title}
            </h3>
          </Link>

          {/* Event Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{formatEventDate(event.startDate, event.endDate, true)}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{event.location.name}</span>
            </div>
            {event.registration?.currentAttendees && (
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{event.registration.currentAttendees} Attendees</span>
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-4 line-clamp-2">
            {event.shortDescription || event.description}
          </p>

          {/* Highlights */}
          {event.highlights && event.highlights.length > 0 && (
            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-900 mb-2">Event Highlights:</p>
              <ul className="space-y-1">
                {event.highlights.slice(0, 3).map((highlight, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Photo Gallery Preview */}
          {hasGallery && event.gallery && event.gallery.length > 0 && (
            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-900 mb-2">Photo Gallery:</p>
              <div className="grid grid-cols-4 gap-2">
                {event.gallery.slice(0, 4).map((photo, index) => (
                  <div key={index} className="relative h-20 rounded-lg overflow-hidden group">
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

          {/* Testimonials */}
          {event.testimonials && event.testimonials.length > 0 && (
            <div className="mb-4 bg-blue-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Quote className="w-4 h-4 text-blue-600" />
                <p className="text-sm font-semibold text-gray-900">What Attendees Said:</p>
              </div>
              {event.testimonials.slice(0, 2).map((testimonial, index) => (
                <div key={index} className={`${index > 0 ? 'mt-3 pt-3 border-t border-blue-200' : ''}`}>
                  <div className="flex items-start gap-2 mb-1">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{testimonial.name}</p>
                      {testimonial.role && (
                        <p className="text-xs text-gray-600">{testimonial.role}</p>
                      )}
                    </div>
                    {testimonial.rating && (
                      <div className="flex gap-0.5">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-gray-700 italic">"{testimonial.comment}"</p>
                </div>
              ))}
            </div>
          )}

          {/* View Recap Button */}
          <Link href={`/events/${event.slug}`}>
            <Button variant="outline" className="w-full md:w-auto">
              View Event Recap
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PastEventCard;
