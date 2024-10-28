import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';

const categories = {
  vegetables: [
    { id: 'v1', name: 'Tomato', price: 40, image: 'https://images.unsplash.com/photo-1546470427-f5b713b6f2b3?w=400', calories: 22, protein: 1.1, carbs: 4.8, fat: 0.2 },
    { id: 'v2', name: 'Potato', price: 30, image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400', calories: 77, protein: 2, carbs: 17, fat: 0.1 },
    { id: 'v3', name: 'Ladies Finger', price: 50, image: 'https://images.unsplash.com/photo-1425543103986-22abb7d7e8d2?w=400', calories: 33, protein: 1.9, carbs: 7, fat: 0.2 },
    { id: 'v4', name: 'Broccoli', price: 120, image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400', calories: 55, protein: 3.7, carbs: 11.2, fat: 0.6 },
    { id: 'v5', name: 'Cauliflower', price: 40, image: 'https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=400', calories: 25, protein: 1.9, carbs: 5, fat: 0.3 },
    { id: 'v6', name: 'Cabbage', price: 30, image: 'https://images.unsplash.com/photo-1551889761-6c245c2b8078?w=400', calories: 25, protein: 1.3, carbs: 5.8, fat: 0.1 },
    { id: 'v7', name: 'Spinach', price: 20, image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400', calories: 23, protein: 2.9, carbs: 3.6, fat: 0.4 },
    { id: 'v8', name: 'Carrot', price: 40, image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400', calories: 41, protein: 0.9, carbs: 9.6, fat: 0.2 }
  ],
  fruits: [
    { id: 'f1', name: 'Apple', price: 180, image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400', calories: 52, protein: 0.3, carbs: 14, fat: 0.2 },
    { id: 'f2', name: 'Dragon Fruit', price: 250, image: 'https://images.unsplash.com/photo-1527325678964-54921661f888?w=400', calories: 60, protein: 1.2, carbs: 13, fat: 0.4 },
    { id: 'f3', name: 'Avocado', price: 300, image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400', calories: 160, protein: 2, carbs: 9, fat: 15 },
    { id: 'f4', name: 'Blackberry', price: 400, image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400', calories: 43, protein: 1.4, carbs: 10, fat: 0.5 },
    { id: 'f5', name: 'Banana', price: 60, image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400', calories: 89, protein: 1.1, carbs: 23, fat: 0.3 },
    { id: 'f6', name: 'Mangosteen', price: 450, image: 'https://images.unsplash.com/photo-1591335941584-2638d1a3f003?w=400', calories: 63, protein: 0.5, carbs: 15.6, fat: 0.3 },
    { id: 'f7', name: 'Rambutan', price: 350, image: 'https://images.unsplash.com/photo-1622944925708-7d57a8e06f51?w=400', calories: 75, protein: 0.9, carbs: 18.7, fat: 0.3 },
    { id: 'f8', name: 'Lychee', price: 300, image: 'https://images.unsplash.com/photo-1620809512045-48b3f28c9ef4?w=400', calories: 66, protein: 0.8, carbs: 16.5, fat: 0.4 },
    { id: 'f9', name: 'Jackfruit', price: 200, image: 'https://images.unsplash.com/photo-1591942389078-acde1e76bd90?w=400', calories: 95, protein: 1.7, carbs: 23.2, fat: 0.6 }
  ],
  grains: [
    { id: 'g1', name: 'Basmati Rice', price: 160, image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400', calories: 130, protein: 3.5, carbs: 28, fat: 0.3 },
    { id: 'g2', name: 'Uruchimai Rice', price: 180, image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=400', calories: 130, protein: 2.7, carbs: 28, fat: 0.3 },
    { id: 'g3', name: 'Rice Paper', price: 120, image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=400', calories: 85, protein: 0.7, carbs: 20, fat: 0.1 },
    { id: 'g4', name: 'Black Rice', price: 220, image: 'https://images.unsplash.com/photo-1602130707183-4ee5855ae841?w=400', calories: 160, protein: 4, carbs: 34, fat: 1.5 }
  ],
  dairy: [
    { id: 'd1', name: 'Milk', price: 60, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400', calories: 103, protein: 8, carbs: 12, fat: 2.4 },
    { id: 'd2', name: 'Curd', price: 40, image: 'https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?w=400', calories: 98, protein: 11, carbs: 4.4, fat: 4.3 },
    { id: 'd3', name: 'Yogurt', price: 45, image: 'https://images.unsplash.com/photo-1584278860047-22db9ff82bed?w=400', calories: 59, protein: 10, carbs: 3.6, fat: 0.4 },
    { id: 'd4', name: 'Butter', price: 120, image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400', calories: 717, protein: 0.9, carbs: 0.1, fat: 81 },
    { id: 'd5', name: 'Cheese', price: 180, image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400', calories: 402, protein: 25, carbs: 1.3, fat: 33 }
  ],
  meats: [
    { id: 'm1', name: 'Beef Meat', price: 550, image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=400', calories: 250, protein: 26, carbs: 0, fat: 17 },
    { id: 'm2', name: 'Chicken Meat', price: 280, image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400', calories: 165, protein: 31, carbs: 0, fat: 3.6 },
    { id: 'm3', name: 'Pork Meat', price: 450, image: 'https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=400', calories: 242, protein: 27, carbs: 0, fat: 14 },
    { id: 'm4', name: 'Lamb Meat', price: 650, image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400', calories: 294, protein: 25, carbs: 0, fat: 21 }
  ]
};

export default function Grocery() {
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState('vegetables');
  const [searchQuery, setSearchQuery] = useState('');
  const { addItem } = useCart();
  const navigate = useNavigate();

  const filteredItems = categories[selectedCategory as keyof typeof categories].filter(
    item => item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Categories Section */}
      <div id="categories-section" className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex overflow-x-auto space-x-4 pb-2">
            {Object.keys(categories).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Items Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-200"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                <p className="text-green-600 font-bold mt-1">₹{item.price}</p>
                <button
                  onClick={() => setSelectedItem(item)}
                  className="mt-2 text-sm text-green-600 hover:text-green-700"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Item Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-xl font-bold mt-4">{selectedItem.name}</h3>
            <p className="text-green-600 font-bold text-lg mt-2">
              ₹{selectedItem.price}
            </p>
            
            <div className="mt-4 space-y-2">
              <p><span className="font-medium">Calories:</span> {selectedItem.calories}</p>
              <p><span className="font-medium">Protein:</span> {selectedItem.protein}g</p>
              <p><span className="font-medium">Carbs:</span> {selectedItem.carbs}g</p>
              <p><span className="font-medium">Fat:</span> {selectedItem.fat}g</p>
            </div>

            <div className="mt-6 flex space-x-4">
              <button
                onClick={() => {
                  addItem({
                    id: selectedItem.id,
                    name: selectedItem.name,
                    price: selectedItem.price,
                    quantity: 1
                  });
                  setSelectedItem(null);
                }}
                className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
              >
                Add to Cart
              </button>
              <button
                onClick={() => setSelectedItem(null)}
                className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}