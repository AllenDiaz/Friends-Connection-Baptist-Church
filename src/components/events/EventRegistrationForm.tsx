'use client';

import { useState } from 'react';
import { CheckCircle, AlertCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Event } from '@/types/event';

interface EventRegistrationFormProps {
  event: Event;
  onSuccess?: () => void;
  onError?: (error: string) => void;
  className?: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  attendees: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  attendees?: string;
}

const EventRegistrationForm = ({
  event,
  onSuccess,
  onError,
  className = '',
}: EventRegistrationFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    attendees: '1',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    if (!phone) return true; // Phone is optional
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation (optional but must be valid if provided)
    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Attendees validation
    const attendeeCount = parseInt(formData.attendees);
    if (isNaN(attendeeCount) || attendeeCount < 1) {
      newErrors.attendees = 'Please select at least 1 attendee';
    } else if (event.registration?.maxAttendees) {
      const remainingSpots =
        event.registration.maxAttendees - (event.registration.currentAttendees || 0);
      if (attendeeCount > remainingSpots) {
        newErrors.attendees = `Only ${remainingSpots} spot${remainingSpots === 1 ? '' : 's'} remaining`;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      attendees: '1',
      message: '',
    });
    setErrors({});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Simulate API call
      // In a real application, this would be an API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulate random success/failure for demo
      const isSuccess = Math.random() > 0.1; // 90% success rate

      if (isSuccess) {
        setSubmitStatus('success');
        resetForm();
        if (onSuccess) {
          onSuccess();
        }

        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        throw new Error('Registration failed. Please try again.');
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'An error occurred';
      setSubmitStatus('error');
      setErrorMessage(message);
      if (onError) {
        onError(message);
      }

      // Auto-hide error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setErrorMessage('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Calculate remaining spots
  const remainingSpots = event.registration?.maxAttendees
    ? event.registration.maxAttendees - (event.registration.currentAttendees || 0)
    : null;

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <h3 className="text-xl font-bold text-gray-900 mb-4">Register for Event</h3>

      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-green-800">Registration Submitted Successfully!</p>
              <p className="text-sm text-green-700 mt-1">
                We've sent a confirmation email to {formData.email}. Please check your inbox.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-red-800">Registration Failed</p>
              <p className="text-sm text-red-700 mt-1">{errorMessage}</p>
            </div>
          </div>
        </div>
      )}

      {/* Registration Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full px-4 py-2.5 border rounded-lg transition-all focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
            }`}
            placeholder="John Doe"
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.name}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full px-4 py-2.5 border rounded-lg transition-all focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
            }`}
            placeholder="john.doe@example.com"
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number <span className="text-gray-400 text-xs">(Optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className={`w-full px-4 py-2.5 border rounded-lg transition-all focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-300'
            }`}
            placeholder="(555) 123-4567"
            disabled={isSubmitting}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.phone}
            </p>
          )}
        </div>

        {/* Number of Attendees */}
        <div>
          <label htmlFor="attendees" className="block text-sm font-medium text-gray-700 mb-1">
            Number of Attendees <span className="text-red-500">*</span>
          </label>
          <select
            id="attendees"
            name="attendees"
            value={formData.attendees}
            onChange={handleInputChange}
            className={`w-full px-4 py-2.5 border rounded-lg transition-all focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white cursor-pointer ${
              errors.attendees ? 'border-red-300 bg-red-50' : 'border-gray-300'
            }`}
            disabled={isSubmitting}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? 'Person' : 'People'}
              </option>
            ))}
          </select>
          {errors.attendees && (
            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.attendees}
            </p>
          )}
          {remainingSpots !== null && (
            <p className="mt-1 text-xs text-gray-500">
              {remainingSpots} spot{remainingSpots === 1 ? '' : 's'} remaining
            </p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message or Special Requests <span className="text-gray-400 text-xs">(Optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg transition-all focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            placeholder="Any questions or special requirements?"
            disabled={isSubmitting}
          />
        </div>

        {/* Cost Information */}
        {event.registration?.cost !== undefined && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-sm font-medium text-blue-900">
              {event.registration.cost === 0 ? (
                <>✓ This is a FREE event</>
              ) : (
                <>
                  Registration Fee: <span className="font-bold">${event.registration.cost}</span>
                  {parseInt(formData.attendees) > 1 && (
                    <span className="ml-1">
                      × {formData.attendees} ={' '}
                      <span className="font-bold">
                        ${event.registration.cost * parseInt(formData.attendees)}
                      </span>
                    </span>
                  )}
                </>
              )}
            </p>
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          variant="gradient"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="inline-block animate-spin mr-2">⏳</span>
              Submitting...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Submit Registration
            </>
          )}
        </Button>

        {/* Privacy Note */}
        <p className="text-xs text-gray-500 text-center">
          Your information will only be used for event registration purposes.
        </p>
      </form>
    </div>
  );
};

export default EventRegistrationForm;
