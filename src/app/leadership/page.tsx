import LeadershipCard from '@/components/LeadershipCard';
import { LeaderData } from '@/components/LeadershipCard';
import LeadershipTeam from '@/components/LeadershipTeam';
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

const leadershipGroups = [
  {
    title: 'Friends Connection for Jesus Christ Ministries International - Officers',
    officers: [
      { 
        name: 'Rev. & Mrs. Alfredo Eborda Jr.', 
        position: 'Founder/President',
        image: '/international-leaders/international-leader-alfredo-eborda.jpeg',
        description: 'Rev. Alfredo Eborda Jr. and his wife Jing Eborda serve as founding leaders guiding the international vision and strategic direction of Friends Connection ministry worldwide.'
      },
      { 
        name: 'Rev. Timothy Lee Young', 
        position: 'International Coordinator',
        image: '/international-leaders/international-leader-timothy-young.jpeg',
        description: 'Coordinating global ministry efforts and fostering partnerships across international churches and missions.'
      },
      { 
        name: 'Engr. Pem Nelmida', 
        position: 'Financial Officer',
        image: '/international-leaders/international-leader-pem-nelmida.jpeg',
        description: 'Managing international finances with integrity and ensuring responsible stewardship of ministry resources.'
      },
      { 
        name: 'Mrs. Courteney Young', 
        position: 'FcfJCM - Secretary',
        image: '/international-leaders/international-leader-courteney-young.jpeg',
        description: 'Maintaining organizational records and facilitating effective communication within the international ministry.'
      },
    ]
  },
  {
    title: 'Friends Connection for Jesus Christ Ministries Philippines - Officers',
    officers: [
      { 
        name: 'Rev. & Mrs. Alfredo Eborda Jr.', 
        position: 'Founder/President',
        image: '/philippine-leaders/philippine-leader-alfredo-eborda.jpeg',
        description: 'Rev. Alfredo Eborda Jr. and his wife Jing Eborda serve as founding leaders with a heart for Philippine ministries, guiding local churches and pastors with wisdom and dedication.'
      },
      { 
        name: 'Rev. Timothy Lee Young', 
        position: 'International Coordinator',
        image: '/philippine-leaders/philippine-leader-timothy-young.jpeg',
        description: 'Bridging international partnerships and coordinating ministry efforts between Philippine and global church networks.'
      },
      { 
        name: 'Ptr. Rolando De Guzman', 
        position: 'National Coordinator',
        image: '/philippine-leaders/philippine-leader-rolando-de-guzman.jpg',
        description: 'Overseeing national operations and coordinating church activities throughout the Philippines with pastoral care.'
      },
      { 
        name: 'Ms. Lilia Dela Cruz', 
        position: 'Secretary',
        image: '/philippine-leaders/philippine-leader-lilia-delacruz.jpeg',
        description: 'Managing administrative duties and maintaining clear communication across all Philippine ministry operations.'
      },
      { 
        name: 'Mrs. Myrna Pascual', 
        position: 'Treasurer',
        image: '/philippine-leaders/philippine-leader-myrna-pascual.jpeg',
        description: 'Stewarding financial resources with integrity to support Philippine churches and ministry initiatives.'
      },
    ]
  },
  {
    title: 'FCfJCM Ministries Coordinators',
    officers: [
      { 
        name: 'Rev. Wilfredo Jimenez', 
        position: 'Bulacan Coordinator & Bible School Coordinator',
        image: '/ministries-coordinators/mc-pastor-wilfredo-jimenez.jpg',
        description: 'Leading church ministries in Bulacan and coordinating Bible school programs to equip believers for effective ministry.'
      },
      { 
        name: 'Rev. Roberto Pascual', 
        position: 'Nueva Ecija Coordinator',
        image: '/ministries-coordinators/mc-pastor-robert-pascual.png',
        description: 'Overseeing church planting and ministry development throughout Nueva Ecija province with pastoral care.'
      },
      { 
        name: 'Pastor Jayson Nablo', 
        position: 'Youth and Camp Ministry Coordinator',
        image: '/ministries-coordinators/mc-pastor-jayson-nablo.jpg',
        description: 'Empowering the next generation through dynamic youth programs and impactful camp ministries.'
      },
      { 
        name: 'Bro. Andrew Aquino', 
        position: 'Youth and Camp Ministry Coordinator',
        image: '/ministries-coordinators/mc-andrew-aquino.jpeg',
        description: 'Supporting youth ministry and coordinating camp activities that inspire young people to grow in their faith.'
      },
      { 
        name: 'Rev. Rolando De Guzman', 
        position: 'Church Planting Coordinator',
        image: '/ministries-coordinators/mc-rev-rolando-de-guzman.jpg',
        description: 'Strategically planting new churches and establishing Gospel-centered communities across the Philippines.'
      },
      { 
        name: "Ma'am Andrea Soliman", 
        position: 'Women Fellowship & Ministry Coordinator',
        image: '/ministries-coordinators/mc-annie-soliman.jpeg',
        description: 'Nurturing women through fellowship, discipleship, and ministry opportunities that build strong faith communities.'
      },
      { 
        name: "Ma'am Myrna Pascual", 
        position: 'Women Fellowship & Ministry Coordinator',
        image: '/ministries-coordinators/mc-myrna-pascual.jpeg',
        description: 'Leading women\'s ministry initiatives and fostering spiritual growth through fellowship and discipleship programs.'
      },
      { 
        name: 'Rev. Isagani Dela Cruz', 
        position: 'Men Fellowship & Ministry Coordinator',
        image: '/ministries-coordinators/mc-rev-isagani-dela-cruz.jpg',
        description: 'Equipping men to be spiritual leaders in their families, churches, and communities through fellowship and ministry.'
      },
      { 
        name: 'Bro. Alvin Soliman', 
        position: 'Men Fellowship & Ministry Coordinator',
        image: '/ministries-coordinators/mc-alvin-soliman.jpeg',
        description: 'Supporting men\'s ministry and encouraging brothers in Christ to grow in their faith and leadership.'
      },
      { 
        name: 'Pastor Julius Corpus & Cherry Ann Corpus', 
        position: 'Children Ministry Coordinators',
        image: '/ministries-coordinators/mc-corpus.jpeg',
        description: 'A dedicated husband and wife team nurturing young hearts and teaching children the love of Christ through creative ministry.'
      },
    ]
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

      {/* Leadership Team Section */}
      <LeadershipTeam groups={leadershipGroups} />

      {/* Ministry Leadership */}
      <section className="py-16 bg-gray-50">
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