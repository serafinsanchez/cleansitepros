'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

// Add US states array
const US_STATES = [
  { value: 'AL', label: 'Alabama' },
  { value: 'AK', label: 'Alaska' },
  { value: 'AZ', label: 'Arizona' },
  { value: 'AR', label: 'Arkansas' },
  { value: 'CA', label: 'California' },
  { value: 'CO', label: 'Colorado' },
  { value: 'CT', label: 'Connecticut' },
  { value: 'DE', label: 'Delaware' },
  { value: 'FL', label: 'Florida' },
  { value: 'GA', label: 'Georgia' },
  { value: 'HI', label: 'Hawaii' },
  { value: 'ID', label: 'Idaho' },
  { value: 'IL', label: 'Illinois' },
  { value: 'IN', label: 'Indiana' },
  { value: 'IA', label: 'Iowa' },
  { value: 'KS', label: 'Kansas' },
  { value: 'KY', label: 'Kentucky' },
  { value: 'LA', label: 'Louisiana' },
  { value: 'ME', label: 'Maine' },
  { value: 'MD', label: 'Maryland' },
  { value: 'MA', label: 'Massachusetts' },
  { value: 'MI', label: 'Michigan' },
  { value: 'MN', label: 'Minnesota' },
  { value: 'MS', label: 'Mississippi' },
  { value: 'MO', label: 'Missouri' },
  { value: 'MT', label: 'Montana' },
  { value: 'NE', label: 'Nebraska' },
  { value: 'NV', label: 'Nevada' },
  { value: 'NH', label: 'New Hampshire' },
  { value: 'NJ', label: 'New Jersey' },
  { value: 'NM', label: 'New Mexico' },
  { value: 'NY', label: 'New York' },
  { value: 'NC', label: 'North Carolina' },
  { value: 'ND', label: 'North Dakota' },
  { value: 'OH', label: 'Ohio' },
  { value: 'OK', label: 'Oklahoma' },
  { value: 'OR', label: 'Oregon' },
  { value: 'PA', label: 'Pennsylvania' },
  { value: 'RI', label: 'Rhode Island' },
  { value: 'SC', label: 'South Carolina' },
  { value: 'SD', label: 'South Dakota' },
  { value: 'TN', label: 'Tennessee' },
  { value: 'TX', label: 'Texas' },
  { value: 'UT', label: 'Utah' },
  { value: 'VT', label: 'Vermont' },
  { value: 'VA', label: 'Virginia' },
  { value: 'WA', label: 'Washington' },
  { value: 'WV', label: 'West Virginia' },
  { value: 'WI', label: 'Wisconsin' },
  { value: 'WY', label: 'Wyoming' }
] as const;

export default function WaitlistForm() {
  const router = useRouter()
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const validateForm = (formData: FormData) => {
    const newErrors: Record<string, string> = {}
    
    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const businessName = formData.get('businessName') as string
    const email = formData.get('email') as string
    const city = formData.get('city') as string
    const state = formData.get('state') as string
    const zipcode = formData.get('zipcode') as string
    const businessType = formData.get('businessType') as string
    const notes = formData.get('notes') as string

    if (!firstName?.trim()) {
      newErrors.firstName = 'First name is required'
    }

    if (!lastName?.trim()) {
      newErrors.lastName = 'Last name is required'
    }

    if (!businessName?.trim()) {
      newErrors.businessName = 'Business name is required'
    }

    if (!email?.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!city?.trim()) {
      newErrors.city = 'City is required'
    }

    if (!state?.trim()) {
      newErrors.state = 'State is required'
    }

    if (!zipcode?.trim()) {
      newErrors.zipcode = 'ZIP code is required'
    } else if (!/^\d{5}(-\d{4})?$/.test(zipcode)) {
      newErrors.zipcode = 'Please enter a valid ZIP code'
    }

    if (!businessType) {
      newErrors.businessType = 'Please select your business type'
    }

    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')
    
    const formData = new FormData(e.currentTarget)
    const validationErrors = validateForm(formData)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.get('firstName'),
          lastName: formData.get('lastName'),
          businessName: formData.get('businessName'),
          email: formData.get('email'),
          city: formData.get('city'),
          state: formData.get('state'),
          zipcode: formData.get('zipcode'),
          businessType: formData.get('businessType'),
          notes: formData.get('notes'),
        }),
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      // Redirect to success page
      router.push('/waitlist/success')
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitError('Failed to join waitlist. Please try again.')
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium mb-2">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.firstName ? 'border-red-500' : 'border-gray-200'
            } dark:border-gray-700 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500`}
            placeholder="John"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.lastName ? 'border-red-500' : 'border-gray-200'
            } dark:border-gray-700 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500`}
            placeholder="Smith"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="businessName" className="block text-sm font-medium mb-2">
          Business Name
        </label>
        <input
          type="text"
          id="businessName"
          name="businessName"
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.businessName ? 'border-red-500' : 'border-gray-200'
          } dark:border-gray-700 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500`}
          placeholder="Your Cleaning Business Name"
        />
        {errors.businessName && (
          <p className="mt-1 text-sm text-red-500">{errors.businessName}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.email ? 'border-red-500' : 'border-gray-200'
          } dark:border-gray-700 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500`}
          placeholder="you@company.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="city" className="block text-sm font-medium mb-2">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.city ? 'border-red-500' : 'border-gray-200'
            } dark:border-gray-700 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500`}
            placeholder="City"
          />
          {errors.city && (
            <p className="mt-1 text-sm text-red-500">{errors.city}</p>
          )}
        </div>

        <div>
          <label htmlFor="state" className="block text-sm font-medium mb-2">
            State
          </label>
          <select
            id="state"
            name="state"
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.state ? 'border-red-500' : 'border-gray-200'
            } dark:border-gray-700 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500`}
          >
            <option value="">State</option>
            {US_STATES.map(state => (
              <option key={state.value} value={state.value}>
                {state.label}
              </option>
            ))}
          </select>
          {errors.state && (
            <p className="mt-1 text-sm text-red-500">{errors.state}</p>
          )}
        </div>

        <div>
          <label htmlFor="zipcode" className="block text-sm font-medium mb-2">
            ZIP Code
          </label>
          <input
            type="text"
            id="zipcode"
            name="zipcode"
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.zipcode ? 'border-red-500' : 'border-gray-200'
            } dark:border-gray-700 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500`}
            placeholder="80202"
            maxLength={10}
          />
          {errors.zipcode && (
            <p className="mt-1 text-sm text-red-500">{errors.zipcode}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="businessType" className="block text-sm font-medium mb-2">
          Business Type
        </label>
        <select
          id="businessType"
          name="businessType"
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.businessType ? 'border-red-500' : 'border-gray-200'
          } dark:border-gray-700 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500`}
        >
          <option value="">Select your business type</option>
          <option value="residential">Residential Cleaning</option>
          <option value="commercial">Commercial Cleaning</option>
          <option value="both">Other</option>
        </select>
        {errors.businessType && (
          <p className="mt-1 text-sm text-red-500">{errors.businessType}</p>
        )}
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium mb-2">
          Anything else you'd like us to know? (Optional)
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500"
          placeholder="Tell us about your business goals, specific needs, or any questions you have..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Reserving Your Spot...' : 'Reserve Your Spot'}
      </button>
      {submitError && (
        <p className="mt-1 text-sm text-red-500">{submitError}</p>
      )}
    </form>
  )
} 