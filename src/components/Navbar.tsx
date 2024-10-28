import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, ShoppingBag, LogOut } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { items } = useCart();
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const cartItemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleHomeClick = () => {
    navigate('/options');
  };

  const handleLogoClick = () => {
    navigate('/options');
  };

  const handleCategoriesClick = () => {
    const element = document.getElementById('categories-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  // Don't show navigation elements on auth and country-select pages
  if (location.pathname === '/auth' || location.pathname === '/country-select') {
    return (
      <nav className="bg-gradient-to-r from-green-600 to-green-700 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center space-x-2 cursor-pointer" onClick={handleLogoClick}>
              <ShoppingBag className="h-6 w-6 text-white" />
              <h1 className="text-2xl font-bold text-white">asiamart</h1>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="bg-gradient-to-r from-green-600 to-green-700 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-2 cursor-pointer" onClick={handleLogoClick}>
            <ShoppingBag className="h-6 w-6 text-white" />
            <h1 className="text-2xl font-bold text-white">asiamart</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={handleHomeClick} className="text-white hover:text-green-100">
              Home
            </button>
            <button onClick={handleCategoriesClick} className="text-white hover:text-green-100">
              Categories
            </button>
            <button onClick={() => navigate('/about')} className="text-white hover:text-green-100">
              About
            </button>
            <button onClick={handleContactClick} className="text-white hover:text-green-100">
              Contact
            </button>
            <button
              onClick={() => navigate('/cart')}
              className="relative p-2"
            >
              <ShoppingCart className="h-6 w-6 text-white hover:text-green-100" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-white text-green-600 text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
            {user && (
              <button
                onClick={handleLogout}
                className="flex items-center space-x-1 text-white hover:text-green-100"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => navigate('/cart')}
              className="relative p-2 mr-4"
            >
              <ShoppingCart className="h-6 w-6 text-white" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-white text-green-600 text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              <Menu className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => {
                  handleHomeClick();
                  setIsMenuOpen(false);
                }}
                className="text-white hover:text-green-100"
              >
                Home
              </button>
              <button
                onClick={() => {
                  handleCategoriesClick();
                  setIsMenuOpen(false);
                }}
                className="text-white hover:text-green-100"
              >
                Categories
              </button>
              <button
                onClick={() => {
                  navigate('/about');
                  setIsMenuOpen(false);
                }}
                className="text-white hover:text-green-100"
              >
                About
              </button>
              <button
                onClick={() => {
                  handleContactClick();
                  setIsMenuOpen(false);
                }}
                className="text-white hover:text-green-100"
              >
                Contact
              </button>
              {user && (
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center space-x-1 text-white hover:text-green-100"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;