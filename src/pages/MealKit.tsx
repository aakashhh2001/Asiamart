import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Clock, Users, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';

const categories = {
  nonVeg: [
    {
      id: 'nv1',
      name: 'Sushi Platter',
      origin: 'Japan',
      price: 1499,
      image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400',
      prepTime: '45 mins',
      servings: 4,
      description: 'Premium sushi kit with fresh salmon, tuna, and all necessary ingredients',
      ingredients: ['Sushi Rice', 'Nori', 'Fresh Salmon', 'Fresh Tuna', 'Cucumber', 'Avocado']
    },
    {
      id: 'nv2',
      name: 'Korean BBQ Set',
      origin: 'Korea',
      price: 1299,
      image: 'https://images.unsplash.com/photo-1632558610168-8377309e34c6?w=400',
      prepTime: '35 mins',
      servings: 3,
      description: 'Authentic Korean BBQ experience with marinated meat and sides',
      ingredients: ['Marinated Beef', 'Korean Rice', 'Kimchi', 'Lettuce', 'Sauces']
    },
    {
      id: 'nv3',
      name: 'Thai Green Curry',
      origin: 'Thailand',
      price: 899,
      image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400',
      prepTime: '30 mins',
      servings: 2,
      description: 'Aromatic Thai curry with chicken and fresh vegetables',
      ingredients: ['Chicken', 'Coconut Milk', 'Green Curry Paste', 'Thai Basil', 'Bamboo Shoots']
    }
  ],
  veg: [
    {
      id: 'v1',
      name: 'Shahi Paneer',
      origin: 'India',
      price: 899,
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400',
      prepTime: '40 mins',
      servings: 3,
      description: 'Rich and creamy paneer curry with royal spices',
      ingredients: ['Paneer', 'Cream', 'Cashews', 'Tomatoes', 'Indian Spices']
    },
    {
      id: 'v2',
      name: 'Pad Thai',
      origin: 'Thailand',
      price: 799,
      image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400',
      prepTime: '25 mins',
      servings: 2,
      description: 'Classic Thai stir-fried rice noodles with tofu',
      ingredients: ['Rice Noodles', 'Tofu', 'Bean Sprouts', 'Peanuts', 'Tamarind Sauce']
    },
    {
      id: 'v3',
      name: 'Vegetable Dimsum',
      origin: 'China',
      price: 699,
      image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400',
      prepTime: '45 mins',
      servings: 4,
      description: 'Steamed dumplings filled with fresh vegetables',
      ingredients: ['Dumpling Wrappers', 'Mixed Vegetables', 'Mushrooms', 'Ginger', 'Soy Sauce']
    }
  ]
};

function MealKit() {
  const [selectedCategory, setSelectedCategory] = useState('nonVeg');
  const [selectedMeal, setSelectedMeal] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const { addItem } = useCart();
  const navigate = useNavigate();

  const filteredMeals = categories[selectedCategory as keyof typeof categories].filter(
    meal => meal.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Categories Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex space-x-4">
            <button
              onClick={() => setSelectedCategory('nonVeg')}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === 'nonVeg'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Non-Vegetarian
            </button>
            <button
              onClick={() => setSelectedCategory('veg')}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === 'veg'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Vegetarian
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search meal kits..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Meal Kits Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMeals.map((meal) => (
            <div
              key={meal.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-200"
            >
              <img
                src={meal.image}
                alt={meal.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{meal.name}</h3>
                    <p className="text-sm text-gray-600">{meal.origin}</p>
                  </div>
                  <p className="text-green-600 font-bold">₹{meal.price}</p>
                </div>
                <div className="flex items-center space-x-4 mt-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {meal.prepTime}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {meal.servings} servings
                  </div>
                </div>
                <button
                  onClick={() => setSelectedMeal(meal)}
                  className="mt-4 text-green-600 hover:text-green-700 text-sm font-medium"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Meal Detail Modal */}
      {selectedMeal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6">
            <img
              src={selectedMeal.image}
              alt={selectedMeal.name}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="mt-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold">{selectedMeal.name}</h3>
                  <p className="text-gray-600">{selectedMeal.origin}</p>
                </div>
                <p className="text-green-600 font-bold text-xl">₹{selectedMeal.price}</p>
              </div>

              <p className="mt-4 text-gray-700">{selectedMeal.description}</p>

              <div className="mt-6">
                <h4 className="font-semibold mb-2">Ingredients:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {selectedMeal.ingredients.map((ingredient: string, index: number) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center space-x-4 mt-6 text-gray-600">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  {selectedMeal.prepTime}
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  {selectedMeal.servings} servings
                </div>
              </div>

              <div className="mt-8 flex space-x-4">
                <button
                  onClick={() => {
                    addItem({
                      id: selectedMeal.id,
                      name: selectedMeal.name,
                      price: selectedMeal.price,
                      quantity: 1
                    });
                    setSelectedMeal(null);
                  }}
                  className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => setSelectedMeal(null)}
                  className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-50"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MealKit;