import MinistryCard from '@/components/MinistryCard';
import { MinistryData } from '@/components/MinistryCard';

const ministries: MinistryData[] = [
  {
    id: 'youth-ministry',
    name: 'Youth & Young Adults Ministry',
    description: 'Empowering the next generation through dynamic programs that build faith, character, and leadership across all our member churches.',
    leader: 'Pastor Maria Rodriguez',
    schedule: 'Fridays 6:30 PM, Sundays 10:00 AM',
    location: 'Rotating between churches',
    participatingChurches: ['Living Water Baptist', 'Solid Rocks Baptist', 'Faith Community', 'Grace Covenant', 'New Hope Fellowship'],
    contactEmail: 'youth@friendsconnection.org'
  },
  {
    id: 'childrens-ministry',
    name: 'Children\'s Ministry Network',
    description: 'Nurturing young hearts with biblical foundations through coordinated programs and shared resources across our churches.',
    leader: 'Minister Sarah Johnson',
    schedule: 'Sundays during services, Wednesdays 6:00 PM',
    participatingChurches: ['Living Water Baptist', 'Solid Rocks Baptist', 'Faith Community', 'Grace Covenant', 'New Hope Fellowship'],
    contactEmail: 'children@friendsconnection.org'
  },
  {
    id: 'community-outreach',
    name: 'Community Outreach Initiative',
    description: 'United in service to our community through food banks, homeless shelter support, and disaster relief efforts.',
    leader: 'Deacon Robert Wilson',
    schedule: 'Saturdays 9:00 AM, Special events monthly',
    location: 'Various community locations',
    participatingChurches: ['Living Water Baptist', 'Solid Rocks Baptist', 'Faith Community', 'Grace Covenant', 'New Hope Fellowship'],
    contactEmail: 'outreach@friendsconnection.org'
  },
  {
    id: 'womens-fellowship',
    name: 'Women\'s Fellowship Network',
    description: 'Building sisterhood across our churches through Bible study, prayer, and mutual support for women of all ages.',
    leader: 'Mrs. Patricia Davis',
    schedule: 'Second Saturday each month, 10:00 AM',
    participatingChurches: ['Living Water Baptist', 'Faith Community', 'Grace Covenant', 'New Hope Fellowship'],
    contactEmail: 'women@friendsconnection.org'
  },
  {
    id: 'mens-ministry',
    name: 'Men\'s Ministry Brotherhood',
    description: 'Strengthening fathers, husbands, and leaders through fellowship, accountability, and service projects.',
    leader: 'Mr. David Thompson',
    schedule: 'First Saturday each month, 8:00 AM',
    participatingChurches: ['Living Water Baptist', 'Solid Rocks Baptist', 'Grace Covenant'],
    contactEmail: 'men@friendsconnection.org'
  },
  {
    id: 'senior-ministry',
    name: 'Senior Saints Ministry',
    description: 'Honoring the wisdom and continued service of our senior members through fellowship and ministry opportunities.',
    leader: 'Pastor Emeritus Dr. Charles Brown',
    schedule: 'Third Thursday each month, 2:00 PM',
    participatingChurches: ['Living Water Baptist', 'Solid Rocks Baptist', 'Faith Community', 'New Hope Fellowship'],
    contactEmail: 'seniors@friendsconnection.org'
  }
];

export default function Ministries() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Ministry Programs</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Connecting people across our churches through shared ministries that serve all ages and life stages
            </p>
          </div>
        </div>
      </section>

      {/* Ministry Programs Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((ministry) => (
              <MinistryCard key={ministry.id} ministry={ministry} />
            ))}
          </div>
        </div>
      </section>

      {/* How We Connect */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Our Ministries Connect</h2>
            <p className="text-lg text-gray-600">
              Our unique approach brings together members from all five churches for shared ministry experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Shared Leadership</h3>
              <p className="text-gray-700">
                Ministry leaders coordinate across churches to provide consistent, 
                quality programs that serve our entire community.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Rotating Locations</h3>
              <p className="text-gray-700">
                Many programs rotate between churches, giving members opportunities 
                to experience different worship styles and community settings.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💪</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Combined Resources</h3>
              <p className="text-gray-700">
                By pooling our resources and talents, we can offer programs and 
                opportunities that no single church could provide alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Involved?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            There's a place for everyone to grow, serve, and make a difference across our ministry network. 
            Find where you belong in our church family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Contact Ministry Leaders
            </a>
            <a 
              href="/churches" 
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Find Your Church
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}