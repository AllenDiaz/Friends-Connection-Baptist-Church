import ChurchDirectory from '@/components/ChurchDirectory';
import ChurchLogoMarquee from '@/components/ChurchLogoMarquee';
import { ChurchData } from '@/components/ChurchCard';

// Friends Connection Churches in the Philippines
const churches: ChurchData[] = [
  {
    id: 'international-baptist-pinellas',
    name: 'International Baptist Church of Pinellas INC',
    description: 'Serving the international community in Florida with biblical teaching and Christian fellowship.',
    image: '/international-baptist-church-of-pinellas.jpg',
    pastor: 'Ptr. Robert Young',
    pastorImage: '/pastor-robert-young.jpg',
    address: '5955 Park Blvd North Pinellas Park Florida, 33781',
    phone: 'Contact through Friends Connection',
    email: 'fcfjc.ministries@gmail.com',
    serviceTime: 'Sundays - Contact for service times'
  },
  {
    id: 'living-water-baptist',
    name: 'Living Water Baptist Church of Nueva Ecija',
    description: 'A vibrant community focused on biblical teaching and spiritual growth through the living water of Christ.',
    image: '/living-water-baptist-church.png',
    pastor: 'Rev. Alfredo Eborda',
    pastorImage: '/livig-water-baptist-church-pastor.jpg',
    address: 'Nieves, San Leonardo Nueva Ecija',
    phone: 'Contact through Friends Connection',
    email: 'fcfjc.ministries@gmail.com',
    serviceTime: 'Sundays - Contact for service times'
  },
  {
    id: 'friendship-gospel-tabuating',
    name: 'Friendship Gospel Bible Baptist Church',
    description: 'A foundational church of Friends Connection, committed to biblical teaching and community fellowship in Nueva Ecija.',
    image: '/friends-gospel-bible-church.png',
    pastor: 'Ptr. Roberto Pascual',
    pastorImage: '/pastor-robert-pascual.png',
    address: 'Tabuating, San Leonardo Nueva Ecija',
    phone: 'Contact through Friends Connection',
    email: 'fcfjc.ministries@gmail.com',
    serviceTime: 'Sundays - Contact for service times'
  },
  {
    id: 'friendship-gospel-bongabon',
    name: 'Friendship Gospel Baptist Church Mission of Bongabon',
    description: 'A mission church dedicated to spreading the Gospel and building strong Christian community in Bongabon.',
    image: '/friends-gospel-bible-church-mission-of-bongabon.png',
    pastor: 'Ptr. Rayner Osuna',
    pastorImage: '/pastor-rayner-osuna.jpg',
    address: 'Brgy. Sisilang Bongabon Nueva Ecija',
    phone: 'Contact through Friends Connection',
    email: 'fcfjc.ministries@gmail.com',
    serviceTime: 'Sundays - Contact for service times'
  },
  {
    id: 'friendship-gospel-gabaldon',
    name: 'Friendship Gospel Baptist Mission of Gabaldon',
    description: 'Serving the community of Gabaldon with faithful biblical preaching and Christian discipleship.',
    image: '/friends-gospel-bible-church-mission-of-gabaldon.png',
    pastor: 'Ptr. Jayson Nablo',
    pastorImage: '/pastor-jayson-nablo.jpg',
    address: 'Brgy. Cuyapa Gabaldon Nueva Ecija',
    phone: 'Contact through Friends Connection',
    email: 'fcfjc.ministries@gmail.com',
    serviceTime: 'Sundays - Contact for service times'
  },
  {
    id: 'good-shepherd-palayan',
    name: 'Good Shepherd Baptist Church',
    description: 'A caring community following the Good Shepherd, providing spiritual guidance and fellowship in Palayan City.',
    image: '/good-shepherd-baptist-mission.jpg',
    pastor: 'Ptr. Isagani (Jim) Dela Cruz',
    pastorImage: '/pastor-isagani-dela-cruz.jpg',
    address: 'Palayan City',
    phone: 'Contact through Friends Connection',
    email: 'fcfjc.ministries@gmail.com',
    serviceTime: 'Sundays - Contact for service times'
  },
  {
    id: 'shiloh-redeemer-taguig',
    name: 'Shiloh Redeemer Baptist Church Inc.',
    description: 'A place of peace and redemption in the heart of Metro Manila, committed to worship and community service.',
    image: '/shiloh-redeemer-baptist-church.png',
    pastor: 'Ptr. Rolly de Guzman',
    pastorImage: '/pastor-rolly-de-guzman.jpg',
    address: 'Taguig City',
    phone: 'Contact through Friends Connection',
    email: 'fcfjc.ministries@gmail.com',
    serviceTime: 'Sundays - Contact for service times'
  },
  {
    id: 'born-again-quezon-city',
    name: 'Born Again Baptist Bible Church',
    description: 'Celebrating new life in Christ and the transformative power of God\'s Word in Quezon City.',
    image: '/born-again-baptist-bible-church.png',
    pastor: 'Ptr. Carlito Gaña',
    pastorImage: '/pastor-carlito-gana.jpg',
    address: 'Brgy. Holy Spirit, Quezon City',
    phone: 'Contact through Friends Connection',
    email: 'fcfjc.ministries@gmail.com',
    serviceTime: 'Sundays - Contact for service times'
  },
  {
    id: 'glorious-grace-bocaue',
    name: 'Glorious Grace Baptist Church',
    description: 'Experiencing and sharing the glorious grace of God through worship, fellowship, and service in Bulacan.',
    image: '/glorious-grace-baptist-church.png',
    pastor: 'Ptr. Wilfredo (Jun) Jimenez',
    pastorImage: '/pastor-wilfredo-jimenez.jpg',
    address: 'Brgy. Batia Bocaue Bulacan',
    phone: 'Contact through Friends Connection',
    email: 'fcfjc.ministries@gmail.com',
    serviceTime: 'Sundays - Contact for service times'
  },
  {
    id: 'amazing-grace-san-pedro',
    name: 'Amazing Grace Bible Baptist Church',
    description: 'Proclaiming God\'s amazing grace and building faithful disciples in the community of San Pedro, Laguna.',
    image: '/amazing-grace-bible-baptist-church.jpg',
    pastor: 'Ptr. Felix Agustin',
    pastorImage: '/pastor-felix-agustin.jpg',
    address: 'San Pedro, Laguna',
    phone: 'Contact through Friends Connection',
    email: 'fcfjc.ministries@gmail.com',
    serviceTime: 'Sundays - Contact for service times'
  },
  {
    id: 'dakilang-biyaya-bocaue',
    name: 'Dakilang Biyaya Baptist Church',
    description: 'Celebrating the great blessing of God and fostering spiritual growth in the Bocaue community.',
    image: '/dakilang-biyaya-baptist-church.jpg',
    pastor: 'Ptr. Rodolfo (Jun) Rivera',
    pastorImage: '/rodolfo-jun-rivera.jpg',
    address: 'Bocaue Bulacan',
    phone: 'Contact through Friends Connection',
    email: 'fcfjc.ministries@gmail.com',
    serviceTime: 'Sundays - Contact for service times'
  },
  {
    id: 'first-pilgrims-legaspi',
    name: 'First Pilgrims Faith Baptist Church',
    description: 'A faithful community of pilgrims journeying together in faith, serving the people of Legaspi City.',
    image: '/first-pilgrim-baptist-church.png',
    pastor: 'Ptr. Pedro Gil (Bats) Batalla',
    pastorImage: '/pastor-pedro-gil-batalla.jpg',
    address: 'Legaspi City',
    phone: 'Contact through Friends Connection',
    email: 'fcfjc.ministries@gmail.com',
    serviceTime: 'Sundays - Contact for service times'
  },
  {
    id: 'new-hope-mambangnan',
    name: 'New Hope Baptist Church',
    description: 'Bringing new hope to the community through the love of Christ and faithful biblical teaching.',
    image: '/new-hope-baptist-church.png',
    pastor: 'Ptr. Prince Matthew Barquilla',
    pastorImage: '/pastor-prince-barquilla.jpg',
    address: 'Mambangnan San Leonardo Nueva Ecija',
    phone: 'Contact through Friends Connection',
    email: 'fcfjc.ministries@gmail.com',
    serviceTime: 'Sundays - Contact for service times'
  },
  {
    id: 'moriah-baptist',
    name: 'Moriah Baptist Church',
    description: 'A vibrant community of believers dedicated to worship, discipleship, and serving our community with the love of Christ.',
    image: '/moriah-baptist-church.jpeg',
    pastor: 'Ptr. Alex Castro',
    pastorImage: '/pastor-alex-castro.jpeg',
    address: 'Bocaue Bulacan',
    phone: 'Contact through Friends Connection',
    email: 'fcfjc.ministries@gmail.com',
    serviceTime: 'Sundays - Contact for service times'
  }
];

export default function ChurchesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Friends Connection Churches</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover our 14 Baptist churches across the Philippines and USA, united in faith and committed to spreading 
            the Gospel throughout Nueva Ecija, Metro Manila, Bulacan, Laguna, Legaspi City, and Florida.
          </p>
        </div>
      </section>

      {/* Church Logo Marquee */}
      <ChurchLogoMarquee churches={churches} speed={40} />

      {/* Church Directory */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ChurchDirectory churches={churches} />
        </div>
      </section>
    </div>
  );
}
