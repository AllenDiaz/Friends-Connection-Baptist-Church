'use client';

import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Users, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

interface ChurchHeroProps {
  name: string;
  description?: string;
  image?: string;
  pastor: string;
  pastorImage?: string;
  address: string;
  phone: string;
  email: string;
  serviceTime: string;
  website?: string;
  members?: number;
}

const ChurchHero = ({
  name,
  description = "Welcome to our church family",
  image,
  pastor,
  pastorImage,
  address,
  phone,
  email,
  serviceTime,
  website,
  members
}: ChurchHeroProps) => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="relative h-96 bg-gradient-to-r from-blue-900 to-purple-900 overflow-hidden">
        {image && (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{ backgroundImage: `url(${image})` }}
          />
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80" />
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{name}</h1>
            <p className="text-xl text-blue-100 mb-6 max-w-2xl">{description}</p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center text-blue-200">
                <Clock className="w-5 h-5 mr-2" />
                <span>{serviceTime}</span>
              </div>
              {members && (
                <div className="flex items-center text-blue-200">
                  <Users className="w-5 h-5 mr-2" />
                  <span>{members}+ members</span>
                </div>
              )}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact">
                <Button variant="gradient" size="lg">
                  Plan Your Visit
                </Button>
              </Link>
              
              {website && (
                <Link href={website} target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-blue-900"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Visit Website
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Church Info Cards */}
      <div className="relative -mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Pastor Card */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center space-x-4">
              {pastorImage ? (
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={pastorImage}
                    alt={pastor}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {pastor.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              )}
              <div>
                <h3 className="font-semibold text-gray-900">Our Pastor</h3>
                <p className="text-blue-600">{pastor}</p>
              </div>
            </div>
          </div>
          
          {/* Location Card */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                <p className="text-gray-600 text-sm">{address}</p>
              </div>
            </div>
          </div>
          
          {/* Contact Card */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Get In Touch</h3>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-600" />
                <a href={`tel:${phone}`} className="text-gray-600 hover:text-blue-600 text-sm">
                  {phone}
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-600" />
                <a href={`mailto:${email}`} className="text-gray-600 hover:text-blue-600 text-sm">
                  {email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChurchHero;