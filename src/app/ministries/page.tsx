export default function Ministries() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Ministries</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Find your place to grow, serve, and connect in our church family
            </p>
          </div>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Children's Ministry */}
            <div className="bg-blue-50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-2xl">👶</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-blue-800">Children's Ministry</h2>
                  <p className="text-blue-600">Ages 0-12</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Our children's ministry provides a safe, fun environment where kids can learn about Jesus 
                through age-appropriate lessons, games, and activities.
              </p>
              <div className="space-y-2 text-gray-700">
                <p>• Sunday School during both services</p>
                <p>• Nursery care for infants and toddlers</p>
                <p>• VBS and special events throughout the year</p>
                <p>• Trained volunteers and background checks</p>
              </div>
            </div>

            {/* Youth Ministry */}
            <div className="bg-purple-50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-2xl">🌟</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-purple-800">Youth Ministry</h2>
                  <p className="text-purple-600">Ages 13-18</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Our youth program helps teenagers navigate life's challenges while building lasting 
                friendships and a strong foundation of faith.
              </p>
              <div className="space-y-2 text-gray-700">
                <p>• Friday night youth group meetings</p>
                <p>• Summer mission trips and camps</p>
                <p>• Mentorship and discipleship programs</p>
                <p>• Community service projects</p>
              </div>
            </div>

            {/* Women's Ministry */}
            <div className="bg-pink-50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-2xl">👥</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-pink-800">Women's Ministry</h2>
                  <p className="text-pink-600">All Ages</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Women of all ages and life stages come together for fellowship, Bible study, and 
                mutual encouragement in faith and life.
              </p>
              <div className="space-y-2 text-gray-700">
                <p>• Monthly women's Bible studies</p>
                <p>• Ladies' retreats and conferences</p>
                <p>• MOPS (Mothers of Preschoolers)</p>
                <p>• Service and outreach opportunities</p>
              </div>
            </div>

            {/* Men's Ministry */}
            <div className="bg-green-50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-2xl">🤝</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-green-800">Men's Ministry</h2>
                  <p className="text-green-600">All Ages</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Men gather to grow in their faith, build authentic relationships, and support each 
                other in their roles as husbands, fathers, and community members.
              </p>
              <div className="space-y-2 text-gray-700">
                <p>• Saturday morning men's breakfast</p>
                <p>• Men's retreat and outdoor activities</p>
                <p>• Iron sharpening iron accountability groups</p>
                <p>• Service projects and community outreach</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Small Groups & Adult Ministries */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Adult Ministries</h2>
            <p className="text-lg text-gray-600">Opportunities for adults to grow and connect</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📖</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Small Groups</h3>
              <p className="text-gray-700 mb-4">
                Connect with others in intimate settings for Bible study, prayer, and fellowship.
              </p>
              <div className="text-sm text-gray-600">
                <p>• Various meeting times</p>
                <p>• Different study topics</p>
                <p>• Led by trained facilitators</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎵</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Worship Ministry</h3>
              <p className="text-gray-700 mb-4">
                Use your musical gifts to lead our congregation in worship and praise.
              </p>
              <div className="text-sm text-gray-600">
                <p>• Choir and worship team</p>
                <p>• Special music opportunities</p>
                <p>• Technical support team</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Outreach Ministry</h3>
              <p className="text-gray-700 mb-4">
                Serve our community and share God's love through practical acts of service.
              </p>
              <div className="text-sm text-gray-600">
                <p>• Community food bank</p>
                <p>• Homeless shelter support</p>
                <p>• Local mission projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Involved?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            There's a place for everyone to grow, serve, and make a difference. 
            Find where you belong in our church family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
              Contact Ministry Leaders
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
              View Calendar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}