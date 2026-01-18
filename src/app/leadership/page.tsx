import LeadershipCard from '@/components/LeadershipCard';
import { LeaderData } from '@/components/LeadershipCard';
import Link from 'next/link';

const leaders: LeaderData[] = [
  {
    id: 'robert-young',
    name: 'Ptr. Robert Young',
    position: 'Pastor, International Baptist Church of Pinellas INC',
    bio: 'Ptr. Robert Young serves as the pastor of International Baptist Church of Pinellas INC in Florida, bringing biblical teaching and Christian fellowship to the diverse international community of Pinellas Park.',
    image: '/pastor-robert-young.jpg',
    church: 'International Baptist Church of Pinellas INC'
  },
  {
    id: 'alfredo-eborda',
    name: 'Rev. Alfredo Eborda',
    position: 'Pastor, Living Water Baptist Church of Nueva Ecija',
    bio: 'Rev. Alfredo Eborda leads Living Water Baptist Church with dedication and love, bringing spiritual nourishment through the living water of Christ to the community of Nieves, San Leonardo.',
    image: '/living-water-baptist-church-pastor.jpg',
    church: 'Living Water Baptist Church of Nueva Ecija'
  },
  {
    id: 'roberto-pascual',
    name: 'Ptr. Roberto Pascual',
    position: 'Pastor, Friendship Gospel Bible Baptist Church',
    bio: 'As pastor of one of the founding churches of Friends Connection, Ptr. Roberto Pascual leads Friendship Gospel Bible Baptist Church in Tabuating with faithful biblical teaching and community fellowship.',
    image: '/pastor-robert-pascual.png',
    church: 'Friendship Gospel Bible Baptist Church'
  },
  {
    id: 'rayner-osuna',
    name: 'Ptr. Rayner Osuna',
    position: 'Pastor, Friendship Gospel Baptist Church Mission of Bongabon',
    bio: 'Ptr. Rayner Osuna serves as pastor of the mission church in Bongabon, dedicated to spreading the Gospel and building strong Christian community in Brgy. Sisilang.',
    image: '/pastor-rayner-osuna.jpg',
    church: 'Friendship Gospel Baptist Church Mission of Bongabon'
  },
  {
    id: 'jayson-nablo',
    name: 'Ptr. Jayson Nablo',
    position: 'Pastor, Friendship Gospel Baptist Mission of Gabaldon',
    bio: 'Ptr. Jayson Nablo leads the mission church in Gabaldon with passion and commitment, focusing on biblical discipleship and community outreach in Brgy. Cuyapa.',
    image: '/pastor-jayson-nablo.jpg',
    church: 'Friendship Gospel Baptist Mission of Gabaldon'
  },
  {
    id: 'carlito-gana',
    name: 'Ptr. Carlito Gaña',
    position: 'Pastor, Born Again Baptist Bible Church',
    bio: 'Ptr. Carlito Gaña leads Born Again Baptist Bible Church in Quezon City with enthusiastic worship and biblical teaching that emphasizes the born-again experience and Christian living.',
    image: '/pastor-carlito-gana.jpg',
    church: 'Born Again Baptist Bible Church'
  },
  {
    id: 'wilfredo-jimenez',
    name: 'Ptr. Wilfredo (Jun) Jimenez',
    position: 'Pastor, Glorious Grace Baptist Church',
    bio: 'Ptr. Wilfredo (Jun) Jimenez leads Glorious Grace Baptist Church in Bocaue, Bulacan, magnifying the glorious grace of God through worship and community service.',
    image: '/pastor-wilfredo-jimenez.jpg',
    church: 'Glorious Grace Baptist Church'
  },
  {
    id: 'felix-agustin',
    name: 'Ptr. Felix Agustin',
    position: 'Pastor, Amazing Grace Bible Baptist Church',
    bio: 'Ptr. Felix Agustin serves as pastor of Amazing Grace Bible Baptist Church in San Pedro, Laguna, leading the congregation in deep study of God\'s Word and practical Christian living.',
    image: '/pastor-felix-agustin.jpg',
    church: 'Amazing Grace Bible Baptist Church'
  },
  {
    id: 'rodolfo-rivera',
    name: 'Ptr. Rodolfo (Jun) Rivera',
    position: 'Pastor, Dakilang Biyaya Baptist Church',
    bio: 'Ptr. Rodolfo (Jun) Rivera leads Dakilang Biyaya Baptist Church in Bocaue, Bulacan, celebrating God\'s abundant blessings through grateful worship and community service.',
    image: '/rodolfo-jun-rivera.jpg',
    church: 'Dakilang Biyaya Baptist Church'
  },
  {
    id: 'pedro-gil-batalla',
    name: 'Ptr. Pedro Gil (Bats) Batalla',
    position: 'Pastor, First Pilgrims Faith Baptist Church',
    bio: 'Ptr. Pedro Gil (Bats) Batalla serves the community of Legaspi City as pastor of First Pilgrims Faith Baptist Church, emphasizing the pilgrim nature of the Christian life and faithful endurance.',
    image: '/pastor-pedro-gil-batalla.jpg',
    church: 'First Pilgrims Faith Baptist Church'
  },
  {
    id: 'prince-barquilla',
    name: 'Ptr. Prince Matthew Barquilla',
    position: 'Pastor, New Hope Baptist Church',
    bio: 'Ptr. Prince Matthew Barquilla leads New Hope Baptist Church in Mambangnan, bringing fresh hope through Christ and helping people discover their purpose in God\'s plan.',
    image: '/pastor-prince-barquilla.jpg',
    church: 'New Hope Baptist Church'
  },
  {
    id: 'isagani-dela-cruz',
    name: 'Ptr. Isagani (Jim) Dela Cruz',
    position: 'Pastor, Good Shepherd Baptist Church',
    bio: 'Ptr. Isagani (Jim) Dela Cruz provides caring pastoral ministry to the people of Palayan City, embodying the heart of the Good Shepherd through spiritual guidance and community support.',
    image: '/pastor-isagani-dela-cruz.jpg',
    church: 'Good Shepherd Baptist Church'
  },
  {
    id: 'rolando-de-guzman',
    name: 'Ptr. Rolly de Guzman',
    position: 'Pastor, Shiloh Redeemer Baptist Church Inc.',
    bio: 'Ptr. Rolly de Guzman leads Shiloh Redeemer Baptist Church Inc. in Taguig City, bringing the message of redemption and peace to the urban community of Metro Manila.',
    image: '/pastor-rolly-de-guzman.jpg',
    church: 'Shiloh Redeemer Baptist Church Inc.'
  },
  {
    id: 'pastor-alex',
    name: 'Ptr. Alex Castro',
    position: 'Pastor, Moriah Baptist Church',
    bio: 'Ptr. Alex Castro leads Moriah Baptist Church with a heart for discipleship and community transformation. His ministry focuses on helping believers grow in their faith and make a lasting impact in their communities through the love of Christ.',
    image: '/pastor-alex-castro.jpeg',
    church: 'Moriah Baptist Church'
  }
];

export default function LeadershipPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Leadership Team</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Meet the dedicated pastors who lead Friends Connection churches in faithful service to God 
            and our communities across the Philippines and USA.
          </p>
        </div>
      </section>

      {/* Ministry Leadership */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Church Pastors</h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
              Meet the dedicated pastors who lead our 14 Baptist churches across the Philippines and USA, 
              serving their local congregations while working together to advance the kingdom of God throughout our communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader) => (
              <LeadershipCard key={leader.id} leader={leader} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Connect With Our Churches</h2>
          <p className="text-lg text-gray-600 mb-8">
            We invite you to visit one of our churches and experience the warmth of Christian fellowship. 
            Each church offers unique ministries while sharing our commitment to biblical teaching and community service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/churches" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              Find a Church
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}