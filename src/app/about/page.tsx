export default function About() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Friends Connection Ministry</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Discover our story, mission, and the heart behind uniting churches in faith and fellowship
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Friends Connection Ministry was founded in 2000 with a revolutionary vision: to unite 
                independent Baptist churches in a network of mutual support, shared resources, and 
                collaborative ministry that strengthens the entire body of Christ.
              </p>
              <p className="text-gray-700 mb-6">
                What began as informal fellowship between three pastors has grown into a thriving 
                ministry network of five churches serving over 1,300 members across our community. 
                Each church maintains its unique identity and pastoral leadership while participating 
                in shared ministries that no single congregation could accomplish alone.
              </p>
              <p className="text-gray-700">
                Today, we continue to demonstrate that unity doesn't mean uniformity, and that 
                together we can accomplish far more than we ever could apart.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">Our Mission</h3>
              <p className="text-gray-700 italic text-lg mb-4">
                "To strengthen local churches through partnership, shared ministry, and mutual support, 
                creating a network that multiplies our impact for the Kingdom of God."
              </p>
              
              <h3 className="text-2xl font-semibold text-blue-800 mb-4 mt-6">Our Vision</h3>
              <p className="text-gray-700 italic text-lg">
                "A community of churches united in purpose, diverse in expression, and powerful in impact."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">These values guide everything we do as a church family</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📖</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Biblical Truth</h3>
              <p className="text-gray-600">
                We believe the Bible is God's Word and the foundation for faith and life.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Authentic Community</h3>
              <p className="text-gray-600">
                We foster genuine relationships where people can be real and find belonging.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Spiritual Growth</h3>
              <p className="text-gray-600">
                We encourage everyone to grow deeper in their relationship with Jesus.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Compassionate Service</h3>
              <p className="text-gray-600">
                We serve others as Jesus served, showing love through our actions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600">Committed to serving and guiding our church family</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pastor John Smith</h3>
              <p className="text-blue-600 mb-2">Senior Pastor</p>
              <p className="text-gray-600 text-sm">
                Pastor John has been leading Grace Community Church since 2010. He is passionate 
                about teaching God's Word and helping people grow in their faith.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pastor Sarah Johnson</h3>
              <p className="text-purple-600 mb-2">Associate Pastor</p>
              <p className="text-gray-600 text-sm">
                Pastor Sarah oversees our ministries and community outreach. She has a heart 
                for connecting people and building strong relationships.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mike Williams</h3>
              <p className="text-green-600 mb-2">Worship Pastor</p>
              <p className="text-gray-600 text-sm">
                Mike leads our worship team and helps create an environment where people 
                can connect with God through music and prayer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What We Believe</h2>
            <p className="text-xl text-blue-100">Our fundamental beliefs that guide our faith and practice</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">The Bible</h3>
                <p className="text-blue-100">
                  We believe the Bible is the inspired Word of God, without error in its original form, 
                  and is the final authority for faith and practice.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Jesus Christ</h3>
                <p className="text-blue-100">
                  We believe Jesus Christ is fully God and fully man, who died for our sins and rose 
                  from the dead, offering salvation to all who believe in Him.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Salvation</h3>
                <p className="text-blue-100">
                  We believe salvation is a gift from God received through faith in Jesus Christ, 
                  not by good works, and is available to everyone.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">The Trinity</h3>
                <p className="text-blue-100">
                  We believe in one God who exists in three persons: Father, Son, and Holy Spirit, 
                  each fully God yet distinct in their roles.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">The Church</h3>
                <p className="text-blue-100">
                  We believe the church is the body of Christ, made up of all believers, called 
                  to worship, fellowship, discipleship, and service.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Eternity</h3>
                <p className="text-blue-100">
                  We believe in the reality of heaven and hell, and that Jesus will return to 
                  judge the living and the dead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}