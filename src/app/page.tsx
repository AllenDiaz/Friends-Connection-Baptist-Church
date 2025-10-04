export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Welcome to Grace Community Church
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
              A place where everyone belongs, faith grows, and love transforms lives
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
                Join Us This Sunday
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
                Watch Online
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Us for Worship</h2>
            <p className="text-lg text-gray-600">Everyone is welcome at Grace Community Church</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-blue-50">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Sunday Worship</h3>
              <p className="text-gray-700 mb-2">9:00 AM & 11:00 AM</p>
              <p className="text-sm text-gray-600">Contemporary and Traditional Services</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-purple-50">
              <h3 className="text-xl font-semibold text-purple-600 mb-2">Wednesday Bible Study</h3>
              <p className="text-gray-700 mb-2">7:00 PM</p>
              <p className="text-sm text-gray-600">Deep dive into God's Word together</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-green-50">
              <h3 className="text-xl font-semibold text-green-600 mb-2">Youth Group</h3>
              <p className="text-gray-700 mb-2">Friday 6:30 PM</p>
              <p className="text-sm text-gray-600">Ages 12-18, fun and fellowship</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Grace Community Church, we are committed to helping people grow in their relationship 
                with Jesus Christ and with one another. We believe that faith is not meant to be lived 
                in isolation, but in community with others who share the same values and commitment.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-gray-700">Authentic worship and biblical teaching</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-gray-700">Caring community and lasting friendships</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-gray-700">Opportunities to serve and make a difference</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">New Here?</h3>
              <p className="text-gray-700 mb-6">
                We'd love to meet you! Whether you're exploring faith for the first time or 
                looking for a church home, you'll find a warm welcome here.
              </p>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                Plan Your First Visit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Connected</h2>
            <p className="text-lg text-gray-600">Find your place in our church family</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Children's Ministry", desc: "Fun, safe environment for kids to learn about Jesus", icon: "👶" },
              { title: "Youth Ministry", desc: "Teenagers growing together in faith and friendship", icon: "🌟" },
              { title: "Small Groups", desc: "Connect deeper through Bible study and fellowship", icon: "👥" },
              { title: "Outreach", desc: "Serving our community and sharing God's love", icon: "❤️" }
            ].map((ministry, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                <div className="text-3xl mb-4">{ministry.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{ministry.title}</h3>
                <p className="text-gray-600 text-sm">{ministry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">Visit Us</h3>
              <p className="mb-2">123 Faith Street</p>
              <p className="mb-2">Springfield, IL 62701</p>
              <p className="text-blue-200">Sundays 9 AM & 11 AM</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="mb-2">(555) 123-4567</p>
              <p className="mb-2">info@gracecc.org</p>
              <p className="text-blue-200">We'd love to hear from you!</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <p className="mb-2">@GraceCommunityChurch</p>
              <p className="mb-2">Facebook | Instagram | YouTube</p>
              <p className="text-blue-200">Stay connected online</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
