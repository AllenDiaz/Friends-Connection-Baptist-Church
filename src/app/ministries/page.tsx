import MinistryCard from '@/components/MinistryCard';
import { MinistryData } from '@/components/MinistryCard';
import Link from 'next/link';
import { Users, MapPin, HeartHandshake } from 'lucide-react';

const ministries: MinistryData[] = [
  {
    id: 'bible-basketball',
    name: 'Bible Basketball',
    description: 'Combining athletic excellence with spiritual growth, our Bible Basketball ministry uses sports to reach youth and build character through faith-based basketball programs and tournaments.',
    image: '/ministries/bible-basketball/basketball-1.jpeg',
    schedule: 'Tuesdays & Thursdays 6:00 PM, Saturday tournaments',
    location: 'Various church gymnasiums',
    contactEmail: 'basketball@friendsconnection.org'
  },
  {
    id: 'indigenous-evangelism',
    name: 'Indigenous Evangelism',
    description: 'Reaching out to indigenous communities with the Gospel, providing culturally sensitive ministry, and supporting local missionaries working in remote areas.',
    image: '/ministries/indigenous-evangelism/indigenous-1.jpg',
    schedule: 'Monthly mission trips, Weekly prayer meetings Wednesdays 7:00 PM',
    location: 'Mission field and home churches',
    contactEmail: 'indigenous@friendsconnection.org'
  },
  {
    id: 'bible-school',
    name: 'Bible School',
    description: 'Equipping believers with solid biblical knowledge through systematic theology, biblical studies, and practical ministry training for all ages and spiritual maturity levels. No tuition required with allowances provided.',
    image: '/ministries/bible-school/bible-school-1.jpeg',
    schedule: 'Sundays 9:00 AM, Wednesday evening classes 7:00 PM',
    location: 'Rotating between churches',
    contactEmail: 'bibleschool@friendsconnection.org'
  },
  {
    id: 'medical-mission',
    name: 'Medical Mission',
    description: 'Providing healthcare services and medical support to underserved communities, combining professional medical care with compassionate spiritual ministry and health education.',
    image: '/ministries/medical-mission/medical-1.jpg',
    schedule: 'Monthly medical outreach, Quarterly international trips',
    location: 'Local community centers and international mission fields',
    contactEmail: 'medical@friendsconnection.org'
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
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
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
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Shared Leadership</h3>
              <p className="text-gray-700">
                Ministry leaders coordinate across churches to provide consistent, 
                quality programs that serve our entire community.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Rotating Locations</h3>
              <p className="text-gray-700">
                Many programs rotate between churches, giving members opportunities 
                to experience different worship styles and community settings.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartHandshake className="w-8 h-8 text-white" />
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
            There&apos;s a place for everyone to grow, serve, and make a difference across our ministry network. 
            Find where you belong in our church family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Contact Ministry Leaders
            </Link>
            <Link 
              href="/churches" 
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Find Your Church
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}