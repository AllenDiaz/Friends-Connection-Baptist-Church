'use client';

import { useState, useEffect } from 'react';
import { Search, Filter, X, Calendar } from 'lucide-react';
import { EventFilters as EventFiltersType, EventCategory } from '@/types/event';
import { Button } from '@/components/ui/Button';
import { categoryInfo } from '@/data/events';

interface EventFiltersProps {
  filters: EventFiltersType;
  onFilterChange: (filters: EventFiltersType) => void;
  showStatusFilter?: boolean;
  className?: string;
}

const EventFilters = ({
  filters,
  onFilterChange,
  showStatusFilter = true,
  className = '',
}: EventFiltersProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [localFilters, setLocalFilters] = useState<EventFiltersType>(filters);

  // Sync local filters with prop filters
  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFilters = { ...localFilters, search: e.target.value };
    setLocalFilters(newFilters);
    // Debounce search - update parent immediately for now
    onFilterChange(newFilters);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as EventCategory | 'all';
    const newFilters = { ...localFilters, category: value };
    setLocalFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as 'upcoming' | 'completed' | 'all';
    const newFilters = { ...localFilters, status: value };
    setLocalFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleDateFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFilters = { ...localFilters, dateFrom: e.target.value || undefined };
    setLocalFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleDateToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFilters = { ...localFilters, dateTo: e.target.value || undefined };
    setLocalFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleClearFilters = () => {
    const clearedFilters: EventFiltersType = {
      category: 'all',
      status: 'all',
      search: '',
      dateFrom: undefined,
      dateTo: undefined,
    };
    setLocalFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  const hasActiveFilters =
    (localFilters.category && localFilters.category !== 'all') ||
    (localFilters.status && localFilters.status !== 'all') ||
    localFilters.search ||
    localFilters.dateFrom ||
    localFilters.dateTo;

  const categories = Object.entries(categoryInfo).map(([key, info]) => ({
    value: key,
    label: info.label,
    icon: info.icon,
  }));

  return (
    <div className={`bg-white rounded-lg shadow-md p-4 md:p-6 ${className}`}>
      {/* Mobile Filter Toggle */}
      <div className="flex items-center justify-between mb-4 md:hidden">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <Filter className="w-5 h-5" />
          Filters
        </h3>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Hide' : 'Show'}
        </Button>
      </div>

      {/* Filter Content */}
      <div className={`space-y-4 ${isExpanded ? 'block' : 'hidden md:block'}`}>
        {/* Search Bar */}
        <div className="relative">
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
            Search Events
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              id="search"
              type="text"
              placeholder="Search by keyword, speaker, or tag..."
              value={localFilters.search || ''}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            {localFilters.search && (
              <button
                onClick={() => {
                  const newFilters = { ...localFilters, search: '' };
                  setLocalFilters(newFilters);
                  onFilterChange(newFilters);
                }}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category and Status Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Category Filter */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              id="category"
              value={localFilters.category || 'all'}
              onChange={handleCategoryChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none bg-white cursor-pointer"
            >
              <option value="all">All Categories</option>
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.icon} {cat.label}
                </option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          {showStatusFilter && (
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                id="status"
                value={localFilters.status || 'all'}
                onChange={handleStatusChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none bg-white cursor-pointer"
              >
                <option value="all">All Events</option>
                <option value="upcoming">Upcoming Only</option>
                <option value="completed">Past Events</option>
              </select>
            </div>
          )}
        </div>

        {/* Date Range Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Date From */}
          <div>
            <label htmlFor="dateFrom" className="block text-sm font-medium text-gray-700 mb-2">
              <Calendar className="w-4 h-4 inline mr-1" />
              From Date
            </label>
            <input
              id="dateFrom"
              type="date"
              value={
                localFilters.dateFrom
                  ? typeof localFilters.dateFrom === 'string'
                    ? localFilters.dateFrom
                    : localFilters.dateFrom.toISOString().split('T')[0]
                  : ''
              }
              onChange={handleDateFromChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Date To */}
          <div>
            <label htmlFor="dateTo" className="block text-sm font-medium text-gray-700 mb-2">
              <Calendar className="w-4 h-4 inline mr-1" />
              To Date
            </label>
            <input
              id="dateTo"
              type="date"
              value={
                localFilters.dateTo
                  ? typeof localFilters.dateTo === 'string'
                    ? localFilters.dateTo
                    : localFilters.dateTo.toISOString().split('T')[0]
                  : ''
              }
              onChange={handleDateToChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Clear Filters Button */}
        {hasActiveFilters && (
          <div className="pt-2">
            <Button
              variant="outline"
              onClick={handleClearFilters}
              className="w-full md:w-auto"
            >
              <X className="w-4 h-4 mr-2" />
              Clear All Filters
            </Button>
          </div>
        )}

        {/* Active Filters Summary */}
        {hasActiveFilters && (
          <div className="pt-2 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-2">Active Filters:</p>
            <div className="flex flex-wrap gap-2">
              {localFilters.category && localFilters.category !== 'all' && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                  {categoryInfo[localFilters.category as EventCategory]?.label}
                  <button
                    onClick={() => {
                      const newFilters = { ...localFilters, category: 'all' };
                      setLocalFilters(newFilters);
                      onFilterChange(newFilters);
                    }}
                    className="hover:text-blue-900"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {localFilters.status && localFilters.status !== 'all' && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                  {localFilters.status === 'upcoming' ? 'Upcoming' : 'Past Events'}
                  <button
                    onClick={() => {
                      const newFilters = { ...localFilters, status: 'all' };
                      setLocalFilters(newFilters);
                      onFilterChange(newFilters);
                    }}
                    className="hover:text-green-900"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {localFilters.search && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                  Search: {localFilters.search}
                  <button
                    onClick={() => {
                      const newFilters = { ...localFilters, search: '' };
                      setLocalFilters(newFilters);
                      onFilterChange(newFilters);
                    }}
                    className="hover:text-purple-900"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {localFilters.dateFrom && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full">
                  From: {typeof localFilters.dateFrom === 'string' ? localFilters.dateFrom : localFilters.dateFrom.toLocaleDateString()}
                  <button
                    onClick={() => {
                      const newFilters = { ...localFilters, dateFrom: undefined };
                      setLocalFilters(newFilters);
                      onFilterChange(newFilters);
                    }}
                    className="hover:text-orange-900"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {localFilters.dateTo && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full">
                  To: {typeof localFilters.dateTo === 'string' ? localFilters.dateTo : localFilters.dateTo.toLocaleDateString()}
                  <button
                    onClick={() => {
                      const newFilters = { ...localFilters, dateTo: undefined };
                      setLocalFilters(newFilters);
                      onFilterChange(newFilters);
                    }}
                    className="hover:text-orange-900"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventFilters;
