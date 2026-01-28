import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, MapPin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import ImageGallery from '@/components/ImageGallery';

interface MinistryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Ministry data
const ministries = [
  {
    id: 'bible-basketball',
    name: 'Bible Basketball',
    description: 'Combining athletic excellence with spiritual growth, our Bible Basketball ministry uses sports to reach youth and build character through faith-based basketball programs and tournaments.',
    image: '/ministries/bible-basketball/basketball-1.jpeg',
    gallery: [
      '/ministries/bible-basketball/basketball-1.jpeg',
      '/ministries/bible-basketball/baskeball-2.jpeg',
      '/ministries/bible-basketball/basketball-3.jpeg',
      '/ministries/bible-basketball/basketball-4.jpeg'
    ],
    schedule: 'Tuesdays & Thursdays 6:00 PM, Saturday tournaments',
    location: 'Various church gymnasiums',
    contactEmail: 'fcfjc.ministries@gmail.com',
    fullDescription: `Our Bible Basketball ministry is a dynamic program that combines the excitement of basketball with biblical teaching and character development. We believe that sports can be a powerful tool for ministry, reaching young people where they are and showing them the love of Christ through competition, teamwork, and fellowship.

    Through weekly practices, skill development sessions, and competitive tournaments, we create opportunities for youth to grow both athletically and spiritually. Each session includes devotionals, prayer time, and character-building lessons that help participants develop integrity, discipline, and leadership skills.

    Our program welcomes players of all skill levels, from beginners to advanced athletes. We emphasize sportsmanship, teamwork, and using our God-given talents to glorify Him. Whether on the court or off, our goal is to develop well-rounded individuals who love Christ and serve others.`,
    goals: [
      'Reach youth through sports ministry and share the Gospel',
      'Develop character, discipline, and leadership through basketball',
      'Build a community of Christian athletes who support and encourage each other',
      'Organize tournaments and events that bring churches together',
      'Mentor young people in their faith journey through sports'
    ],
    activities: [
      'Weekly practice sessions focusing on skills and spiritual growth',
      'Saturday tournaments and competitive games',
      'Annual basketball camps and clinics',
      'Community outreach through basketball demonstrations',
      'Bible studies specifically designed for athletes',
      'Leadership development for team captains and coaches'
    ]
  },
  {
    id: 'indigenous-evangelism',
    name: 'Indigenous Evangelism',
    description: 'Reaching out to indigenous communities with the Gospel, providing culturally sensitive ministry, and supporting local missionaries working in remote areas.',
    image: '/ministries/indigenous-evangelism/indigenous-1.jpg',
    gallery: [
      '/ministries/indigenous-evangelism/indigenous-1.jpg',
      '/ministries/indigenous-evangelism/indigenous-2.jpg',
      '/ministries/indigenous-evangelism/indigenous-3.jpg'
    ],
    schedule: 'Monthly mission trips, Weekly prayer meetings Wednesdays 7:00 PM',
    location: 'Mission field and home churches',
    contactEmail: 'fcfjc.ministries@gmail.com',
    fullDescription: `Our Indigenous Evangelism ministry is dedicated to bringing the Gospel to indigenous communities throughout the Philippines. We recognize the unique cultural contexts and needs of these communities and work to share Christ's love in ways that are respectful, relevant, and transformative.

    Through partnership with local missionaries and indigenous church leaders, we support ongoing evangelistic efforts and church planting initiatives in remote areas. Our approach emphasizes cultural sensitivity, language translation, and sustainable ministry models that empower indigenous believers to lead their own communities.

    We believe that every person, regardless of their background or location, deserves to hear the Good News of Jesus Christ. Our ministry teams work tirelessly to overcome geographical, linguistic, and cultural barriers to make this a reality.`,
    goals: [
      'Share the Gospel with unreached indigenous communities',
      'Support and equip indigenous pastors and missionaries',
      'Translate Scripture and Christian materials into local languages',
      'Establish sustainable churches led by indigenous believers',
      'Provide training and resources for cultural contextualization'
    ],
    activities: [
      'Scheduled mission trips to indigenous communities',
      'Weekly prayer meetings for missionary support',
      'Scripture translation and distribution projects',
      'Cultural sensitivity training for mission teams',
      'Support for indigenous church plants',
      'Medical missions combined with evangelism',
      'Educational programs for indigenous children'
    ]
  },
  {
    id: 'bible-school',
    name: 'Bible School',
    description: 'Equipping believers with solid biblical knowledge through systematic theology, biblical studies, and practical ministry training for all ages and spiritual maturity levels. No tuition required with allowances provided.',
    image: '/ministries/bible-school/bible-school-1.jpeg',
    gallery: [
      '/ministries/bible-school/bible-school-1.jpeg',
      '/ministries/bible-school/bible-school-2.jpeg',
      '/ministries/bible-school/bible-school-3.jpeg'
    ],
    schedule: 'Sundays 9:00 AM, Wednesday evening classes 7:00 PM',
    location: 'Purok 4 Nieves San Leonardo Nueva Ecija',
    contactEmail: 'fcfjc.ministries@gmail.com',
    fullDescription: `Our Bible School provides comprehensive biblical education for believers at every stage of their spiritual journey. We are committed to making quality theological education accessible to everyone - all courses are offered with NO TUITION FEES, and qualifying students receive financial allowances to support their studies.

    Our curriculum covers systematic theology, biblical interpretation, church history, practical ministry skills, and more. Classes are taught by experienced pastors and teachers who are passionate about making complex theological concepts accessible and applicable to everyday life.

    Whether you're a new believer seeking to establish a strong foundation, a ministry leader looking to sharpen your skills, or simply someone who wants to grow deeper in your knowledge of Scripture, our Bible School offers programs tailored to your needs. Financial barriers should never prevent someone from studying God's Word - that's why we provide free education and financial support to our students.`,
    goals: [
      'Provide systematic biblical and theological education',
      'Equip believers for ministry and Christian service',
      'Develop strong biblical literacy across our churches',
      'Train future pastors and church leaders',
      'Foster a love for Scripture and sound doctrine',
      'Offer free education with no tuition fees',
      'Provide financial allowances to support students in their studies'
    ],
    activities: [
      'Sunday morning Bible study courses (9:00 AM)',
      'Wednesday evening theological classes (7:00 PM)',
      'Certificate programs in biblical studies',
      'Ministry training workshops and seminars',
      'Pastoral training and mentorship programs',
      'Online courses and resources',
      'Annual Bible conferences and intensive courses',
      'Small group discussion and application sessions'
    ]
  },
  {
    id: 'medical-mission',
    name: 'Medical Mission',
    description: 'Providing healthcare services and medical support to underserved communities, combining professional medical care with compassionate spiritual ministry and health education.',
    image: '/ministries/medical-mission/medical-1.jpg',
    gallery: [
      '/ministries/medical-mission/medical-1.jpg',
      '/ministries/medical-mission/medical-2.jpg',
      '/ministries/medical-mission/medical-3.jpg'
    ],
    schedule: 'Monthly medical outreach, Quarterly international trips',
    location: 'Local community centers and international mission fields',
    contactEmail: 'fcfjc.ministries@gmail.com',
    fullDescription: `Our Medical Mission ministry brings the healing hands of Christ to communities in need. Through free medical clinics, health education programs, and compassionate care, we demonstrate God's love in practical ways while sharing the hope of the Gospel.

    Our team includes doctors, nurses, dentists, pharmacists, and other healthcare professionals who volunteer their time and expertise to serve the underserved. We provide quality medical care, distribute essential medications, and offer health education to help communities improve their overall wellbeing.

    Beyond physical healing, our medical missions provide opportunities to pray with patients, share testimonies, and introduce people to the Great Physician. We believe that caring for the whole person—body, mind, and spirit—reflects the ministry of Jesus.`,
    goals: [
      'Provide free medical care to underserved communities',
      'Share the Gospel through healthcare ministry',
      'Train local health workers and promote preventive care',
      'Address critical health needs in remote areas',
      'Demonstrate Christ\'s love through compassionate service'
    ],
    activities: [
      'Monthly medical outreach clinics in local communities',
      'Quarterly international medical mission trips',
      'Free consultations, medications, and basic procedures',
      'Dental care and oral health education',
      'Health seminars on nutrition, hygiene, and disease prevention',
      'Prayer and spiritual counseling for patients',
      'Distribution of vitamins, medications, and medical supplies',
      'Coordination with local health authorities and partners',
      'Training programs for community health workers'
    ]
  }
];

interface MinistryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return ministries.map((ministry) => ({
    slug: ministry.id,
  }));
}

export default async function MinistryPage({ params }: MinistryPageProps) {
  const { slug } = await params;
  const ministry = ministries.find((m) => m.id === slug);

  if (!ministry) {
    notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gray-900">
        <div className="absolute inset-0">
          <img
            src={ministry.image}
            alt={ministry.name}
            className={`w-full h-full object-cover opacity-50 ${ministry.id === 'medical-mission' ? 'object-top' : ''}`}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{ministry.name}</h1>
            <p className="text-xl max-w-3xl">{ministry.description}</p>
          </div>
        </div>
      </section>

      {/* Ministry Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About This Ministry</h2>
              <div className="prose prose-lg max-w-none text-gray-700 whitespace-pre-line mb-8">
                {ministry.fullDescription}
              </div>

              {/* Image Gallery */}
              {ministry.gallery && ministry.gallery.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Gallery</h3>
                  <ImageGallery images={ministry.gallery} ministryName={ministry.name} />
                </div>
              )}

              {/* Goals Section */}
              {ministry.goals && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Goals</h3>
                  <ul className="space-y-3">
                    {ministry.goals.map((goal, index) => (
                      <li key={index} className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-gray-700">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Activities Section */}
              {ministry.activities && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Activities & Programs</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {ministry.activities.map((activity, index) => (
                      <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                        <span className="text-blue-600 mr-3 mt-1">✓</span>
                        <span className="text-gray-700 text-sm">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ministry Information</h3>
                
                <div className="space-y-4">
                  {ministry.schedule && (
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900 text-sm">Schedule</p>
                        <p className="text-gray-600 text-sm">{ministry.schedule}</p>
                      </div>
                    </div>
                  )}

                  {ministry.location && (
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900 text-sm">Location</p>
                        <p className="text-gray-600 text-sm">{ministry.location}</p>
                      </div>
                    </div>
                  )}

                  {ministry.contactEmail && (
                    <div className="flex items-start">
                      <Mail className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900 text-sm">Contact</p>
                        <a 
                          href={`mailto:${ministry.contactEmail}`}
                          className="text-blue-600 hover:text-blue-800 text-sm break-all"
                        >
                          {ministry.contactEmail}
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Link href="/contact">
                    <Button variant="gradient" className="w-full mb-3">
                      Get Involved
                    </Button>
                  </Link>
                  <Link href="/ministries">
                    <Button variant="outline" className="w-full">
                      View All Ministries
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Ministries */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Other Ministries</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {ministries
              .filter((m) => m.id !== ministry.id)
              .map((m) => (
                <Link 
                  key={m.id} 
                  href={`/ministries/${m.id}`}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48">
                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{m.name}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{m.description}</p>
                    <span className="inline-block mt-4 text-blue-600 font-medium text-sm">
                      Learn More →
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
