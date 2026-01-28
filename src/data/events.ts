import { Event, EventCategory, CategoryInfo } from '@/types/event';

/**
 * Church Events Data
 * Real events from Friends Connection Baptist Church
 */

export const mockEvents: Event[] = [
  // Upcoming Events
  {
    id: '2',
    slug: 'youth-camp-2026',
    title: 'Youth Camp 2026',
    description: 'Get ready for another incredible youth camp experience! Youth Camp 2026 details are coming soon. This annual event brings together young people for days of worship, biblical teaching, fellowship, and spiritual growth. Stay tuned for more information about dates, location, theme, and registration details.',
    shortDescription: 'Annual youth camp - Details to be announced soon',
    category: EventCategory.YOUTH,
    status: 'upcoming',
    startDate: '2026-06-15',
    endDate: '2026-06-19',
    startTime: '9:00 AM',
    endTime: '5:00 PM',
    isTBA: true,
    location: {
      name: 'To Be Announced',
      address: 'TBA',
      city: 'TBA',
      state: 'TBA',
      zipCode: '',
    },
    image: '/events/summer-camp-2024/thumbnail.jpg',
    imageAlt: 'Youth Camp 2026',
    organizer: 'Youth Ministry',
    targetAudience: ['Youth', 'Teens', 'Young Adults'],
    tags: ['youth camp', 'summer camp', 'biblical teaching', 'fellowship', 'worship'],
    highlights: [
      'Theme and details to be announced',
      'Multi-day camp experience',
      'Worship and praise sessions',
      'Fellowship and team-building activities',
      'Sports and recreation',
      'Spiritual growth opportunities',
    ],
    registration: {
      required: true,
      cost: 0,
      contactEmail: 'fcfjc.ministries@gmail.com',
    },
    featured: true,
  },
  {
    id: '3',
    slug: 'mission-conference-2026',
    title: 'Mission Conference 2026',
    description: 'Join us for our annual Mission Conference! This powerful gathering will focus on God\'s heart for missions and our calling to reach the nations. Details including dates, speakers, theme, and location are being finalized. This conference will feature inspiring missionary testimonies, practical training sessions, and opportunities to learn about mission opportunities both locally and globally. Stay tuned for more information.',
    shortDescription: 'Annual mission conference - Details to be announced soon',
    category: EventCategory.CONFERENCE,
    status: 'upcoming',
    startDate: '2026-08-15',
    endDate: '2026-08-17',
    startTime: '9:00 AM',
    endTime: '5:00 PM',
    isTBA: true,
    location: {
      name: 'To Be Announced',
      address: 'TBA',
      city: 'TBA',
      state: 'TBA',
      zipCode: '',
    },
    image: '/events/summer-camp-2024/thumbnail.jpg',
    imageAlt: 'Mission Conference 2026',
    organizer: 'Missions Ministry',
    targetAudience: ['All Ages', 'Families', 'Adults', 'Youth'],
    tags: ['missions', 'conference', 'evangelism', 'outreach', 'global missions'],
    highlights: [
      'Theme and speakers to be announced',
      'Inspiring missionary testimonies',
      'Practical missions training',
      'Learn about mission opportunities',
      'Fellowship with missions-minded believers',
      'Vision casting for global outreach',
    ],
    registration: {
      required: true,
      cost: 0,
      contactEmail: 'fcfjc.ministries@gmail.com',
    },
    featured: true,
  },
  {
    id: '4',
    slug: 'outreach-mission-2026',
    title: 'Outreach Mission 2026',
    description: 'Be part of our community outreach mission! We are organizing an outreach mission to serve and minister to communities in need. Details about the location, dates, activities, and participation requirements are being finalized. This mission will provide opportunities to share God\'s love through practical service, evangelism, and community engagement. Stay connected for updates on how you can be involved.',
    shortDescription: 'Community outreach mission - Details to be announced soon',
    category: EventCategory.OUTREACH,
    status: 'upcoming',
    startDate: '2026-10-10',
    endDate: '2026-10-12',
    startTime: '9:00 AM',
    endTime: '5:00 PM',
    isTBA: true,
    location: {
      name: 'To Be Announced',
      address: 'TBA',
      city: 'TBA',
      state: 'TBA',
      zipCode: '',
    },
    image: '/events/summer-camp-2024/thumbnail.jpg',
    imageAlt: 'Outreach Mission 2026',
    organizer: 'Outreach Ministry',
    targetAudience: ['All Ages', 'Families', 'Adults', 'Youth', 'Volunteers'],
    tags: ['outreach', 'mission', 'community service', 'evangelism', 'volunteer'],
    highlights: [
      'Location and details to be announced',
      'Serve communities in need',
      'Share God\'s love through action',
      'Evangelism and community engagement',
      'Team-based ministry opportunities',
      'Make a lasting impact',
    ],
    registration: {
      required: true,
      cost: 0,
      contactEmail: 'fcfjc.ministries@gmail.com',
    },
    featured: true,
  },
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
