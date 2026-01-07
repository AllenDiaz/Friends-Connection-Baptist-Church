'use client';

import { useState } from 'react';
import { Grid, List, Calendar } from 'lucide-react';
import { Event } from '@/types/event';
import EventCard from './EventCard';
import { Button } from '@/components/ui/Button';
import { groupEventsByMonth } from '@/lib/eventUtils';

interface EventListProps {
  events: Event[];
  loading?: boolean;
  emptyMessage?: string;
  showViewToggle?: boolean;
  defaultView?: 'grid' | 'list';
  className?: string;
}

const EventList = ({
  events,
  loading = false,
  emptyMessage = 'No events found',
  showViewToggle = true,
  defaultView = 'grid',
  className = '',
}: EventListProps) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>(defaultView);
  const [groupByMonth, setGroupByMonth] = useState(false);

  const groupedEvents = groupByMonth ? groupEventsByMonth(events) : null;

  // Loading State
  if (loading) {
    return (
      <div className={`space-y-6 ${className}`}>
        {showViewToggle && (
          <div className="flex justify-end gap-2">
            <div className="h-10 w-32 bg-gray-200 animate-pulse rounded-lg" />
          </div>
        )}
        <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-6`}>
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
              <div className="h-48 bg-gray-200" />
              <div className="p-6 space-y-4">
                <div className="h-6 bg-gray-200 rounded w-3/4" />
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-5/6" />
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-2/3" />
                  <div className="h-4 bg-gray-200 rounded w-1/2" />
                </div>
                <div className="h-10 bg-gray-200 rounded w-full mt-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Empty State
  if (!events || events.length === 0) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
          <Calendar className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {emptyMessage}
        </h3>
        <p className="text-gray-600 max-w-md mx-auto">
          Check back soon for upcoming events or adjust your filters to see more results.
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      {/* View Toggle Controls */}
      {showViewToggle && (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700">
              Showing {events.length} {events.length === 1 ? 'event' : 'events'}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Group by Month Toggle */}
            <Button
              variant={groupByMonth ? 'default' : 'outline'}
              size="sm"
              onClick={() => setGroupByMonth(!groupByMonth)}
              className="text-sm"
            >
              <Calendar className="w-4 h-4 mr-2" />
              {groupByMonth ? 'Ungrouped' : 'Group by Month'}
            </Button>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                aria-label="Grid view"
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                aria-label="List view"
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Events Display */}
      {groupByMonth && groupedEvents ? (
        // Grouped by Month View
        <div className="space-y-8">
          {Object.entries(groupedEvents).map(([month, monthEvents]) => (
            <div key={month}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                {month}
              </h3>
              <div
                className={`grid ${
                  viewMode === 'grid'
                    ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                    : 'grid-cols-1'
                } gap-6`}
              >
                {monthEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    className={viewMode === 'list' ? 'max-w-full' : ''}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Regular View (Ungrouped)
        <div
          className={`grid ${
            viewMode === 'grid'
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-1'
          } gap-6`}
        >
          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              className={viewMode === 'list' ? 'max-w-full' : ''}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default EventList;
