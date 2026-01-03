'use client';

import ChurchCard, { ChurchData } from './ChurchCard';
import { Search, MapPin } from 'lucide-react';
import { useState, useMemo } from 'react';

interface ChurchDirectoryProps {
  churches: ChurchData[];
  className?: string;
}

const ChurchDirectory = ({ churches, className = '' }: ChurchDirectoryProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');

  const filteredChurches = useMemo(() => {
    return churches.filter(church => {
      const matchesSearch = church.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           church.pastor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           church.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesLocation = !locationFilter || 
                             church.address.toLowerCase().includes(locationFilter.toLowerCase());
      
      return matchesSearch && matchesLocation;
    });
  }, [churches, searchTerm, locationFilter]);

  const locations = useMemo(() => {
    const allLocations = churches.map(church => 
      church.address.split(',').slice(-2).join(',').trim()
    );
    return [...new Set(allLocations)];
  }, [churches]);

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Member Churches</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover the diverse congregations that make up our Friends Connection Ministry family. 
          Each church brings its unique character while sharing our common mission.
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search churches, pastors, or descriptions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          {/* Location Filter */}
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
            >
              <option value="">All Locations</option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="text-center">
        <p className="text-gray-600">
          Showing {filteredChurches.length} of {churches.length} churches
        </p>
      </div>

      {/* Church Grid */}
      {filteredChurches.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredChurches.map((church) => (
            <ChurchCard key={church.id} church={church} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg mb-4">No churches found matching your criteria.</p>
          <p className="text-gray-400">Try adjusting your search terms or location filter.</p>
        </div>
      )}
    </div>
  );
};

export default ChurchDirectory;