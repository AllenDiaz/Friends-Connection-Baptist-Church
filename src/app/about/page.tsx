import LeadershipTeam from '@/components/LeadershipTeam';

export default function About() {
  const leadershipGroups = [
    {
      title: 'Friends Connection for Jesus Christ Ministries International - Officers',
      officers: [
        { 
          name: 'Rev. & Mrs. Alfredo Eborda Jr.', 
          position: 'Founder/President',
          image: '/international-leaders/international-leader-alfredo-eborda.jpeg',
          description: 'Founding leaders guiding the international vision and strategic direction of Friends Connection ministry worldwide.'
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
          name: 'Rev. Alfredo (Fred) Eborda', 
          position: 'President',
          image: '/living-water-baptist-church-pastor.jpg',
          description: 'Leading Philippine operations with vision and commitment to strengthening local churches.'
        },
        { 
          name: 'Ptr. Roberto Pascual', 
          position: 'Vice President',
          image: '/pastor-robert-pascual.png',
          description: 'Supporting church growth and pastoral development throughout the Philippines.'
        },
        { 
          name: 'Ptr. Wilfredo (Jun) Jimenez', 
          position: 'Secretary',
          image: '/pastor-wilfredo-jimenez.jpg',
          description: 'Coordinating ministry activities and maintaining effective communication among churches.'
        },
        { 
          name: 'Ptr. Carlito Gaña', 
          position: 'Treasurer',
          image: '/pastor-carlito-gana.jpg',
          description: 'Stewarding financial resources to empower local ministries and community outreach.'
        },
        { 
          name: 'Ptr. Felix Agustin', 
          position: 'Auditor',
          image: '/pastor-felix-agustin.jpg',
          description: 'Ensuring fiscal responsibility and proper stewardship of ministry funds.'
        },
      ]
    }
  ];
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

      {/* Mission, Vision & About Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission, Vision & Heart</h2>
            <p className="text-lg text-gray-600">Discover what drives Friends Connection in our commitment to serving missionaries and pastors</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Mission */}
            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">M</span>
              </div>
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To give God all the glory and honors as we endeavor together with pastors and missionaries
              </p>
            </div>

            {/* Vision */}
            <div className="bg-purple-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">V</span>
              </div>
              <h3 className="text-2xl font-semibold text-purple-800 mb-4">Our Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To help our co-laborers of the Lord to grow their ministry by having their needs met
              </p>
            </div>

            {/* About Us */}
            <div className="bg-green-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">A</span>
              </div>
              <h3 className="text-2xl font-semibold text-green-800 mb-4">About Us</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                We are friends helping to meet the needs of our missionary friends serving the Lord in difficult places through the contribution and helps of our able friends. We trust the Lord to help you helping us to help others.
              </p>
            </div>
          </div>
          
          {/* Extended About Section */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Heart for Ministry</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Supporting Missionaries</h4>
                <p className="text-gray-700 mb-4">
                  Friends Connection exists to bridge the gap between those who have the heart to help 
                  and those who are serving the Lord in challenging mission fields. We believe that 
                  every missionary and pastor deserves support from fellow believers.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Building Connections</h4>
                <p className="text-gray-700 mb-4">
                  Through our network of 13 Baptist churches across the Philippines and USA, we create lasting 
                  connections that strengthen the body of Christ. Our partnerships enable ministry 
                  growth and provide essential resources where they&apos;re needed most.
                </p>
              </div>
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
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Work</h3>
              <p className="text-gray-600">
                We are committed to excellence and dedication in all our endeavors, serving with diligence and purpose.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-600">
                We uphold honesty, transparency, and moral principles in all our actions and relationships.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚖️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Equality</h3>
              <p className="text-gray-600">
                We treat everyone with respect and fairness, recognizing the inherent worth and dignity of all people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <LeadershipTeam groups={leadershipGroups} />

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