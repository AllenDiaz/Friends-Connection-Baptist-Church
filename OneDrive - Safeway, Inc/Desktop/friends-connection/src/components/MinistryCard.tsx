'use client';

import Image from 'next/image';
import { Users, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export interface MinistryData {
  id: string;
  name: string;
  description: string;
  image?: string;
  leader: string;
  schedule?: string;
  location?: string;
  participatingChurches: string[];
  contactEmail?: string;
}

interface MinistryCardProps {
  ministry: MinistryData;
  className?: string;
}

const MinistryCard = ({ ministry, className = '' }: MinistryCardProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${className}`}>
      {/* Ministry Image */}
      {ministry.image && (
        <div className="relative h-48 bg-gray-200">
          <Image
            src={ministry.image}
            alt={ministry.name}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{ministry.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{ministry.description}</p>
        
        {/* Leader */}
        <div className="mb-4">
          <p className="text-sm text-gray-700">
            <span className="font-medium">Leader:</span> {ministry.leader}
          </p>
        </div>
        
        {/* Details */}
        <div className="space-y-2 mb-4">
          {ministry.schedule && (
            <div className="flex items-center text-sm text-gray-600">
              <Clock className="w-4 h-4 mr-2 text-blue-500" />
              <span>{ministry.schedule}</span>
            </div>
          )}
          
          {ministry.location && (
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-2 text-blue-500" />
              <span>{ministry.location}</span>
            </div>
          )}
          
          <div className="flex items-center text-sm text-gray-600">
            <Users className="w-4 h-4 mr-2 text-blue-500" />
            <span>{ministry.participatingChurches.length} churches participating</span>
          </div>
        </div>
        
        {/* Participating Churches */}
        <div className="mb-6">
          <p className="text-sm font-medium text-gray-700 mb-2">Participating Churches:</p>
          <div className="flex flex-wrap gap-1">
            {ministry.participatingChurches.slice(0, 3).map((church, index) => (
              <span 
                key={index}
                className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
              >
                {church}
              </span>
            ))}
            {ministry.participatingChurches.length > 3 && (
              <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                +{ministry.participatingChurches.length - 3} more
              </span>
            )}
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href={`/ministries/${ministry.id}`} className="flex-1">
            <Button variant="gradient" className="w-full">
              Learn More
            </Button>
          </Link>
          
          {ministry.contactEmail && (
            <Link href={`mailto:${ministry.contactEmail}`}>
              <Button variant="outline" className="w-full sm:w-auto">
                Contact
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default MinistryCard;