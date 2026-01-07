/**
 * Event Types and Interfaces
 * Defines the data structure for church events
 */

/**
 * Event category types
 */
export enum EventCategory {
  SERVICE = 'service',
  MINISTRY = 'ministry',
  COMMUNITY = 'community',
  SPECIAL = 'special',
  YOUTH = 'youth',
  PRAYER = 'prayer',
  OUTREACH = 'outreach',
  WORSHIP = 'worship',
  CONFERENCE = 'conference',
}

/**
 * Event status types
 */
export type EventStatus = 'upcoming' | 'ongoing' | 'completed' | 'cancelled';

/**
 * Event location information
 */
export interface EventLocation {
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  room?: string; // Optional room number or building name
  isVirtual?: boolean; // For online events
  virtualLink?: string; // Zoom, YouTube, etc.
}

/**
 * Event speaker or host information
 */
export interface EventSpeaker {
  name: string;
  title: string;
  bio?: string;
  image?: string;
}

/**
 * Event registration information
 */
export interface EventRegistration {
  required: boolean;
  deadline?: Date | string;
  maxAttendees?: number;
  currentAttendees?: number;
  registrationLink?: string;
  cost?: number; // 0 for free events
  contactEmail?: string;
  contactPhone?: string;
}

/**
 * Event recurrence information
 */
export interface EventRecurrence {
  isRecurring: boolean;
  frequency?: 'daily' | 'weekly' | 'monthly' | 'yearly';
  endDate?: Date | string;
  daysOfWeek?: number[]; // 0-6, where 0 is Sunday
}

/**
 * Event testimonial information
 */
export interface EventTestimonial {
  name: string;
  role?: string;
  comment: string;
  rating?: number; // 1-5
  avatar?: string;
}

/**
 * Main Event interface
 */
export interface Event {
  id: string;
  slug: string; // URL-friendly identifier
  title: string;
  description: string;
  shortDescription?: string; // For card previews
  category: EventCategory;
  status: EventStatus;
  
  // Date and Time
  startDate: Date | string;
  endDate?: Date | string;
  startTime: string; // Format: "HH:MM AM/PM"
  endTime?: string;
  allDay?: boolean;
  
  // Location
  location: EventLocation;
  
  // Media
  image: string;
  imageAlt?: string;
  gallery?: string[]; // Additional images
  videoUrl?: string; // YouTube or Vimeo embed
  
  // People
  speaker?: EventSpeaker;
  organizer?: string; // Ministry or person organizing
  
  // Registration
  registration?: EventRegistration;
  
  // Recurrence
  recurrence?: EventRecurrence;
  
  // Additional Information
  targetAudience?: string[]; // e.g., ["Adults", "Youth", "Families"]
  tags?: string[]; // For filtering and search
  relatedEvents?: string[]; // IDs of related events
  
  // Content
  agenda?: string[]; // Event schedule/agenda items
  highlights?: string[]; // Key points or features
  requirements?: string[]; // What to bring, prerequisites, etc.
  testimonials?: EventTestimonial[]; // Attendee testimonials (for past events)
  
  // Metadata
  featured?: boolean; // Highlight on homepage
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
}

/**
 * Event filter options
 */
export interface EventFilters {
  category?: EventCategory | 'all';
  status?: EventStatus | 'all';
  dateFrom?: Date | string;
  dateTo?: Date | string;
  search?: string;
  featured?: boolean;
  targetAudience?: string;
}

/**
 * Event summary for calendar view
 */
export interface EventSummary {
  id: string;
  title: string;
  date: Date | string;
  category: EventCategory;
  slug: string;
}

/**
 * Category display information
 */
export interface CategoryInfo {
  label: string;
  color: string;
  bgColor: string;
  icon?: string;
}

/**
 * Helper type for event grouping
 */
export interface GroupedEvents {
  [key: string]: Event[];
}
