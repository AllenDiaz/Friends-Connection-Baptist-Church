'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Calendar, Clock, User, Coins, Users } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Event } from '@/types/event';
import { categoryInfo } from '@/data/events';
import {
  formatEventDate,
  formatEventTime,
  getEventStatusBadge,
  isRegistrationOpen,
  isEventFull,
  getDaysUntilEvent,
} from '@/lib/eventUtils';

interface EventCardProps {
  event: Event;
  className?: string;
  showFullDescription?: boolean;
}

const EventCard = ({ event, className = '', showFullDescription = false }: EventCardProps) => {
  const categoryStyle = categoryInfo[event.category];
  const statusBadge = getEventStatusBadge(event);
  const registrationOpen = isRegistrationOpen(event);
  const eventFull = isEventFull(event);
  const daysUntil = getDaysUntilEvent(event);
  const isPast = event.status === 'completed';

  return (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group ${className}`}
    >
      {/* Event Image */}
      <Link href={`/events/${event.slug}`} className="block relative h-48 overflow-hidden">
        <Image
          src={event.image}
          alt={event.imageAlt || event.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Status Badge Overlay */}
        <div className="absolute top-3 right-3 flex gap-2">
          {event.featured && !isPast && (
            <span className="px-3 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full shadow-lg">
              Featured
            </span>
          )}
          {daysUntil >= 0 && daysUntil <= 7 && !isPast && (
            <span className="px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full shadow-lg">
              {statusBadge}
            </span>
          )}
          {isPast && (
            <span className="px-3 py-1 bg-gray-500 text-white text-xs font-semibold rounded-full shadow-lg">
              Completed
            </span>
          )}
        </div>

        {/* Category Badge */}
        <div className="absolute bottom-3 left-3">
          <span
            className={`px-3 py-1 ${categoryStyle.bgColor} ${categoryStyle.color} text-xs font-semibold rounded-full shadow-md backdrop-blur-sm`}
          >
            {categoryStyle.icon} {categoryStyle.label}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <Link href={`/events/${event.slug}`}>
          <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors line-clamp-2">
            {event.title}
          </h3>
        </Link>

        {/* Description */}
        <p className={`text-gray-600 mb-4 ${showFullDescription ? '' : 'line-clamp-2'}`}>
          {event.shortDescription || event.description}
        </p>

        {/* Event Details */}
        <div className="space-y-2 mb-4">
          {/* Date */}
          <div className="flex items-start text-sm text-gray-700">
            <Calendar className="w-4 h-4 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
            <div>
              <p className="font-medium">
                {event.isTBA ? 'TBA' : formatEventDate(event.startDate, event.endDate, true)}
              </p>
              {event.startTime && !event.isTBA && (
                <p className="text-gray-600">
                  {formatEventTime(event.startTime, event.endTime)}
                </p>
              )}
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start text-sm text-gray-700">
            <MapPin className="w-4 h-4 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
            <div>
              <p className="font-medium">{event.location.name}</p>
              {!event.location.isVirtual && (
                <p className="text-gray-600">
                  {event.location.city}, {event.location.state}
                </p>
              )}
              {event.location.isVirtual && (
                <p className="text-blue-600">Virtual Event</p>
              )}
            </div>
          </div>

          {/* Speaker */}
          {event.speaker && (
            <div className="flex items-center text-sm text-gray-700">
              <User className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0" />
              <div>
                <span className="font-medium">{event.speaker.name}</span>
                {event.speaker.title && (
                  <span className="text-gray-600"> • {event.speaker.title}</span>
                )}
              </div>
            </div>
          )}

          {/* Cost */}
          {event.registration && event.registration.cost !== undefined && (
            <div className="flex items-center text-sm text-gray-700">
              <Coins className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0" />
              <span className="font-medium">
                {event.registration.cost === 0 ? 'Free Event' : `₱${event.registration.cost}`}
              </span>
            </div>
          )}

          {/* Attendance Info */}
          {event.registration?.maxAttendees && (
            <div className="flex items-center text-sm text-gray-700">
              <Users className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0" />
              <span>
                {event.registration.currentAttendees || 0} / {event.registration.maxAttendees} attendees
              </span>
              {eventFull && (
                <span className="ml-2 px-2 py-0.5 bg-red-100 text-red-700 text-xs font-semibold rounded">
                  Full
                </span>
              )}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-6">
          {/* Register Button - Only show for upcoming events with registration */}
          {!isPast && event.registration?.required && registrationOpen && !eventFull && (
            <Link href={`/events/${event.slug}`} className="flex-1">
              <Button variant="gradient" className="w-full">
                Register Now
              </Button>
            </Link>
          )}

          {/* Event Full Button */}
          {!isPast && event.registration?.required && eventFull && (
            <Button variant="outline" className="flex-1" disabled>
              Event Full
            </Button>
          )}

          {/* Registration Closed */}
          {!isPast && event.registration?.required && !registrationOpen && !eventFull && (
            <Button variant="outline" className="flex-1" disabled>
              Registration Closed
            </Button>
          )}

          {/* View Details Button */}
          <Link href={`/events/${event.slug}`} className={event.registration?.required && !isPast ? 'flex-1' : 'w-full'}>
            <Button 
              variant={!isPast && event.registration?.required ? 'outline' : 'default'}
              className="w-full"
            >
              {isPast ? 'View Recap' : 'View Details'}
            </Button>
          </Link>
        </div>

        {/* Tags */}
        {event.tags && event.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {event.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
              >
                #{tag}
              </span>
            ))}
            {event.tags.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                +{event.tags.length - 3} more
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;
