import Hero from '@/components/Hero';
import ChurchDirectory from '@/components/ChurchDirectory';
import { ChurchData } from '@/components/ChurchCard';

// Sample data for the churches
const churches: ChurchData[] = [
  {
    id: 'living-water-baptist',
    name: 'Living Water Baptist Church',
    description: 'A vibrant community focused on biblical teaching and spiritual growth through the living water of Christ.',
    image: '/living-water-baptist-church.png',
    pastor: 'Pastor John Smith',
    address: '123 Faith Avenue, Springfield, IL 62701',
    phone: '(555) 123-4567',
    email: 'info@livingwaterbaptist.org',
    serviceTime: 'Sundays 9:00 AM & 11:00 AM',
    members: 300,
    website: 'https://livingwaterbaptist.org'
  },
  {
    id: 'solid-rocks-baptist',
    name: 'Solid Rocks Baptist Church',
    description: 'Built on the solid rock of Jesus Christ, we are a family church welcoming all to experience God\'s love.',
    pastor: 'Pastor Michael Johnson',
    address: '456 Rock Street, Springfield, IL 62702',
    phone: '(555) 234-5678',
    email: 'contact@solidrocksbaptist.org',
    serviceTime: 'Sundays 10:30 AM',
    members: 200
  },
  {
    id: 'faith-community',
    name: 'Faith Community Church',
    description: 'A diverse community united in faith, committed to worship, fellowship, and serving our neighbors.',
    pastor: 'Pastor Sarah Williams',
    address: '789 Community Blvd, Springfield, IL 62703',
    phone: '(555) 345-6789',
    email: 'hello@faithcommunity.org',
    serviceTime: 'Sundays 9:30 AM & 6:00 PM',
    members: 400
  },
  {
    id: 'grace-covenant',
    name: 'Grace Covenant Church',
    description: 'Experiencing God\'s amazing grace and living under His covenant of love and redemption.',
    pastor: 'Pastor David Brown',
    address: '321 Grace Lane, Springfield, IL 62704',
    phone: '(555) 456-7890',
    email: 'ministry@gracecovenant.org',
    serviceTime: 'Sundays 8:30 AM & 11:15 AM',
    members: 250
  },
  {
    id: 'new-hope-fellowship',
    name: 'New Hope Fellowship',
    description: 'A place of new beginnings and renewed hope, where everyone can find their purpose in Christ.',
    pastor: 'Pastor Lisa Davis',
    address: '654 Hope Street, Springfield, IL 62705',
    phone: '(555) 567-8901',
    email: 'info@newhopefellowship.org',
    serviceTime: 'Sundays 10:00 AM',
    members: 180
  }
];

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <Hero />

      {/* Ministry Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Ministry Impact</h2>
            <p className="text-lg text-gray-600">Connecting communities across our region through faith</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">5</div>
              <p className="text-gray-700 font-medium">Member Churches</p>
              <p className="text-sm text-gray-500">Across our community</p>
            </div>
            
            <div className="p-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">1,330+</div>
              <p className="text-gray-700 font-medium">Active Members</p>
              <p className="text-sm text-gray-500">Growing together in faith</p>
            </div>
            
            <div className="p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
              <p className="text-gray-700 font-medium">Ministry Programs</p>
              <p className="text-sm text-gray-500">Serving all ages</p>
            </div>
            
            <div className="p-6">
              <div className="text-4xl font-bold text-orange-600 mb-2">25+</div>
              <p className="text-gray-700 font-medium">Years of Service</p>
              <p className="text-sm text-gray-500">Building community</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Churches Section */}
      <section className="py-16 bg-gray-50">
        <ChurchDirectory churches={churches} />
      </section>

      {/* Ministry Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Ministry Programs</h2>
            <p className="text-lg text-gray-600">Connecting people across our churches through shared ministries</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Youth & Young Adults", 
                desc: "Dynamic programs for ages 12-30 across all our churches",
                churches: "5 churches",
                icon: "🌟" 
              },
              { 
                title: "Children's Ministry", 
                desc: "Nurturing young hearts with biblical foundations",
                churches: "5 churches",
                icon: "👶" 
              },
              { 
                title: "Community Outreach", 
                desc: "Serving our neighborhoods together in love",
                churches: "5 churches",
                icon: "❤️" 
              },
              { 
                title: "Women's Fellowship", 
                desc: "Building sisterhood through Bible study and prayer",
                churches: "4 churches",
                icon: "👩‍🤝‍�" 
              },
              { 
                title: "Men's Ministry", 
                desc: "Strengthening fathers, husbands, and leaders",
                churches: "3 churches",
                icon: "👨‍👦" 
              },
              { 
                title: "Senior Saints", 
                desc: "Honoring wisdom and continued service",
                churches: "4 churches",
                icon: "🙏" 
              }
            ].map((ministry, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                <div className="text-3xl mb-4">{ministry.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{ministry.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{ministry.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-blue-600 font-medium">{ministry.churches}</span>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
