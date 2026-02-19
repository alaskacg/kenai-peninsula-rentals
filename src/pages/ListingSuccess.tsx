import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function ListingSuccess() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-16 max-w-2xl">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full">
            <svg className="w-12 h-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900">Payment Successful!</h1>
          
          <p className="text-lg text-gray-600">
            Your listing is now live and visible to thousands of Alaska buyers.
            It will remain active for 60 days.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-left space-y-2">
            <h3 className="font-semibold text-blue-900">What happens next?</h3>
            <ul className="space-y-1 text-blue-800 text-sm">
              <li>✓ Your listing is live and searchable immediately</li>
              <li>✓ You'll receive a confirmation email</li>
              <li>✓ Interested buyers will contact you directly</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
              Back to Home
            </Link>
            <Link to="/create" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50">
              Post Another Listing
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
