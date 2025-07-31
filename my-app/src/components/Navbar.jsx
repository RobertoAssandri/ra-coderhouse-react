import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
    // Estado para el conteo del carrito
  const [cartCount, setCartCount] = useState(0);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold">
                Tienda de Robert 
            </Link>
          </div>

          {/* Enlaces de navegación */}
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link
              to="/"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium hover:border-b-2 hover:border-white"
            >
               Inicio 
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium hover:border-b-2 hover:border-white"
            >
               Productos 
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium hover:border-b-2 hover:border-white"
            >
               Contacto 
            </Link>
          </div>

          {/* Widget del carrito */}
          <div className="flex items-center">
            <Link to="/cart" className="relative p-2">
              <ShoppingCartIcon className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;