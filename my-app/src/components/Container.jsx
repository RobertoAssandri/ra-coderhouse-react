const Container = ({ welcomeMessage = 'Bienvenidos a la tienda de Robert', children }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Mensaje de bienvenida */}
      <h1 className="text-3xl font-bold text-gray-900 mb-6">{welcomeMessage}</h1>

      {/* Contenedor para el catálogo de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {children || (
          <p className="text-gray-500 col-span-full text-center">
            Acá van a estar los productos.
          </p>
        )}
      </div>
    </div>
  );
};

export default Container;