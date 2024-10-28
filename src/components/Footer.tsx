import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">About asiamart</h3>
            <p className="text-gray-600">
              Your one-stop destination for fresh groceries and delicious meal kits delivered right to your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><button className="text-gray-600 hover:text-green-600">About Us</button></li>
              <li><button className="text-gray-600 hover:text-green-600">Contact</button></li>
              <li><button className="text-gray-600 hover:text-green-600">FAQ</button></li>
              <li><button className="text-gray-600 hover:text-green-600">Privacy Policy</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600">
                <Phone className="h-5 w-5 mr-2" />
                <span>+91 (555) 123-4567</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Mail className="h-5 w-5 mr-2" />
                <span>support@asiamart.com</span>
              </li>
              <li className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-2" />
                <span>123 Market St, Mumbai</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <button className="text-gray-600 hover:text-green-600">
                <Facebook className="h-6 w-6" />
              </button>
              <button className="text-gray-600 hover:text-green-600">
                <Twitter className="h-6 w-6" />
              </button>
              <button className="text-gray-600 hover:text-green-600">
                <Instagram className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} asiamart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;