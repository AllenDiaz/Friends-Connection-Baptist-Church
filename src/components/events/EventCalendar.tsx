'use client';

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';
import { Event } from '@/types/event';
import { parseEventDate, hasEventsOnDate, getEventsForDate } from '@/lib/eventUtils';
import { categoryInfo } from '@/data/events';
import { X, Calendar as CalendarIcon } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

interface EventCalendarProps {
  events: Event[];
  className?: string;
  onDateSelect?: (date: Date, events: Event[]) => void;
}

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalendar = ({ events, className = '', onDateSelect }: EventCalendarProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [value, setValue] = useState<Value>(new Date());

  // Check if a date has events
  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === 'month') {
      const dateHasEvents = hasEventsOnDate(events, date);
      
      if (dateHasEvents) {
        const dateEvents = getEventsForDate(events, date);
        return (
          <div className="flex justify-center mt-1">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
            {dateEvents.length > 1 && (
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full ml-0.5" />
            )}
          </div>
        );
      }
    }
    return null;
  };

  // Add custom class to tiles with events
  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    if (view === 'month') {
      const dateHasEvents = hasEventsOnDate(events, date);
      if (dateHasEvents) {
        return 'has-events';
      }
    }
    return null;
  };

  const handleDateClick = (value: Value) => {
    if (value instanceof Date) {
      const clickedDate = value;
      const dateEvents = getEventsForDate(events, clickedDate);
      
      if (dateEvents.length > 0) {
        setSelectedDate(clickedDate);
        if (onDateSelect) {
          onDateSelect(clickedDate, dateEvents);
        }
      } else {
        setSelectedDate(null);
      }
      setValue(value);
    }
  };

  const handleCloseModal = () => {
    setSelectedDate(null);
  };

  const selectedDateEvents = selectedDate ? getEventsForDate(events, selectedDate) : [];

  return (
    <div className={`relative ${className}`}>
      {/* Calendar Wrapper */}
      <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <CalendarIcon className="w-5 h-5 text-blue-600" />
          Event Calendar
        </h3>
        
        {/* Calendar Component */}
        <div className="event-calendar-wrapper">
          <Calendar
            onChange={handleDateClick}
            value={value}
            tileContent={tileContent}
            tileClassName={tileClassName}
            className="w-full border-0 rounded-lg"
            locale="en-US"
            calendarType="gregory"
          />
        </div>

        {/* Legend */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-2 h-2 bg-blue-600 rounded-full" />
            <span>Days with events</span>
          </div>
        </div>
      </div>

      {/* Selected Date Events Modal */}
      {selectedDate && selectedDateEvents.length > 0 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold">
                    {format(selectedDate, 'MMMM d, yyyy')}
                  </h3>
                  <p className="text-blue-100 mt-1">
                    {selectedDateEvents.length} {selectedDateEvents.length === 1 ? 'Event' : 'Events'}
                  </p>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(80vh-140px)]">
              <div className="space-y-4">
                {selectedDateEvents.map((event) => {
                  const categoryStyle = categoryInfo[event.category];
                  return (
                    <div
                      key={event.id}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      {/* Category Badge */}
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 ${categoryStyle.bgColor} ${categoryStyle.color} text-xs font-semibold rounded-full mb-3`}
                      >
                        {categoryStyle.icon} {categoryStyle.label}
                      </span>

                      {/* Event Title */}
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {event.title}
                      </h4>

                      {/* Event Time */}
                      {event.startTime && (
                        <p className="text-sm text-gray-600 mb-2">
                          ⏰ {event.startTime}
                          {event.endTime && ` - ${event.endTime}`}
                        </p>
                      )}

                      {/* Event Location */}
                      <p className="text-sm text-gray-600 mb-3">
                        📍 {event.location.name}
                        {event.location.isVirtual && ' (Virtual)'}
                      </p>

                      {/* Short Description */}
                      {event.shortDescription && (
                        <p className="text-sm text-gray-700 mb-4 line-clamp-2">
                          {event.shortDescription}
                        </p>
                      )}

                      {/* View Details Button */}
                      <Link href={`/events/${event.slug}`}>
                        <Button variant="outline" size="sm" className="w-full">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style jsx global>{`
        .event-calendar-wrapper .react-calendar {
          border: none;
          font-family: inherit;
        }

        .event-calendar-wrapper .react-calendar__tile {
          padding: 0.75rem 0.5rem;
          font-size: 0.875rem;
          position: relative;
        }

        .event-calendar-wrapper .react-calendar__tile--active {
          background: #3b82f6;
          color: white;
        }

        .event-calendar-wrapper .react-calendar__tile--now {
          background: #dbeafe;
          color: #1e40af;
        }

        .event-calendar-wrapper .react-calendar__tile.has-events {
          font-weight: 600;
          color: #1e40af;
        }

        .event-calendar-wrapper .react-calendar__tile.has-events:hover {
          background: #eff6ff;
          cursor: pointer;
        }

        .event-calendar-wrapper .react-calendar__navigation button {
          font-size: 1rem;
          font-weight: 600;
          color: #1f2937;
        }

        .event-calendar-wrapper .react-calendar__navigation button:hover {
          background: #f3f4f6;
        }

        .event-calendar-wrapper .react-calendar__month-view__weekdays {
          font-weight: 600;
          font-size: 0.75rem;
          color: #6b7280;
          text-transform: uppercase;
        }

        .event-calendar-wrapper .react-calendar__tile--active.has-events {
          background: #2563eb;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default EventCalendar;
