import LeadershipCard from '@/components/LeadershipCard';
import { LeaderData } from '@/components/LeadershipCard';

const leaders: LeaderData[] = [
  {
    id: 'executive-director',
    name: 'Rev. Dr. James Thompson',
    position: 'Executive Director, Friends Connection Ministry',
    bio: 'With over 20 years of ministry experience, Rev. Dr. Thompson leads our ministry network with passion for unity and community outreach. He holds a Doctor of Ministry from Seminary University and has been instrumental in establishing partnerships across our member churches.',
    email: 'james.thompson@friendsconnection.org',
    phone: '(555) 123-4567'
  },
  {
    id: 'associate-director',
    name: 'Pastor Maria Rodriguez',
    position: 'Associate Director & Youth Ministry Coordinator',
    bio: 'Pastor Rodriguez oversees our youth and young adult ministries across all five churches. Her innovative programs have reached over 200 young people in our community. She specializes in cross-cultural ministry and community engagement.',
    email: 'maria.rodriguez@friendsconnection.org',
    phone: '(555) 234-5678'
  },
  {
    id: 'outreach-director',
    name: 'Deacon Robert Wilson',
    position: 'Community Outreach Director',
    bio: 'Deacon Wilson coordinates our community service initiatives and disaster relief efforts. Under his leadership, our ministry has provided food, clothing, and emergency assistance to thousands of families in need.',
    email: 'robert.wilson@friendsconnection.org',
    church: 'Solid Rocks Baptist Church'
  },
  {
    id: 'worship-coordinator',
    name: 'Minister Jennifer Lee',
    position: 'Worship & Music Coordinator',
    bio: 'Minister Lee brings our churches together through music and worship. She organizes joint worship services, coordinates our annual ministry conference, and leads our combined choir of 80+ voices.',
    email: 'jennifer.lee@friendsconnection.org',
    church: 'Faith Community Church'
  },
  {
    id: 'pastor-john-smith',
    name: 'Pastor John Smith',
    position: 'Pastor, Living Water Baptist Church',
    bio: 'Pastor Smith has served Living Water Baptist Church for 15 years, leading the congregation in spiritual growth and community impact. He also serves on the Friends Connection Ministry board and coordinates our pastoral care network.',
    image: '/livig-water-baptist-church-pastor.jpg',
    email: 'john.smith@livingwaterbaptist.org',
    church: 'Living Water Baptist Church'
  },
  {
    id: 'pastor-michael-johnson',
    name: 'Pastor Michael Johnson',
    position: 'Pastor, Solid Rocks Baptist Church',
    bio: 'Pastor Johnson brings 12 years of pastoral experience to Solid Rocks Baptist Church. He is passionate about discipleship and family ministry, leading initiatives that strengthen families across our ministry network.',
    email: 'michael.johnson@solidrocksbaptist.org',
    church: 'Solid Rocks Baptist Church'
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
            Meet the dedicated leaders who guide Friends Connection Ministry and our member churches 
            in faithful service to God and our communities.
          </p>
        </div>
      </section>

      {/* Ministry Leadership */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Ministry Leadership</h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
              These leaders provide oversight and coordination for our network of churches, 
              ensuring unity in mission while celebrating the unique character of each congregation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {leaders.filter(leader => 
              leader.position.includes('Director') || leader.position.includes('Coordinator')
            ).map((leader) => (
              <LeadershipCard key={leader.id} leader={leader} />
            ))}
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Church Pastors</h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
              Our pastors serve their local congregations while working together to advance 
              the kingdom of God throughout our community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.filter(leader => 
              leader.position.includes('Pastor')
            ).map((leader) => (
              <LeadershipCard key={leader.id} leader={leader} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Interested in Leadership?</h2>
          <p className="text-lg text-gray-600 mb-8">
            We&apos;re always looking for faithful servants to join our ministry teams. 
            Whether you feel called to local church leadership or ministry-wide service, 
            we&apos;d love to talk with you about opportunities to serve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              Contact Leadership
            </a>
            <a 
              href="/ministries" 
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
            >
              Explore Ministries
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}