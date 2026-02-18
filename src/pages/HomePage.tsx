import { Link } from 'react-router-dom'
import { Search, DollarSign, Shield, TrendingUp, MapPin, Home, Building, Palmtree, Bed, Bath, Maximize, BookOpen, HelpCircle, Phone, Briefcase } from 'lucide-react'
import TrustBadge from '../components/TrustBadge'
import EmpireNetwork from '../components/EmpireNetwork'

const featuredRentals = [
  { title: '2BR Apartment - Downtown Kenai', price: '$1,350/mo', beds: 2, baths: 1, sqft: 850, type: 'Long-term', location: 'Kenai', img: '🏢' },
  { title: 'Cozy Log Cabin on the River', price: '$175/night', beds: 1, baths: 1, sqft: 600, type: 'Vacation', location: 'Cooper Landing', img: '🏡' },
  { title: '3BR Family Home - Soldotna', price: '$1,800/mo', beds: 3, baths: 2, sqft: 1400, type: 'Long-term', location: 'Soldotna', img: '🏠' },
  { title: 'Homer Bay View Suite', price: '$225/night', beds: 2, baths: 1, sqft: 900, type: 'Vacation', location: 'Homer', img: '🌅' },
  { title: 'Commercial Office Space', price: '$2,200/mo', beds: 0, baths: 1, sqft: 1200, type: 'Commercial', location: 'Kenai', img: '🏗️' },
  { title: 'Furnished Studio - Short Term', price: '$1,100/mo', beds: 1, baths: 1, sqft: 500, type: 'Short-term', location: 'Soldotna', img: '🛏️' },
];

const rentalTypes = [
  { icon: <Home size={28} />, color: 'bg-blue-100 text-blue-600', title: 'Long-Term Rentals', desc: 'Apartments, houses, and duplexes with 6–12 month leases for year-round residents.' },
  { icon: <Palmtree size={28} />, color: 'bg-green-100 text-green-600', title: 'Short-Term Rentals', desc: 'Furnished monthly rentals perfect for seasonal workers, traveling nurses, and relocators.' },
  { icon: <Bed size={28} />, color: 'bg-purple-100 text-purple-600', title: 'Vacation Rentals', desc: 'Cabins, lodges, and waterfront retreats for tourists and weekend getaways.' },
  { icon: <Building size={28} />, color: 'bg-orange-100 text-orange-600', title: 'Commercial Rentals', desc: 'Office space, retail storefronts, and warehouse units for businesses of all sizes.' },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <p className="text-blue-200 font-semibold tracking-wide uppercase text-sm mb-3">Kenai Peninsula Rentals</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Your Perfect Rental Home
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl">
            Apartments, cabins, vacation rentals, and commercial space on the Kenai Peninsula. Simple $10 listing fee for landlords.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/browse"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 text-center"
            >
              Browse Rentals
            </Link>
            <Link
              to="/create-listing"
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 text-center"
            >
              List a Rental - $10
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Rentals */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Featured Rentals</h2>
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">Top rental properties across the Kenai Peninsula — from cozy cabins to downtown apartments.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredRentals.map((r, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 text-center py-8 text-6xl">{r.img}</div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-gray-900">{r.title}</h3>
                  <span className="text-blue-600 font-bold text-lg whitespace-nowrap ml-2">{r.price}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1"><MapPin size={14} /> {r.location}</span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-medium">{r.type}</span>
                </div>
                <div className="flex gap-4 text-sm text-gray-600 border-t border-gray-200 pt-3">
                  {r.beds > 0 && <span className="flex items-center gap-1"><Bed size={14} /> {r.beds} Bed{r.beds > 1 ? 's' : ''}</span>}
                  <span className="flex items-center gap-1"><Bath size={14} /> {r.baths} Bath</span>
                  <span className="flex items-center gap-1"><Maximize size={14} /> {r.sqft.toLocaleString()} sqft</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/browse" className="text-blue-600 hover:underline font-semibold">View all rentals →</Link>
        </div>
      </div>

      {/* Rental Types */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Browse by Rental Type</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">Whatever your needs, find the right rental on the Kenai Peninsula.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rentalTypes.map((rt, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:shadow-md transition-shadow">
                <div className={`${rt.color} w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4`}>{rt.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{rt.title}</h3>
                <p className="text-gray-600 text-sm">{rt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Renter Resources */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Renter Resources</h2>
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">Helpful information for tenants in the Kenai Peninsula Borough.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <BookOpen className="text-blue-600 mb-3" size={32} />
            <h3 className="font-bold text-lg text-gray-900 mb-2">Alaska Tenant Rights</h3>
            <p className="text-gray-600 text-sm">Know your rights under the Alaska Uniform Residential Landlord and Tenant Act — security deposits, lease terms, and eviction protections.</p>
          </div>
          <div className="bg-green-50 rounded-xl p-6 border border-green-100">
            <HelpCircle className="text-green-600 mb-3" size={32} />
            <h3 className="font-bold text-lg text-gray-900 mb-2">Rental Assistance Programs</h3>
            <p className="text-gray-600 text-sm">Alaska Housing Finance Corporation and borough programs offer emergency rental assistance, utility help, and housing vouchers for qualifying residents.</p>
          </div>
          <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
            <Phone className="text-purple-600 mb-3" size={32} />
            <h3 className="font-bold text-lg text-gray-900 mb-2">Report Housing Issues</h3>
            <p className="text-gray-600 text-sm">Contact the Borough Code Enforcement office for habitability concerns, or Alaska Legal Services for free legal advice on landlord-tenant disputes.</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Platform?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Simple Pricing</h3>
              <p className="text-gray-600">$10 flat fee for 60-day listings. Featured upgrades available for $20.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
              <p className="text-gray-600">Verified sellers, secure payments, and comprehensive safety guidelines.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Search</h3>
              <p className="text-gray-600">Filter by price, location, features, and more to find exactly what you need.</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">High Visibility</h3>
              <p className="text-gray-600">Professional listings with photo galleries, videos, and detailed descriptions.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badge */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <TrustBadge />
      </div>

      {/* Property Management CTA */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Briefcase className="mx-auto mb-4 text-indigo-200" size={48} />
          <h2 className="text-3xl font-bold mb-4">Property Owners & Managers</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            List unlimited properties, manage inquiries, and reach qualified tenants across the Kenai Peninsula. Professional tools for professional landlords.
          </p>
          <Link
            to="/create-listing"
            className="bg-white text-indigo-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 inline-block"
          >
            List Your Property Now - $10
          </Link>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Rental?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of satisfied renters and landlords on Alaska's most trusted rental platform.
          </p>
          <Link
            to="/browse"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 inline-block"
          >
            Browse All Rentals
          </Link>
        </div>
      </div>

      {/* Empire Network */}
      <EmpireNetwork currentSite="kenai-peninsula-rentals" />
    </div>
  )
}
