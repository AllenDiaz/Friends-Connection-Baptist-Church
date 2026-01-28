import { Metadata } from 'next';
import { getEventBySlug } from '@/data/events';
import { formatEventDate } from '@/lib/eventUtils';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    return {
      title: 'Event Not Found | Friends Connection Baptist Church',
      description: 'The event you are looking for could not be found.',
    };
  }

  const eventDate = formatEventDate(event.startDate, event.endDate, false);
  const eventTime = event.startTime ? ` at ${event.startTime}` : '';
  const location = event.location.isVirtual 
    ? 'Virtual Event' 
    : `${event.location.name}, ${event.location.city}, ${event.location.state}`;

  return {
    title: `${event.title} | Friends Connection Baptist Church`,
    description: event.shortDescription || event.description.substring(0, 160),
    keywords: [
      ...(event.tags || []),
      'church event',
      'friends connection',
      'baptist church',
      event.category.toLowerCase(),
      event.location.city,
    ],
    openGraph: {
      title: event.title,
      description: event.shortDescription || event.description.substring(0, 160),
      type: 'website',
      url: `https://friendsconnection.org/events/${event.slug}`,
      images: [
        {
          url: event.image,
          width: 1200,
          height: 630,
          alt: event.imageAlt || event.title,
        },
      ],
      siteName: 'Friends Connection Baptist Church',
    },
    twitter: {
      card: 'summary_large_image',
      title: event.title,
      description: event.shortDescription || event.description.substring(0, 160),
      images: [event.image],
    },
    alternates: {
      canonical: `https://friendsconnection.org/events/${event.slug}`,
    },
    other: {
      'event:date': eventDate,
      'event:time': event.startTime || '',
      'event:location': location,
    },
  };
}
