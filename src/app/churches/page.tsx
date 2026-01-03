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

export default function ChurchesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Member Churches</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover the unique congregations that make up Friends Connection Ministry. 
            Each church brings its own character while sharing our common mission of faith, fellowship, and service.
          </p>
        </div>
      </section>

      {/* Church Directory */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ChurchDirectory churches={churches} />
        </div>
      </section>
    </div>
  );
}