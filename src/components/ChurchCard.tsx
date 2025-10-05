'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Clock, Users, Phone, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export interface ChurchData {
  id: string;
  name: string;
  description: string;
  image?: string;
  pastor: string;
  pastorImage?: string;
  address: string;
  phone: string;
  email: string;
  serviceTime: string;
  members?: number;
  website?: string;
}

interface ChurchCardProps {
  church: ChurchData;
  className?: string;
}

const ChurchCard = ({ church, className = '' }: ChurchCardProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${className}`}>
      {/* Church Image */}
      {church.image && (
        <div className="relative h-48 bg-gray-200">
          <Image
            src={church.image}
            alt={church.name}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{church.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{church.description}</p>
        
        {/* Pastor */}
        <div className="mb-4">
          <p className="text-sm text-gray-700">
            <span className="font-medium">Pastor:</span> {church.pastor}
          </p>
        </div>
        
        {/* Quick Info */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-2 text-blue-500" />
            <span className="truncate">{church.address}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="w-4 h-4 mr-2 text-blue-500" />
            <span>{church.serviceTime}</span>
          </div>
          
          {church.members && (
            <div className="flex items-center text-sm text-gray-600">
              <Users className="w-4 h-4 mr-2 text-blue-500" />
              <span>{church.members}+ members</span>
            </div>
          )}
          
          <div className="flex items-center text-sm text-gray-600">
            <Phone className="w-4 h-4 mr-2 text-blue-500" />
            <span>{church.phone}</span>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href={`/churches/${church.id}`} className="flex-1">
            <Button variant="gradient" className="w-full">
              Learn More
            </Button>
          </Link>
          
          {church.website && (
            <Link href={church.website} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full sm:w-auto">
                <ExternalLink className="w-4 h-4 mr-2" />
                Visit Site
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChurchCard;