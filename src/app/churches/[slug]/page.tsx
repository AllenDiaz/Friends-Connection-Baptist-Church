import { notFound } from 'next/navigation';
import ChurchHero from '@/components/ChurchHero';
import ServiceCard from '@/components/ServiceCard';
import ContactForm from '@/components/ContactForm';
import { ChurchData } from '@/components/ChurchCard';
import { ServiceData } from '@/components/ServiceCard';

// Church data
const churchData: { [key: string]: ChurchData & { 
  fullDescription: string;
  services: ServiceData[];
  ministries: string[];
  history: string;
} } = {
  'living-water-baptist': {
    id: 'living-water-baptist',
    name: 'Living Water Baptist Church',
    description: 'A vibrant community focused on biblical teaching and spiritual growth through the living water of Christ.',
    fullDescription: 'For over 30 years, Living Water Baptist Church has been a cornerstone of faith in our community. We believe in the transformative power of God\'s Word and the importance of authentic relationships. Our church family is committed to worship that honors God, discipleship that transforms lives, and service that impacts our community and beyond.',
    image: '/living-water-baptist-church.png',
    pastor: 'Pastor John Smith',
    pastorImage: '/livig-water-baptist-church-pastor.jpg',
    address: '123 Faith Avenue, Springfield, IL 62701',
    phone: '(555) 123-4567',
    email: 'info@livingwaterbaptist.org',
    serviceTime: 'Sundays 9:00 AM & 11:00 AM',
    members: 300,
    website: 'https://livingwaterbaptist.org',
    history: 'Founded in 1994, Living Water Baptist Church began as a small group of families with a big vision for impacting their community through the Gospel of Jesus Christ. Over the years, we have grown into a thriving congregation while maintaining our commitment to biblical teaching, authentic worship, and genuine fellowship.',
    services: [
      {
        id: 'sunday-morning-early',
        name: 'Sunday Morning Worship (Early)',
        time: '9:00 AM',
        description: 'Traditional service with hymns and choir',
        duration: '1 hour',
        ageGroup: 'All Ages'
      },
      {
        id: 'sunday-morning-late',
        name: 'Sunday Morning Worship (Late)',
        time: '11:00 AM',
        description: 'Contemporary service with praise band',
        duration: '1 hour 15 minutes',
        ageGroup: 'All Ages'
      },
      {
        id: 'sunday-school',
        name: 'Sunday School',
        time: '10:00 AM',
        description: 'Bible study classes for all ages',
        duration: '45 minutes',
        ageGroup: 'All Ages'
      },
      {
        id: 'wednesday-bible-study',
        name: 'Wednesday Bible Study',
        time: '7:00 PM',
        description: 'Mid-week Bible study and prayer',
        duration: '1 hour',
        ageGroup: 'Adults'
      }
    ],
    ministries: [
      'Children\'s Ministry (Ages 0-12)',
      'Youth Ministry (Ages 13-18)', 
      'Young Adults (Ages 19-30)',
      'Men\'s Ministry',
      'Women\'s Ministry',
      'Senior Adults',
      'Worship Ministry',
      'Outreach & Missions'
    ]
  },
  'solid-rocks-baptist': {
    id: 'solid-rocks-baptist',
    name: 'Solid Rocks Baptist Church',
    description: 'Built on the solid rock of Jesus Christ, we are a family church welcoming all to experience God\'s love.',
    fullDescription: 'Solid Rocks Baptist Church has been serving our community for over 25 years. We are a family-oriented congregation that believes in the power of prayer, the authority of Scripture, and the love of Christ that transforms hearts and lives.',
    pastor: 'Pastor Michael Johnson',
    address: '456 Rock Street, Springfield, IL 62702',
    phone: '(555) 234-5678',
    email: 'contact@solidrocksbaptist.org',
    serviceTime: 'Sundays 10:30 AM',
    members: 200,
    history: 'Established in 1999, Solid Rocks Baptist Church was founded on the principle that Jesus Christ is the solid rock upon which we can build our lives, families, and community.',
    services: [
      {
        id: 'sunday-worship',
        name: 'Sunday Worship',
        time: '10:30 AM',
        description: 'Blended worship service',
        duration: '1 hour 30 minutes',
        ageGroup: 'All Ages'
      },
      {
        id: 'sunday-school',
        name: 'Sunday School',
        time: '9:15 AM',
        description: 'Age-appropriate Bible classes',
        duration: '45 minutes',
        ageGroup: 'All Ages'
      }
    ],
    ministries: [
      'Children\'s Ministry',
      'Youth Group',
      'Adult Bible Study',
      'Women\'s Circle',
      'Men\'s Fellowship',
      'Community Outreach'
    ]
  }
};

interface ChurchPageProps {
  params: {
    slug: string;
  };
}

export default function ChurchPage({ params }: ChurchPageProps) {
  const church = churchData[params.slug];

  if (!church) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Church Hero */}
      <ChurchHero
        name={church.name}
        description={church.fullDescription}
        image={church.image}
        pastor={church.pastor}
        pastorImage={church.pastorImage}
        address={church.address}
        phone={church.phone}
        email={church.email}
        serviceTime={church.serviceTime}
        website={church.website}
        members={church.members}
      />

      {/* Church History */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6">{church.history}</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Ministries</h3>
              <div className="grid grid-cols-2 gap-2">
                {church.ministries.map((ministry, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    <span className="text-gray-700 text-sm">{ministry}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Services */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Times</h2>
              <div className="space-y-4">
                {church.services.map((service) => (
                  <ServiceCard 
                    key={service.id}
                    service={service}
                    churchName={church.name}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm 
            title={`Connect with ${church.name}`}
            description="We'd love to hear from you and answer any questions you might have about our church."
          />
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { slug: 'living-water-baptist' },
    { slug: 'solid-rocks-baptist' },
    { slug: 'faith-community' },
    { slug: 'grace-covenant' },
    { slug: 'new-hope-fellowship' }
  ];
}