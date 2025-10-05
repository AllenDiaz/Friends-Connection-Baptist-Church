'use client';

import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export interface LeaderData {
  id: string;
  name: string;
  position: string;
  bio: string;
  image?: string;
  email?: string;
  phone?: string;
  church?: string;
}

interface LeadershipCardProps {
  leader: LeaderData;
  className?: string;
}

const LeadershipCard = ({ leader, className = '' }: LeadershipCardProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${className}`}>
      {/* Leader Image */}
      <div className="relative h-64 bg-gray-200">
        {leader.image ? (
          <Image
            src={leader.image}
            alt={leader.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold text-4xl">
              {leader.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
        <p className="text-blue-600 font-medium mb-2">{leader.position}</p>
        
        {leader.church && (
          <div className="flex items-center text-sm text-gray-600 mb-4">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{leader.church}</span>
          </div>
        )}
        
        <p className="text-gray-600 text-sm mb-6 line-clamp-4">{leader.bio}</p>
        
        {/* Contact Info */}
        {(leader.email || leader.phone) && (
          <div className="space-y-2 pt-4 border-t border-gray-100">
            {leader.email && (
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-gray-400" />
                <a 
                  href={`mailto:${leader.email}`}
                  className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {leader.email}
                </a>
              </div>
            )}
            
            {leader.phone && (
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-gray-400" />
                <a 
                  href={`tel:${leader.phone}`}
                  className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {leader.phone}
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadershipCard;