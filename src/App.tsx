import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Auth from './pages/Auth';
import CountrySelect from './pages/CountrySelect';
import Options from './pages/Options';
import Grocery from './pages/Grocery';
import MealKit from './pages/MealKit';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Navigate to="/auth" replace />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/country-select" element={<CountrySelect />} />
                <Route path="/options" element={<Options />} />
                <Route path="/grocery" element={<Grocery />} />
                <Route path="/meal-kit" element={<MealKit />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;