import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, UtensilsCrossed } from 'lucide-react';

export default function Options() {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mt-8">
          Choose a Service
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Grocery Option */}
          <button
            onClick={() => navigate('/grocery')}
            className="group relative h-80 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-green-600/90 to-green-600/40 group-hover:from-green-600/95 transition-all duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <ShoppingBag className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Grocery Shopping</h3>
              <p className="text-white/90">
                Browse our fresh produce, pantry essentials, and everyday needs
              </p>
            </div>
          </button>

          {/* Meal Kit Option */}
          <button
            onClick={() => navigate('/meal-kit')}
            className="group relative h-80 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1000')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-green-600/90 to-green-600/40 group-hover:from-green-600/95 transition-all duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <UtensilsCrossed className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Meal Kits</h3>
              <p className="text-white/90">
                Discover chef-curated recipes with pre-portioned ingredients
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}