export default function Services() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Join us for meaningful worship experiences designed to connect you with God and community
            </p>
          </div>
        </div>
      </section>

      {/* Sunday Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sunday Worship</h2>
            <p className="text-lg text-gray-600">Two services to accommodate different worship styles and schedules</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">Traditional Service</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">🕘</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">9:00 AM</p>
                    <p className="text-gray-600 text-sm">Every Sunday</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-2">What to Expect:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Classic hymns and choir music</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Liturgical elements and responsive readings</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Organ and piano accompaniment</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Formal worship atmosphere</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Expository preaching from Scripture</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-purple-800 mb-4">Contemporary Service</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">🕚</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">11:00 AM</p>
                    <p className="text-gray-600 text-sm">Every Sunday</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-2">What to Expect:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>Modern worship songs and praise music</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>Full band with guitar, drums, and keys</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>Casual, welcoming atmosphere</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>Interactive worship experience</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>Practical, life-applicable messages</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Weekly Programs</h2>
            <p className="text-lg text-gray-600">Additional opportunities for growth and fellowship throughout the week</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">📖</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Wednesday Bible Study</h3>
              <p className="text-gray-600 mb-3">7:00 PM - 8:30 PM</p>
              <p className="text-gray-700 mb-4">
                Join us for an in-depth study of God&apos;s Word. We explore different books of the Bible 
                and discuss how to apply biblical principles to our daily lives.
              </p>
              <div className="text-sm text-gray-600">
                <p>• All ages welcome</p>
                <p>• Study guides provided</p>
                <p>• Refreshments served</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">🙏</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Prayer Meeting</h3>
              <p className="text-gray-600 mb-3">Thursday 6:30 PM - 7:30 PM</p>
              <p className="text-gray-700 mb-4">
                Come together with fellow believers to pray for our church, community, and world. 
                Experience the power of corporate prayer and intercession.
              </p>
              <div className="text-sm text-gray-600">
                <p>• Open prayer time</p>
                <p>• Prayer requests welcomed</p>
                <p>• Quiet, reflective atmosphere</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Youth Group</h3>
              <p className="text-gray-600 mb-3">Friday 6:30 PM - 8:30 PM</p>
              <p className="text-gray-700 mb-4">
                High school and middle school students gather for games, worship, teaching, and 
                friendship. A safe place for teens to grow in faith and community.
              </p>
              <div className="text-sm text-gray-600">
                <p>• Ages 12-18</p>
                <p>• Games and activities</p>
                <p>• Pizza and snacks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Special Services & Events</h2>
            <p className="text-lg text-gray-600">Celebrating faith throughout the year with special worship experiences</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Seasonal Celebrations</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-900">Christmas Services</h4>
                  <p className="text-gray-600">Special Christmas Eve and Christmas Day services celebrating the birth of Jesus</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-semibold text-gray-900">Easter Celebration</h4>
                  <p className="text-gray-600">Sunrise service, special music, and celebration of Christ&apos;s resurrection</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-semibold text-gray-900">Thanksgiving Service</h4>
                  <p className="text-gray-600">Community gathering to give thanks and share God&apos;s blessings</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Life Events</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-pink-600 pl-4">
                  <h4 className="font-semibold text-gray-900">Baptism Services</h4>
                  <p className="text-gray-600">Quarterly baptism services for those making a public declaration of faith</p>
                </div>
                <div className="border-l-4 border-yellow-600 pl-4">
                  <h4 className="font-semibold text-gray-900">Baby Dedication</h4>
                  <p className="text-gray-600">Special services to dedicate children to God and commit to raising them in faith</p>
                </div>
                <div className="border-l-4 border-indigo-600 pl-4">
                  <h4 className="font-semibold text-gray-900">Memorial Services</h4>
                  <p className="text-gray-600">Honoring the lives of loved ones and celebrating their eternal home with God</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us This Sunday</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you prefer traditional or contemporary worship, you&apos;ll find a welcoming community 
            ready to worship God together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
              Plan Your Visit
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
              Watch Online
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}