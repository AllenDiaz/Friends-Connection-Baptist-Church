'use client';

import { Clock, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export interface ServiceData {
  id: string;
  name: string;
  time: string;
  description?: string;
  location?: string;
  duration?: string;
  ageGroup?: string;
}

interface ServiceCardProps {
  service: ServiceData;
  churchName: string;
  className?: string;
}

const ServiceCard = ({ service, churchName, className = '' }: ServiceCardProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-md border-l-4 border-blue-600 p-6 hover:shadow-lg transition-shadow duration-200 ${className}`}>
      {/* Service Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
          <p className="text-sm text-gray-600">{churchName}</p>
        </div>
        
        {service.ageGroup && (
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
            {service.ageGroup}
          </span>
        )}
      </div>
      
      {/* Service Description */}
      {service.description && (
        <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
      )}
      
      {/* Service Details */}
      <div className="space-y-2 mb-6">
        <div className="flex items-center text-sm text-gray-600">
          <Clock className="w-4 h-4 mr-2 text-blue-500" />
          <span>{service.time}</span>
          {service.duration && (
            <span className="ml-2 text-gray-400">({service.duration})</span>
          )}
        </div>
        
        {service.location && (
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-2 text-blue-500" />
            <span>{service.location}</span>
          </div>
        )}
      </div>
      
      {/* Action Button */}
      <Button variant="outline" size="sm" className="w-full">
        Learn More
      </Button>
    </div>
  );
};

export default ServiceCard;