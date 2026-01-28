import ContactForm from '@/components/ContactForm';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Contact Friends Connection Ministry</h1>
            <p className="text-xl max-w-3xl mx-auto">
              We&apos;d love to hear from you! Reach out with questions about our churches, ministries, or how to get connected.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            
            <div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Ministry Headquarters</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm">📍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Address</h4>
                      <p className="text-gray-600">Nieves, San Leonardo<br />Nueva Ecija, Philippines</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm">📞</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">1 (360) 556-4105</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm">✉️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">fcfjc.ministries@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm">🕐</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Office Hours</h4>
                      <p className="text-gray-600">
                        Monday - Friday<br />
                        9:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Churches */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Member Churches</h2>
            <p className="text-lg text-gray-600">
              Each of our 14 churches offers unique worship experiences while sharing our common mission
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'International Baptist Church of Pinellas INC',
                address: '5955 Park Blvd North Pinellas Park Florida, 33781',
                phone: '1 (360) 556-4105',
                services: 'Contact for service times',
                slug: 'international-baptist-pinellas'
              },
              {
                name: 'Living Water Baptist Church of Nueva Ecija',
                address: 'Nieves, San Leonardo Nueva Ecija',
                phone: '1 (360) 556-4105',
                services: 'Contact for service times',
                slug: 'living-water-baptist'
              },
              {
                name: 'Friendship Gospel Bible Baptist Church',
                address: 'Tabuating, San Leonardo Nueva Ecija',
                phone: '1 (360) 556-4105',
                services: 'Contact for service times',
                slug: 'friendship-gospel-tabuating'
              },
              {
                name: 'Good Shepherd Baptist Church',
                address: 'Palayan City',
                phone: '1 (360) 556-4105',
                services: 'Contact for service times',
                slug: 'good-shepherd-palayan'
              },
              {
                name: 'Shiloh Redeemer Baptist Church Inc.',
                address: 'Taguig City',
                phone: '1 (360) 556-4105',
                services: 'Contact for service times',
                slug: 'shiloh-redeemer-taguig'
              }
            ].map((church, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{church.name}</h3>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">📍</span>
                    <span>{church.address}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">📞</span>
                    <a href={`tel:${church.phone}`} className="hover:text-blue-600">
                      {church.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">🕐</span>
                    <span>{church.services}</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <a 
                    href={`/churches/${church.slug}`}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
            
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg flex flex-col justify-center items-center text-center">
              <h3 className="text-lg font-semibold mb-2">Not Sure Which Church?</h3>
              <p className="text-blue-100 text-sm mb-4">
                We&apos;d be happy to help you find the perfect church home within our ministry network.
              </p>
              <Link 
                href="/churches" 
                className="bg-white text-blue-600 px-4 py-2 rounded font-medium text-sm hover:bg-blue-50 transition-colors"
              >
                Explore All Churches
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}