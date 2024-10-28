import React from 'react';
import { Store, Truck, Users, Heart } from 'lucide-react';

function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Asia Mart</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your premier destination for authentic Asian groceries and meal kits, bringing the flavors of Asia to your doorstep.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6">
            <Store className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
            <p className="text-gray-600">Offering thousands of authentic Asian products and ingredients</p>
          </div>

          <div className="text-center p-6">
            <Truck className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Same-day delivery available in selected areas</p>
          </div>

          <div className="text-center p-6">
            <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Focus</h3>
            <p className="text-gray-600">Supporting local Asian communities and suppliers</p>
          </div>

          <div className="text-center p-6">
            <Heart className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quality First</h3>
            <p className="text-gray-600">Ensuring the highest quality products for our customers</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              Founded in 2020, Asia Mart began with a simple mission: to make authentic Asian groceries and meal kits accessible to everyone. What started as a small family business has grown into a trusted source for Asian cuisine enthusiasts across the country.
            </p>
            <p className="mb-4">
              We work directly with suppliers and producers across Asia to ensure the authenticity and quality of our products. Our team carefully curates each item in our inventory, from everyday essentials to specialty ingredients.
            </p>
            <p>
              Today, we're proud to serve thousands of customers, helping them create authentic Asian dishes in their own kitchens. Our meal kits make it easy for anyone to prepare restaurant-quality Asian dishes at home.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Authenticity</h3>
              <p className="text-gray-600">Providing genuine Asian products and maintaining cultural integrity</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-gray-600">Committed to eco-friendly packaging and responsible sourcing</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Customer Service</h3>
              <p className="text-gray-600">Dedicated to providing exceptional shopping experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;