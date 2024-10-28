import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const indianStates = [
  { code: 'MH', name: 'Maharashtra' },
  { code: 'DL', name: 'Delhi' },
  { code: 'KA', name: 'Karnataka' },
  { code: 'TN', name: 'Tamil Nadu' },
  { code: 'GJ', name: 'Gujarat' },
  { code: 'WB', name: 'West Bengal' },
  { code: 'UP', name: 'Uttar Pradesh' },
  { code: 'TS', name: 'Telangana' },
  { code: 'AP', name: 'Andhra Pradesh' },
  { code: 'KL', name: 'Kerala' },
].sort((a, b) => a.name.localeCompare(b.name));

function CountrySelect() {
  const navigate = useNavigate();
  const [selectedState, setSelectedState] = React.useState('');

  const handleStateSelect = () => {
    if (selectedState) {
      localStorage.setItem('selectedState', selectedState);
      navigate('/options');
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <MapPin className="mx-auto h-12 w-12 text-green-600" />
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Select Your Location</h2>
          <p className="mt-2 text-gray-600">Choose your state to get started</p>
        </div>

        <div className="mt-8">
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="">Select a state</option>
            {indianStates.map((state) => (
              <option key={state.code} value={state.code}>
                {state.name}
              </option>
            ))}
          </select>

          <button
            onClick={handleStateSelect}
            disabled={!selectedState}
            className={`mt-6 w-full py-3 rounded-lg text-white transition duration-200 ${
              selectedState
                ? 'bg-green-600 hover:bg-green-700'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default CountrySelect;