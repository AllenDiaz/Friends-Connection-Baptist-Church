import {
  isAfter,
  isBefore,
  isToday,
  isThisWeek,
  isThisMonth,
  isSameDay,
  parseISO,
  format,
  startOfDay,
  endOfDay,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  differenceInDays,
  addDays,
} from 'date-fns';
import { Event, EventFilters, GroupedEvents, EventCategory } from '@/types/event';

/**
 * Convert string or Date to Date object
 */
export const parseEventDate = (date: Date | string): Date => {
  if (typeof date === 'string') {
    return parseISO(date);
  }
  return date;
};

/**
 * Check if an event is upcoming (starts in the future)
 */
export const isUpcomingEvent = (event: Event): boolean => {
  const eventDate = parseEventDate(event.startDate);
  const now = new Date();
  return isAfter(eventDate, now) || isToday(eventDate);
};

/**
 * Check if an event is in the past (has already ended)
 */
export const isPastEvent = (event: Event): boolean => {
  const eventDate = event.endDate 
    ? parseEventDate(event.endDate) 
    : parseEventDate(event.startDate);
  const now = new Date();
  return isBefore(eventDate, startOfDay(now)) && !isToday(eventDate);
};

/**
 * Check if an event is happening today
 */
export const isEventToday = (event: Event): boolean => {
  const eventDate = parseEventDate(event.startDate);
  return isToday(eventDate);
};

/**
 * Check if an event is happening this week
 */
export const isEventThisWeek = (event: Event): boolean => {
  const eventDate = parseEventDate(event.startDate);
  return isThisWeek(eventDate, { weekStartsOn: 0 }); // Week starts on Sunday
};

/**
 * Check if an event is happening this month
 */
export const isEventThisMonth = (event: Event): boolean => {
  const eventDate = parseEventDate(event.startDate);
  return isThisMonth(eventDate);
};

/**
 * Separate events into upcoming and past
 */
export const separateEventsByStatus = (events: Event[]): {
  upcoming: Event[];
  past: Event[];
} => {
  const upcoming: Event[] = [];
  const past: Event[] = [];

  events.forEach((event) => {
    if (isUpcomingEvent(event)) {
      upcoming.push(event);
    } else if (isPastEvent(event)) {
      past.push(event);
    }
  });

  // Sort upcoming events by date (earliest first)
  upcoming.sort((a, b) => {
    const dateA = parseEventDate(a.startDate).getTime();
    const dateB = parseEventDate(b.startDate).getTime();
    return dateA - dateB;
  });

  // Sort past events by date (most recent first)
  past.sort((a, b) => {
    const dateA = parseEventDate(a.startDate).getTime();
    const dateB = parseEventDate(b.startDate).getTime();
    return dateB - dateA;
  });

  return { upcoming, past };
};

/**
 * Group events by month
 */
export const groupEventsByMonth = (events: Event[]): GroupedEvents => {
  const grouped: GroupedEvents = {};

  events.forEach((event) => {
    const eventDate = parseEventDate(event.startDate);
    const monthKey = format(eventDate, 'MMMM yyyy'); // e.g., "January 2026"

    if (!grouped[monthKey]) {
      grouped[monthKey] = [];
    }
    grouped[monthKey].push(event);
  });

  // Sort events within each month
  Object.keys(grouped).forEach((monthKey) => {
    grouped[monthKey].sort((a, b) => {
      const dateA = parseEventDate(a.startDate).getTime();
      const dateB = parseEventDate(b.startDate).getTime();
      return dateA - dateB;
    });
  });

  return grouped;
};

/**
 * Group events by date (for calendar view)
 */
export const groupEventsByDate = (events: Event[]): Record<string, Event[]> => {
  const grouped: Record<string, Event[]> = {};

  events.forEach((event) => {
    const eventDate = parseEventDate(event.startDate);
    const dateKey = format(eventDate, 'yyyy-MM-dd');

    if (!grouped[dateKey]) {
      grouped[dateKey] = [];
    }
    grouped[dateKey].push(event);
  });

  return grouped;
};

/**
 * Get events for a specific date
 */
export const getEventsForDate = (events: Event[], date: Date): Event[] => {
  return events.filter((event) => {
    const eventDate = parseEventDate(event.startDate);
    return isSameDay(eventDate, date);
  });
};

/**
 * Format event date for display
 */
export const formatEventDate = (
  startDate: Date | string,
  endDate?: Date | string,
  includeYear: boolean = true
): string => {
  const start = parseEventDate(startDate);
  
  if (!endDate) {
    return format(start, includeYear ? 'MMMM d, yyyy' : 'MMMM d');
  }

  const end = parseEventDate(endDate);
  
  // Same day
  if (isSameDay(start, end)) {
    return format(start, includeYear ? 'MMMM d, yyyy' : 'MMMM d');
  }

  // Different days, same month
  if (format(start, 'MM-yyyy') === format(end, 'MM-yyyy')) {
    return `${format(start, 'MMMM d')} - ${format(end, includeYear ? 'd, yyyy' : 'd')}`;
  }

  // Different months
  return `${format(start, includeYear ? 'MMM d, yyyy' : 'MMM d')} - ${format(end, includeYear ? 'MMM d, yyyy' : 'MMM d')}`;
};

/**
 * Format event time range
 */
export const formatEventTime = (startTime: string, endTime?: string): string => {
  if (!endTime) {
    return startTime;
  }
  return `${startTime} - ${endTime}`;
};

/**
 * Get days until event
 */
export const getDaysUntilEvent = (event: Event): number => {
  const eventDate = parseEventDate(event.startDate);
  const today = startOfDay(new Date());
  return differenceInDays(eventDate, today);
};

/**
 * Get event status badge text
 */
export const getEventStatusBadge = (event: Event): string => {
  if (isEventToday(event)) {
    return 'Today';
  }

  const daysUntil = getDaysUntilEvent(event);
  
  if (daysUntil === 1) {
    return 'Tomorrow';
  }

  if (daysUntil > 0 && daysUntil <= 7) {
    return `In ${daysUntil} days`;
  }

  if (isEventThisWeek(event)) {
    return 'This week';
  }

  if (isEventThisMonth(event)) {
    return 'This month';
  }

  if (isPastEvent(event)) {
    return 'Completed';
  }

  return 'Upcoming';
};

/**
 * Filter events based on criteria
 */
export const filterEvents = (events: Event[], filters: EventFilters): Event[] => {
  let filtered = [...events];

  // Filter by category
  if (filters.category && filters.category !== 'all') {
    filtered = filtered.filter((event) => event.category === filters.category);
  }

  // Filter by status
  if (filters.status && filters.status !== 'all') {
    filtered = filtered.filter((event) => event.status === filters.status);
  }

  // Filter by date range
  if (filters.dateFrom) {
    const fromDate = parseEventDate(filters.dateFrom);
    filtered = filtered.filter((event) => {
      const eventDate = parseEventDate(event.startDate);
      return isAfter(eventDate, fromDate) || isSameDay(eventDate, fromDate);
    });
  }

  if (filters.dateTo) {
    const toDate = parseEventDate(filters.dateTo);
    filtered = filtered.filter((event) => {
      const eventDate = parseEventDate(event.startDate);
      return isBefore(eventDate, toDate) || isSameDay(eventDate, toDate);
    });
  }

  // Filter by search term
  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    filtered = filtered.filter((event) => {
      return (
        event.title.toLowerCase().includes(searchLower) ||
        event.description.toLowerCase().includes(searchLower) ||
        event.shortDescription?.toLowerCase().includes(searchLower) ||
        event.tags?.some((tag) => tag.toLowerCase().includes(searchLower)) ||
        event.speaker?.name.toLowerCase().includes(searchLower)
      );
    });
  }

  // Filter by featured
  if (filters.featured !== undefined) {
    filtered = filtered.filter((event) => event.featured === filters.featured);
  }

  // Filter by target audience
  if (filters.targetAudience) {
    filtered = filtered.filter((event) =>
      event.targetAudience?.includes(filters.targetAudience!)
    );
  }

  return filtered;
};

/**
 * Sort events by date
 */
export const sortEventsByDate = (
  events: Event[],
  order: 'asc' | 'desc' = 'asc'
): Event[] => {
  return [...events].sort((a, b) => {
    const dateA = parseEventDate(a.startDate).getTime();
    const dateB = parseEventDate(b.startDate).getTime();
    return order === 'asc' ? dateA - dateB : dateB - dateA;
  });
};

/**
 * Check if event registration is still open
 */
export const isRegistrationOpen = (event: Event): boolean => {
  if (!event.registration || !event.registration.required) {
    return false;
  }

  if (!event.registration.deadline) {
    return isUpcomingEvent(event);
  }

  const deadline = parseEventDate(event.registration.deadline);
  const now = new Date();
  
  return isBefore(now, deadline) || isSameDay(now, deadline);
};

/**
 * Check if event is full (reached max attendees)
 */
export const isEventFull = (event: Event): boolean => {
  if (!event.registration?.maxAttendees) {
    return false;
  }

  const current = event.registration.currentAttendees || 0;
  return current >= event.registration.maxAttendees;
};

/**
 * Get registration status text
 */
export const getRegistrationStatus = (event: Event): string => {
  if (!event.registration?.required) {
    return 'No registration required';
  }

  if (isEventFull(event)) {
    return 'Event is full';
  }

  if (!isRegistrationOpen(event)) {
    return 'Registration closed';
  }

  if (event.registration.maxAttendees) {
    const current = event.registration.currentAttendees || 0;
    const remaining = event.registration.maxAttendees - current;
    return `${remaining} spots remaining`;
  }

  return 'Registration open';
};

/**
 * Get all unique categories from events
 */
export const getUniqueCategories = (events: Event[]): EventCategory[] => {
  const categories = new Set<EventCategory>();
  events.forEach((event) => categories.add(event.category));
  return Array.from(categories);
};

/**
 * Get all unique target audiences from events
 */
export const getUniqueTargetAudiences = (events: Event[]): string[] => {
  const audiences = new Set<string>();
  events.forEach((event) => {
    event.targetAudience?.forEach((audience) => audiences.add(audience));
  });
  return Array.from(audiences).sort();
};

/**
 * Get date range for calendar navigation
 */
export const getDateRange = (
  date: Date,
  view: 'week' | 'month'
): { start: Date; end: Date } => {
  if (view === 'week') {
    return {
      start: startOfWeek(date, { weekStartsOn: 0 }),
      end: endOfWeek(date, { weekStartsOn: 0 }),
    };
  }
  return {
    start: startOfMonth(date),
    end: endOfMonth(date),
  };
};

/**
 * Check if a date has events
 */
export const hasEventsOnDate = (events: Event[], date: Date): boolean => {
  return events.some((event) => {
    const eventDate = parseEventDate(event.startDate);
    return isSameDay(eventDate, date);
  });
};

/**
 * Get next N upcoming events
 */
export const getNextUpcomingEvents = (events: Event[], count: number): Event[] => {
  const upcoming = events
    .filter(isUpcomingEvent)
    .sort((a, b) => {
      const dateA = parseEventDate(a.startDate).getTime();
      const dateB = parseEventDate(b.startDate).getTime();
      return dateA - dateB;
    });
  
  return upcoming.slice(0, count);
};

/**
 * Get events happening within the next N days
 */
export const getEventsInNextDays = (events: Event[], days: number): Event[] => {
  const now = new Date();
  const endDate = addDays(now, days);
  
  return events.filter((event) => {
    const eventDate = parseEventDate(event.startDate);
    return isAfter(eventDate, now) && isBefore(eventDate, endDate);
  });
};
