import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser } from '../lib/supabase'

const PAYMENT_LINK = "https://buy.stripe.com/5kQcMYbUmdczcai0iK6J200"

export default function CreateListingPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [bedrooms, setBedrooms] = useState('')
  const [bathrooms, setBathrooms] = useState('')
  const [sqft, setSqft] = useState('')
  const [description, setDescription] = useState('')
  const [contactName, setContactName] = useState('')
  const [contactPhone, setContactPhone] = useState('')
  const [propertyType, setPropertyType] = useState('apartment')
  const [location, setLocation] = useState('')

  useEffect(() => {
    getCurrentUser().then(u => {
      if (!u) navigate('/login')
      else setEmail(u.email || '')
    })
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title || !price || !description || !contactName || !email) {
      alert('Please fill in all required fields')
      return
    }
    const encodedEmail = encodeURIComponent(email)
    window.location.href = `${PAYMENT_LINK}?prefilled_email=${encodedEmail}`
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">List Your Rental</h1>
      <p className="text-gray-600 mb-8">$10 flat fee • Live for 60 days • Reaches thousands of Kenai Peninsula renters</p>
      
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Listing Title *</label>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} required
              placeholder="e.g., 2BR Cabin with Mountain Views - Soldotna"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Rent *</label>
            <input type="number" value={price} onChange={e => setPrice(e.target.value)} required
              placeholder="1200"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
          <input type="text" value={location} onChange={e => setLocation(e.target.value)}
            placeholder="Soldotna, Kenai, Homer, Seward..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2" />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
            <select value={propertyType} onChange={e => setPropertyType(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2">
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="cabin">Cabin</option>
              <option value="room">Room</option>
              <option value="duplex">Duplex</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
            <input type="number" value={bedrooms} onChange={e => setBedrooms(e.target.value)} placeholder="2"
              className="w-full border border-gray-300 rounded-lg px-4 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Bathrooms</label>
            <input type="number" value={bathrooms} onChange={e => setBathrooms(e.target.value)} placeholder="1"
              className="w-full border border-gray-300 rounded-lg px-4 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Sq Ft</label>
            <input type="number" value={sqft} onChange={e => setSqft(e.target.value)} placeholder="900"
              className="w-full border border-gray-300 rounded-lg px-4 py-2" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
          <textarea value={description} onChange={e => setDescription(e.target.value)} required rows={5}
            placeholder="Describe the rental — amenities, utilities included, pet policy, availability..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
            <input type="text" value={contactName} onChange={e => setContactName(e.target.value)} required
              className="w-full border border-gray-300 rounded-lg px-4 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
              className="w-full border border-gray-300 rounded-lg px-4 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input type="tel" value={contactPhone} onChange={e => setContactPhone(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2" />
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-lg font-semibold text-gray-900">$10 flat fee • 60 days live</p>
          <p className="text-sm text-gray-600">One-time payment via Stripe • Instant activation • Secure checkout</p>
        </div>

        <button type="submit"
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">
          Pay $10 & List Your Rental →
        </button>
      </form>
    </div>
  )
}
