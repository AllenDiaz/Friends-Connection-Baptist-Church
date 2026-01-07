'use client';

import { useState, useMemo } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { mockEvents } from '@/data/events';
import { filterEvents, separateEventsByStatus } from '@/lib/eventUtils';
import { EventFilters as EventFiltersType } from '@/types/event';
import EventFilters from '@/components/events/EventFilters';
import EventList from '@/components/events/EventList';
import EventCalendar from '@/components/events/EventCalendar';
import { Button } from '@/components/ui/Button';

type TabView = 'upcoming' | 'past' | 'calendar';

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<TabView>('upcoming');
  const [filters, setFilters] = useState<EventFiltersType>({
    category: 'all',
    status: 'all',
    search: '',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 9;

  // Separate events by status
  const { upcoming, past } = useMemo(
    () => separateEventsByStatus(mockEvents),
    []
  );

  // Get events based on active tab
  const tabEvents = useMemo(() => {
    if (activeTab === 'upcoming') return upcoming;
    if (activeTab === 'past') return past;
    return mockEvents;
  }, [activeTab, upcoming, past]);

  // Apply filters
  const filteredEvents = useMemo(
    () => filterEvents(tabEvents, filters),
    [tabEvents, filters]
  );

  // Pagination
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
  const paginatedEvents = useMemo(() => {
    const startIndex = (currentPage - 1) * eventsPerPage;
    return filteredEvents.slice(startIndex, startIndex + eventsPerPage);
  }, [filteredEvents, currentPage]);

  // Reset to page 1 when filters or tab changes
  const handleFilterChange = (newFilters: EventFiltersType) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleTabChange = (tab: TabView) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-2 bg-white/10 rounded-full mb-4">
              <Calendar className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Church Events
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-6 max-w-3xl mx-auto">
              Join us for worship, fellowship, and community events that bring us together in faith
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-200" />
                <span>{upcoming.length} Upcoming Events</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-200" />
                <span>Weekly & Special Services</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-200" />
                <span>In-Person & Virtual</span>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-auto"
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#F9FAFB"
            />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 overflow-x-auto" aria-label="Tabs">
              <button
                onClick={() => handleTabChange('upcoming')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'upcoming'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Upcoming Events
                <span className="ml-2 py-0.5 px-2 rounded-full text-xs bg-blue-100 text-blue-600">
                  {upcoming.length}
                </span>
              </button>
              <button
                onClick={() => handleTabChange('past')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'past'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Past Events
                <span className="ml-2 py-0.5 px-2 rounded-full text-xs bg-gray-100 text-gray-600">
                  {past.length}
                </span>
              </button>
              <button
                onClick={() => handleTabChange('calendar')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'calendar'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Calendar className="w-4 h-4 inline mr-2" />
                Calendar View
              </button>
            </nav>
          </div>
        </div>

        {/* Filters and Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Filters */}
          {activeTab !== 'calendar' && (
            <div className="lg:col-span-1">
              <EventFilters
                filters={filters}
                onFilterChange={handleFilterChange}
                showStatusFilter={false}
              />
            </div>
          )}

          {/* Main Content */}
          <div className={activeTab === 'calendar' ? 'lg:col-span-4' : 'lg:col-span-3'}>
            {activeTab === 'calendar' ? (
              /* Calendar View */
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <EventCalendar events={mockEvents} />
                </div>
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Upcoming Events
                    </h3>
                    <div className="space-y-4">
                      {upcoming.slice(0, 5).map((event) => (
                        <div key={event.id} className="border-b border-gray-200 pb-3 last:border-0">
                          <p className="font-medium text-gray-900 text-sm mb-1">
                            {event.title}
                          </p>
                          <p className="text-xs text-gray-600">
                            {typeof event.startDate === 'string'
                              ? new Date(event.startDate).toLocaleDateString()
                              : event.startDate.toLocaleDateString()}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* List View */
              <>
                <EventList
                  events={paginatedEvents}
                  loading={false}
                  emptyMessage={`No ${activeTab} events found`}
                  showViewToggle={true}
                />

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-12 flex justify-center items-center gap-2">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </Button>
                    
                    <div className="flex gap-2">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                        // Show first page, last page, current page, and pages around current
                        if (
                          page === 1 ||
                          page === totalPages ||
                          (page >= currentPage - 1 && page <= currentPage + 1)
                        ) {
                          return (
                            <Button
                              key={page}
                              variant={currentPage === page ? 'default' : 'outline'}
                              onClick={() => setCurrentPage(page)}
                              className="w-10 h-10 p-0"
                            >
                              {page}
                            </Button>
                          );
                        } else if (page === currentPage - 2 || page === currentPage + 2) {
                          return (
                            <span key={page} className="flex items-center px-2 text-gray-500">
                              ...
                            </span>
                          );
                        }
                        return null;
                      })}
                    </div>

                    <Button
                      variant="outline"
                      onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </Button>
                  </div>
                )}

                {/* Results Summary */}
                {filteredEvents.length > 0 && (
                  <div className="mt-8 text-center text-sm text-gray-600">
                    Showing {((currentPage - 1) * eventsPerPage) + 1} to{' '}
                    {Math.min(currentPage * eventsPerPage, filteredEvents.length)} of{' '}
                    {filteredEvents.length} events
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
