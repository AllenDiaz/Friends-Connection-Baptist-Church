'use client';

import Hero from '@/components/Hero';
import ChurchDirectory from '@/components/ChurchDirectory';
import ChurchLogoMarquee from '@/components/ChurchLogoMarquee';
import { ChurchData } from '@/components/ChurchCard';
import { useState } from 'react';
import Link from 'next/link';

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
    email: 'info@friendsconnection.org',
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
    email: 'info@friendsconnection.org',
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
    email: 'info@friendsconnection.org',
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
    email: 'info@friendsconnection.org',
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
    email: 'info@friendsconnection.org',
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
    email: 'info@friendsconnection.org',
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
    email: 'info@friendsconnection.org',
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
    email: 'info@friendsconnection.org',
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
    email: 'info@friendsconnection.org',
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
    email: 'info@friendsconnection.org',
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
    email: 'info@friendsconnection.org',
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
    email: 'info@friendsconnection.org',
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
    email: 'info@friendsconnection.org',
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
    email: 'info@friendsconnection.org',
    serviceTime: 'Sundays - Contact for service times'
  }
];


export default function Home() {
  const [showAllChurches, setShowAllChurches] = useState(false);
  
  // Show first 6 churches initially, all when expanded
  const displayedChurches = showAllChurches ? churches : churches.slice(0, 6);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <Hero />

      {/* Mission, Vision & Goals Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission, Vision & Goals
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover what drives Friends Connection in our commitment to serving missionaries and pastors across the Philippines
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission Card */}
            <div className="bg-blue-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">M</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To give God all the glory and honors as we endeavor together with pastors and missionaries
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-purple-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">V</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To help our co-laborers of the Lord to grow their ministry by having their needs met
              </p>
            </div>

            {/* About Us Card */}
            <div className="bg-green-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">A</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">About Us</h3>
              <p className="text-gray-700 leading-relaxed">
                We are friends helping to meet the needs of our missionary friends serving the Lord in difficult places through the contribution and helps of our able friends
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Church Logo Marquee */}
      <ChurchLogoMarquee churches={churches} speed={40} />

      {/* Ministry Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Friends Connection Ministry Impact</h2>
            <p className="text-lg text-gray-600">Spreading the Gospel across the Philippines through Baptist churches</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">13</div>
              <p className="text-gray-700 font-medium">Baptist Churches</p>
              <p className="text-sm text-gray-500">Across the Philippines & USA</p>
            </div>
            
            <div className="p-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">20</div>
              <p className="text-gray-700 font-medium">Dedicated Pastors</p>
              <p className="text-sm text-gray-500">Serving their communities</p>
            </div>
            
            <div className="p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">5</div>
              <p className="text-gray-700 font-medium">Provinces Served</p>
              <p className="text-sm text-gray-500">Nueva Ecija, Metro Manila, Bulacan, Laguna, Albay</p>
            </div>
            
            <div className="p-6">
              <div className="text-4xl font-bold text-orange-600 mb-2">∞</div>
              <p className="text-gray-700 font-medium">Lives Transformed</p>
              <p className="text-sm text-gray-500">Through God&apos;s grace</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Churches Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ChurchDirectory churches={displayedChurches} />
          
          {/* Show More/Less Button */}
          {churches.length > 6 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAllChurches(!showAllChurches)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                {showAllChurches ? (
                  <>
                    Show Less Churches
                    <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </>
                ) : (
                  <>
                    Show All {churches.length} Churches
                    <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Ministry Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Ministry Programs</h2>
            <p className="text-lg text-gray-600">Serving communities through Christ-centered ministries</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                id: "bible-basketball",
                title: "Bible Basketball", 
                desc: "Combining athletic excellence with spiritual growth through faith-based basketball programs",
                image: "/ministries/bible-basketball/basketball-1.jpeg"
              },
              { 
                id: "indigenous-evangelism",
                title: "Indigenous Evangelism", 
                desc: "Reaching indigenous communities with culturally sensitive ministry and Gospel support",
                image: "/ministries/indigenous-evangelism/indigenous-1.jpg"
              },
              { 
                id: "bible-school",
                title: "Bible School", 
                desc: "Equipping believers with biblical knowledge through systematic theology and ministry training",
                image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80"
              },
              { 
                id: "medical-mission",
                title: "Medical Mission", 
                desc: "Providing healthcare services and medical support combined with compassionate spiritual care",
                image: "/ministries/medical-mission/medical-1.jpg"
              }
            ].map((ministry, index) => (
              <Link 
                key={index} 
                href={`/ministries/${ministry.id}`}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 bg-gray-200">
                  <img
                    src={ministry.image}
                    alt={ministry.title}
                    className={`w-full h-full object-cover ${ministry.id === 'medical-mission' ? 'object-top' : ''}`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{ministry.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{ministry.desc}</p>
                  <span className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Learn More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
