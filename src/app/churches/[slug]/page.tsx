import { notFound } from 'next/navigation';
import ChurchHero from '@/components/ChurchHero';
import ServiceCard from '@/components/ServiceCard';
import ContactForm from '@/components/ContactForm';
import { ChurchData } from '@/components/ChurchCard';
import { ServiceData } from '@/components/ServiceCard';

// Friends Connection Churches Data
const churchData: { [key: string]: ChurchData & { 
  fullDescription: string;
  services: ServiceData[];
  ministries: string[];
  history: string;
} } = {
  'international-baptist-pinellas': {
    id: 'international-baptist-pinellas',
    name: 'International Baptist Church of Pinellas INC',
    description: 'Serving the international community in Florida with biblical teaching and Christian fellowship.',
    fullDescription: 'International Baptist Church of Pinellas INC serves the diverse international community in Pinellas Park, Florida. Under the pastoral leadership of Ptr. Robert Young, this church is committed to providing biblical teaching and warm Christian fellowship to people from various cultural backgrounds. We believe in the power of God\'s Word to transform lives and unite believers from all nations in Christian love.',
    pastor: 'Ptr. Robert Young',
    pastorImage: '/pastor-robert-young.jpg',
    address: '5955 Park Blvd North Pinellas Park Florida, 33781',
    phone: 'Contact through Friends Connection',
    email: 'info@friendsconnection.org',
    serviceTime: 'Sundays - Contact for service times',
    history: 'International Baptist Church of Pinellas INC represents the international expansion of Friends Connection ministry, bringing the Gospel message to the diverse community of Pinellas Park, Florida. The church serves as a bridge between cultures while maintaining strong biblical foundations.',
    services: [
      {
        id: 'sunday-worship',
        name: 'Sunday Worship Service',
        time: 'Contact for times',
        description: 'Multicultural worship and biblical preaching',
        duration: 'Contact church',
        ageGroup: 'All Ages'
      },
      {
        id: 'bible-study',
        name: 'Bible Study',
        time: 'Contact for times',
        description: 'In-depth study of God\'s Word',
        duration: 'Contact church',
        ageGroup: 'All Ages'
      }
    ],
    ministries: [
      'International Ministry',
      'Children\'s Ministry',
      'Youth Ministry',
      'Adult Bible Study',
      'Women\'s Fellowship',
      'Men\'s Ministry',
      'Cross-Cultural Outreach',
      'Prayer Ministry',
      'Community Service'
    ]
  },
  'living-water-baptist': {
    id: 'living-water-baptist',
    name: 'Living Water Baptist Church of Nueva Ecija',
    description: 'A vibrant community focused on biblical teaching and spiritual growth through the living water of Christ.',
    fullDescription: 'Living Water Baptist Church of Nueva Ecija has been a cornerstone of faith in the Nieves community. Under the pastoral leadership of Rev. Alfredo Eborda, this church is dedicated to spreading the Gospel and nurturing spiritual growth through the living water of Christ. We believe in the transformative power of God\'s Word and the importance of authentic relationships within our church family.',
    image: '/living-water-baptist-church.png',
    pastor: 'Rev. Alfredo Eborda',
    pastorImage: '/livig-water-baptist-church-pastor.jpg',
    address: 'Nieves, San Leonardo Nueva Ecija',
    phone: 'Contact through Friends Connection',
    email: 'info@friendsconnection.org',
    serviceTime: 'Sundays - Contact for service times',
    history: 'Living Water Baptist Church of Nueva Ecija has served the Nieves community with dedication and love, establishing a strong foundation of biblical teaching and Christian fellowship. The church has grown under the faithful ministry of Rev. Alfredo Eborda, becoming a beacon of hope and spiritual nourishment in San Leonardo.',
    services: [
      {
        id: 'sunday-worship',
        name: 'Sunday Worship Service',
        time: 'Contact for times',
        description: 'Biblical preaching and congregational worship',
        duration: 'Contact church',
        ageGroup: 'All Ages'
      },
      {
        id: 'bible-study',
        name: 'Bible Study',
        time: 'Contact for times',
        description: 'In-depth study of God\'s Word',
        duration: 'Contact church',
        ageGroup: 'All Ages'
      }
    ],
    ministries: [
      'Children\'s Ministry',
      'Youth Ministry',
      'Adult Bible Study',
      'Women\'s Fellowship',
      'Men\'s Ministry',
      'Evangelism & Outreach',
      'Prayer Ministry',
      'Community Service'
    ]
  },
  'friendship-gospel-tabuating': {
    id: 'friendship-gospel-tabuating',
    name: 'Friendship Gospel Bible Baptist Church',
    description: 'A foundational church of Friends Connection, committed to biblical teaching and community fellowship in Nueva Ecija.',
    fullDescription: 'As one of the founding churches of Friends Connection, Friendship Gospel Bible Baptist Church in Tabuating serves as a beacon of faith in San Leonardo, Nueva Ecija. Under the leadership of Ptr. Roberto Pascual, this church is dedicated to spreading the Gospel and building strong Christian community through faithful biblical teaching and warm fellowship.',
    image: '/friends-gospel-bible-church.png',
    pastor: 'Ptr. Roberto Pascual',
    pastorImage: '/pastor-robert-pascual.png',
    address: 'Tabuating, San Leonardo Nueva Ecija',
    phone: 'Contact through Friends Connection',
    email: 'info@friendsconnection.org',
    serviceTime: 'Sundays - Contact for service times',
    history: 'Friendship Gospel Bible Baptist Church has been serving the community of Tabuating for many years, establishing a strong foundation of biblical teaching and Christian fellowship that has become the cornerstone of the Friends Connection network.',
    services: [
      {
        id: 'sunday-worship',
        name: 'Sunday Worship Service',
        time: 'Contact for times',
        description: 'Biblical preaching and congregational worship',
        duration: 'Contact church',
        ageGroup: 'All Ages'
      },
      {
        id: 'bible-study',
        name: 'Bible Study',
        time: 'Contact for times',
        description: 'In-depth study of God\'s Word',
        duration: 'Contact church',
        ageGroup: 'All Ages'
      }
    ],
    ministries: [
      'Children\'s Ministry',
      'Youth Ministry',
      'Adult Bible Study',
      'Women\'s Fellowship',
      'Men\'s Ministry',
      'Evangelism & Outreach',
      'Prayer Ministry'
    ]
  },
  'friendship-gospel-bongabon': {
    id: 'friendship-gospel-bongabon',
    name: 'Friendship Gospel Baptist Church Mission of Bongabon',
    description: 'A mission church dedicated to spreading the Gospel and building strong Christian community in Bongabon.',
    fullDescription: 'Located in Brgy. Sisilang, this mission church serves the community of Bongabon with dedication and love. Under the pastoral care of Ptr. Rayner Osuna, the church focuses on evangelism, discipleship, and community service, bringing hope and healing to families throughout the region.',
    image: '/friends-gospel-bible-church-mission-of-bongabon.png',
    pastor: 'Ptr. Rayner Osuna',
    pastorImage: '/pastor-rayner-osuna.jpg',
    address: 'Brgy. Sisilang Bongabon Nueva Ecija',
    phone: 'Contact through Friends Connection',
    email: 'info@friendsconnection.org',
    serviceTime: 'Sundays - Contact for service times',
    history: 'As a mission church of the Friends Connection network, this congregation has grown from humble beginnings to become a vital part of the Bongabon community, reaching out to families and individuals with the love of Christ.',
    services: [
      {
        id: 'sunday-worship',
        name: 'Sunday Worship Service',
        time: 'Contact for times',
        description: 'Gospel-centered worship and preaching',
        duration: 'Contact church',
        ageGroup: 'All Ages'
      },
      {
        id: 'midweek-service',
        name: 'Mid-week Service',
        time: 'Contact for times',
        description: 'Prayer and Bible study',
        duration: 'Contact church',
        ageGroup: 'All Ages'
      }
    ],
    ministries: [
      'Children\'s Ministry',
      'Youth Outreach',
      'Community Evangelism',
      'Family Ministry',
      'Prayer Groups',
      'Discipleship Training'
    ]
  },
  'friendship-gospel-gabaldon': {
    id: 'friendship-gospel-gabaldon',
    name: 'Friendship Gospel Baptist Mission of Gabaldon',
    description: 'Serving the community of Gabaldon with faithful biblical preaching and Christian discipleship.',
    fullDescription: 'Nestled in Brgy. Cuyapa, this mission church serves the Gabaldon community with passion and commitment. Ptr. Jayson Nablo leads this congregation in faithful ministry, focusing on biblical discipleship and community outreach to strengthen families and build lasting relationships centered on Christ.',
    image: '/friends-gospel-bible-church-mission-of-gabaldon.png',
    pastor: 'Ptr. Jayson Nablo',
    pastorImage: '/pastor-jayson-nablo.jpg',
    address: 'Brgy. Cuyapa Gabaldon Nueva Ecija',
    phone: 'Contact through Friends Connection',
    email: 'info@friendsconnection.org',
    serviceTime: 'Sundays - Contact for service times',
    history: 'This mission church represents the expanding reach of Friends Connection into rural communities, bringing the Gospel message and Christian fellowship to families in Gabaldon and surrounding areas.',
    services: [
      {
        id: 'sunday-service',
        name: 'Sunday Service',
        time: 'Contact for times',
        description: 'Worship and biblical teaching',
        duration: 'Contact church',
        ageGroup: 'All Ages'
      }
    ],
    ministries: [
      'Rural Evangelism',
      'Children\'s Programs',
      'Youth Ministry',
      'Adult Discipleship',
      'Community Outreach',
      'Family Support'
    ]
  },
  'good-shepherd-palayan': {
    id: 'good-shepherd-palayan',
    name: 'Good Shepherd Baptist Mission',
    description: 'A caring community following the Good Shepherd, providing spiritual guidance and fellowship in Palayan City.',
    fullDescription: 'True to its name, Good Shepherd Baptist Mission provides caring pastoral ministry to the people of Palayan City. Under the leadership of Ptr. Isagani (Jim) Dela Cruz, this church embodies the heart of the Good Shepherd, offering spiritual guidance, comfort, and community support to all who seek fellowship.',
    image: '/good-shepherd-baptist-mission.jpg',
    pastor: 'Ptr. Isagani (Jim) Dela Cruz',
    address: 'Palayan City',
    phone: 'Contact through Friends Connection',
    email: 'info@friendsconnection.org',
    serviceTime: 'Sundays - Contact for service times',
    history: 'Good Shepherd Baptist Mission has established itself as a beacon of hope in Palayan City, providing faithful ministry and community care that reflects the loving nature of Christ, the Good Shepherd.',
    services: [
      {
        id: 'worship-service',
        name: 'Worship Service',
        time: 'Contact for times',
        description: 'Shepherding ministry and worship',
        duration: 'Contact church',
        ageGroup: 'All Ages'
      }
    ],
    ministries: [
      'Pastoral Care',
      'Children\'s Ministry',
      'Youth Programs',
      'Adult Fellowship',
      'Community Service',
      'Counseling Ministry'
    ]
  },
  'shiloh-redeemer-taguig': {
    id: 'shiloh-redeemer-taguig',
    name: 'Shiloh Redeemer Baptist Church Inc.',
    description: 'A place of peace and redemption in the heart of Metro Manila, committed to worship and community service.',
    fullDescription: 'Located in the bustling city of Taguig, Shiloh Redeemer Baptist Church Inc. serves as an oasis of peace and spiritual renewal. Ptr. Rolando de Guzman leads this urban congregation in meaningful worship and community engagement, bringing the message of redemption to the heart of Metro Manila.',
    image: '/shiloh-redeemer-baptist-church.png',
    pastor: 'Ptr. Rolando de Guzman',
    address: 'Taguig City',
    phone: 'Contact through Friends Connection',
    email: 'info@friendsconnection.org',
    serviceTime: 'Sundays - Contact for service times',
    history: 'As an incorporated church in Metro Manila, Shiloh Redeemer has established itself as a place of spiritual refuge and community service, serving the diverse population of Taguig City with excellence and dedication.',
    services: [
      {
        id: 'sunday-worship',
        name: 'Sunday Worship',
        time: 'Contact for times',
        description: 'Urban ministry and worship',
        duration: 'Contact church',
        ageGroup: 'All Ages'
      }
    ],
    ministries: [
      'Urban Outreach',
      'Professional Ministry',
      'Youth & Young Adults',
      'Children\'s Church',
      'Community Development',
      'Workplace Ministry'
    ]
  },
  'born-again-quezon-city': {
    id: 'born-again-quezon-city',
    name: 'Born Again Baptist Bible Church',
    description: 'Celebrating new life in Christ and the transformative power of God\'s Word in Quezon City.',
    fullDescription: 'Located in the Holy Spirit area of Quezon City, this church celebrates the new birth experience and the transformative power of God\'s Word. Ptr. Carlito Gaña leads this congregation in enthusiastic worship and biblical teaching that emphasizes the born-again experience and Christian living.',
    image: '/born-again-baptist-bible-church.png',
    pastor: 'Ptr. Carlito Gaña',
    pastorImage: '/pastor-carlito-gana.jpg',
    address: 'Brgy. Holy Spirit, Quezon City',
    phone: 'Contact through Friends Connection',
    email: 'info@friendsconnection.org',
    serviceTime: 'Sundays - Contact for service times',
    history: 'Born Again Baptist Bible Church has been a witness to the transformative power of the Gospel in Quezon City, helping many discover new life in Christ and grow in their faith journey.',
    services: [
      {
        id: 'worship-service',
        name: 'Worship Service',
        time: 'Contact for times',
        description: 'Bible-based preaching and worship',
        duration: 'Contact church',
        ageGroup: 'All Ages'
      }
    ],
    ministries: [
      'New Believers Ministry',
      'Bible Study Groups',
      'Youth Ministry',
      'Children\'s Programs',
      'Evangelism Training',
      'Discipleship Classes'
    ]
  },
  'glorious-grace-bocaue': {
    id: 'glorious-grace-bocaue',
    name: 'Glorious Grace Baptist Church',
    description: 'Experiencing and sharing the glorious grace of God through worship, fellowship, and service in Bulacan.',
    fullDescription: 'In Brgy. Batia, Bocaue, this church magnifies the glorious grace of God in all its ministries. Ptr. Wilfredo (Jun) Jimenez leads this grace-centered congregation in worship that celebrates God\'s unmerited favor and in service that extends that grace to the community.',
    image: '/glorious-grace-baptist-church.png',
    pastor: 'Ptr. Wilfredo (Jun) Jimenez',
    pastorImage: '/pastor-wilfredo-jimenez.jpg',
    address: 'Brgy. Batia Bocaue Bulacan',
    phone: 'Contact through Friends Connection',
    email: 'info@friendsconnection.org',
    serviceTime: 'Sundays - Contact for service times',
    history: 'Glorious Grace Baptist Church has been a testimony to God\'s abundant grace in Bocaue, Bulacan, sharing the message of hope and salvation with families throughout the region.',
    services: [
      {
        id: 'grace-worship',
        name: 'Grace-Centered Worship',
        time: 'Contact for times',
        description: 'Celebrating God\'s amazing grace',
        duration: 'Contact church',
        ageGroup: 'All Ages'
      }
    ],
    ministries: [
      'Grace Teaching Ministry',
      'Children\'s Ministry',
      'Youth Fellowship',
      'Adult Bible Study',
      'Community Outreach',
      'Family Ministry'
    ]
  },
  'amazing-grace-san-pedro': {
    id: 'amazing-grace-san-pedro',
    name: 'Amazing Grace Bible Baptist Church',
    description: 'Proclaiming God\'s amazing grace and building faithful disciples in the community of San Pedro, Laguna.',
    fullDescription: 'Located in San Pedro, Laguna, this church is dedicated to proclaiming the amazing grace of God and building faithful disciples. Ptr. Felix Agustin leads this Bible-centered congregation in deep study of God\'s Word and practical application of Christian principles in daily life.',
    image: '/amazing-grace-bible-baptist-church.jpg',
    pastor: 'Ptr. Felix Agustin',
    pastorImage: '/pastor-felix-agustin.jpg',
    address: 'San Pedro, Laguna',
    phone: 'Contact through Friends Connection',
    email: 'info@friendsconnection.org',
    serviceTime: 'Sundays - Contact for service times',
    history: 'Amazing Grace Bible Baptist Church has established a strong foundation of biblical teaching in San Pedro, Laguna, helping believers grow in their understanding of God\'s amazing grace.',
    services: [
      {
        id: 'bible-worship',
        name: 'Bible-Centered Worship',
        time: 'Contact for times',
        description: 'In-depth biblical teaching and worship',
        duration: 'Contact church',
        ageGroup: 'All Ages'
      }
    ],
    ministries: [
      'Bible Study Ministry',
      'Discipleship Training',
      'Children\'s Bible Classes',
      'Youth Discipleship',
      'Adult Education',
      'Evangelism Outreach'
    ]
  },
  'dakilang-biyaya-bocaue': {
    id: 'dakilang-biyaya-bocaue',
    name: 'Dakilang Biyaya Baptist Church',
    description: 'Celebrating the great blessing of God and fostering spiritual growth in the Bocaue community.',
    fullDescription: 'Dakilang Biyaya (Great Blessing) Baptist Church celebrates God\'s abundant blessings in the lives of believers. Ptr. Rodolfo (Jun) Rivera leads this congregation in grateful worship and community service, recognizing God\'s faithfulness and sharing His blessings with others.',
    image: '/dakilang-biyaya-baptist-church.jpg',
    pastor: 'Ptr. Rodolfo (Jun) Rivera',
    pastorImage: '/rodolfo-jun-rivera.jpg',
    address: 'Bocaue Bulacan',
    phone: 'Contact through Friends Connection',
    email: 'info@friendsconnection.org',
    serviceTime: 'Sundays - Contact for service times',
    history: 'This church has been a source of blessing to the Bocaue community, living up to its name by being a great blessing to families and individuals through faithful ministry and community service.',
    services: [
      {
        id: 'blessing-worship',
        name: 'Thanksgiving Worship',
        time: 'Contact for times',
        description: 'Celebrating God\'s great blessings',
        duration: 'Contact church',
        ageGroup: 'All Ages'
      }
    ],
    ministries: [
      'Thanksgiving Ministry',
      'Children\'s Blessings',
      'Youth Programs',
      'Family Celebrations',
      'Community Service',
      'Stewardship Ministry'
    ]
  },
  'first-pilgrims-legaspi': {
    id: 'first-pilgrims-legaspi',
    name: 'First Pilgrims Faith Baptist Church',
    description: 'A faithful community of pilgrims journeying together in faith, serving the people of Legaspi City.',
    fullDescription: 'In Legaspi City, First Pilgrims Faith Baptist Church serves as a community of faithful pilgrims on their spiritual journey. Ptr. Pedro Gil (Bats) Batalla leads this congregation in their walk of faith, emphasizing the pilgrim nature of the Christian life and the importance of faithful endurance.',
    image: '/first-pilgrim-baptist-church.png',
    pastor: 'Ptr. Pedro Gil (Bats) Batalla',
    pastorImage: '/pastor-pedro-gil-batalla.jpg',
    address: 'Legaspi City',
    phone: 'Contact through Friends Connection',
    email: 'info@friendsconnection.org',
    serviceTime: 'Sundays - Contact for service times',
    history: 'As the first pilgrim church in the region, this congregation has pioneered faithful Christian witness in Legaspi City, establishing a strong foundation of faith and perseverance.',
    services: [
      {
        id: 'pilgrims-worship',
        name: 'Pilgrims\' Worship',
        time: 'Contact for times',
        description: 'Worship for the faith journey',
        duration: 'Contact church',
        ageGroup: 'All Ages'
      }
    ],
    ministries: [
      'Faith Journey Ministry',
      'Pilgrims\' Fellowship',
      'Children\'s Faith Formation',
      'Youth Discipleship',
      'Adult Faith Studies',
      'Mission Outreach'
    ]
  },
  'new-hope-mambangnan': {
    id: 'new-hope-mambangnan',
    name: 'New Hope Baptist Church',
    description: 'Bringing new hope to the community through the love of Christ and faithful biblical teaching.',
    fullDescription: 'New Hope Baptist Church in Mambangnan represents the fresh hope that comes through a relationship with Jesus Christ. Under the leadership of Ptr. Prince Matthew Barquilla, this church focuses on bringing hope to those who are hurting and helping people discover their purpose in God\'s plan.',
    image: '/new-hope-baptist-church.png',
    pastor: 'Ptr. Prince Matthew Barquilla',
    pastorImage: '/pastor-prince-barquilla.jpg',
    address: 'Mambangnan San Leonardo Nueva Ecija',
    phone: 'Contact through Friends Connection',
    email: 'info@friendsconnection.org',
    serviceTime: 'Sundays - Contact for service times',
    history: 'New Hope Baptist Church has been a beacon of hope in Mambangnan, offering fresh starts and new beginnings to individuals and families through the transforming power of the Gospel.',
    services: [
      {
        id: 'hope-worship',
        name: 'Hope-Centered Worship',
        time: 'Contact for times',
        description: 'Worship that brings new hope',
        duration: 'Contact church',
        ageGroup: 'All Ages'
      }
    ],
    ministries: [
      'Hope Ministry',
      'New Believers Classes',
      'Children\'s Hope Programs',
      'Youth Renewal',
      'Adult Recovery Groups',
      'Community Hope Outreach'
    ]
  }
};

interface ChurchPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ChurchPage({ params }: ChurchPageProps) {
  const { slug } = await params;
  const church = churchData[slug];

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
    { slug: 'international-baptist-pinellas' },
    { slug: 'living-water-baptist' },
    { slug: 'friendship-gospel-tabuating' },
    { slug: 'friendship-gospel-bongabon' },
    { slug: 'friendship-gospel-gabaldon' },
    { slug: 'good-shepherd-palayan' },
    { slug: 'shiloh-redeemer-taguig' },
    { slug: 'born-again-quezon-city' },
    { slug: 'glorious-grace-bocaue' },
    { slug: 'amazing-grace-san-pedro' },
    { slug: 'dakilang-biyaya-bocaue' },
    { slug: 'first-pilgrims-legaspi' },
    { slug: 'new-hope-mambangnan' }
  ];
}