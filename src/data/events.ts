import { Event, EventCategory, CategoryInfo } from '@/types/event';

/**
 * Church Events Data
 * Real events from Friends Connection Baptist Church
 */

export const mockEvents: Event[] = [
  // Past Events
  {
    id: '1',
    slug: 'youth-camp-2024-holding-out-the-word-of-life',
    title: 'Youth Camp 2024 "Holding Out The Word of Life"',
    description: 'An incredible five-day youth camp experience centered on Philippians 2:14-16 KJV: "Do all things without murmurings and disputings: That ye may be blameless and harmless, the sons of God, without rebuke, in the midst of a crooked and perverse nation, among whom ye shine as lights in the world; Holding forth the word of life." Our youth gathered at Nueva Ecija Sports Complex for an unforgettable time of worship, biblical teaching, fellowship, and spiritual growth. This camp challenged young people to live out their faith boldly and shine as lights in their communities.',
    shortDescription: 'Five-day youth camp focused on living out Philippians 2:14-16',
    category: EventCategory.YOUTH,
    status: 'completed',
    startDate: '2024-06-10',
    endDate: '2024-06-14',
    startTime: '9:00 AM',
    endTime: '5:00 PM',
    location: {
      name: 'Nueva Ecija Sports Complex',
      address: 'Nueva Ecija Sports Complex',
      city: 'Palayan City',
      state: 'Nueva Ecija',
      zipCode: '',
    },
    image: '/events/summer-camp-2024/thumbnail.jpg',
    imageAlt: 'Youth Camp 2024 - Holding Out The Word of Life',
    organizer: 'Youth Ministry',
    targetAudience: ['Youth', 'Teens', 'Young Adults'],
    tags: ['youth camp', 'summer camp', 'biblical teaching', 'fellowship', 'worship'],
    highlights: [
      'Theme verse: Philippians 2:14-16 KJV',
      'Five days of intensive biblical teaching',
      'Worship and praise sessions',
      'Fellowship and team-building activities',
      'Sports and recreation at the complex',
      'Life-changing spiritual experiences',
    ],
    gallery: [
      '/events/summer-camp-2024/image-1.jpeg',
      '/events/summer-camp-2024/image-2.jpeg',
      '/events/summer-camp-2024/image-3.jpeg',
      '/events/summer-camp-2024/image-4.jpeg',
    ],
    featured: true,
  },
];

/**
 * Category display configuration
 */
export const categoryInfo: Record<EventCategory, CategoryInfo> = {
  [EventCategory.SERVICE]: {
    label: 'Service',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    icon: '⛪',
  },
  [EventCategory.MINISTRY]: {
    label: 'Ministry',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    icon: '📖',
  },
  [EventCategory.COMMUNITY]: {
    label: 'Community',
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    icon: '🤝',
  },
  [EventCategory.SPECIAL]: {
    label: 'Special Event',
    color: 'text-pink-600',
    bgColor: 'bg-pink-100',
    icon: '✨',
  },
  [EventCategory.YOUTH]: {
    label: 'Youth',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
    icon: '🎯',
  },
  [EventCategory.PRAYER]: {
    label: 'Prayer',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100',
    icon: '🙏',
  },
  [EventCategory.OUTREACH]: {
    label: 'Outreach',
    color: 'text-teal-600',
    bgColor: 'bg-teal-100',
    icon: '❤️',
  },
  [EventCategory.WORSHIP]: {
    label: 'Worship',
    color: 'text-rose-600',
    bgColor: 'bg-rose-100',
    icon: '🎵',
  },
  [EventCategory.CONFERENCE]: {
    label: 'Conference',
    color: 'text-amber-600',
    bgColor: 'bg-amber-100',
    icon: '🎤',
  },
};

/**
 * Helper function to get events by status
 */
export const getEventsByStatus = (status: 'upcoming' | 'completed') => {
  return mockEvents.filter((event) => event.status === status);
};

/**
 * Helper function to get featured events
 */
export const getFeaturedEvents = () => {
  return mockEvents.filter((event) => event.featured && event.status === 'upcoming');
};

/**
 * Helper function to get event by slug
 */
export const getEventBySlug = (slug: string) => {
  return mockEvents.find((event) => event.slug === slug);
};
